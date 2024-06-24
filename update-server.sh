#!/bin/bash

# Log function for consistent logging format
log() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') - $1"
}

# Error function for logging errors and exiting script
error() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') - ERROR: $1" >&2
    exit 1
}

# Function to execute commands with sudo and handle password input
execute_remote_with_sudo() {
    local remote_host=$1
    local command=$2

    # Execute sudo command on remote server with interactive password prompt
    ssh -t www.manoskarystinos.com "sudo systemctl restart uwsgi"
}

execute_remote_with_venv() {
    local remote_host=$1
    local venv_path=$2
    local command=$3

    # Execute command within activated venv on remote server
    ssh -t $remote_host "source $venv_path/bin/activate && cd /var/www/manos-movies/movies-backend && $command"
}

# Step 1: Git pull in localdir/movie-frontend
log "Step 1: Git pull in /movie-frontend"
git pull || error "Git pull failed"

# Step 2: Install npm packages
log "Step 2: Install npm packages"
npm install || error "Failed to install npm packages"

# Step 3: Build the frontend
log "Step 3: Build the frontend"
npm run build || error "Failed to build the frontend"

# Step 4: SCP the build to remote server
log "Step 4: SCP the build to remote server"
scp -r build/* www.manoskarystinos.com:/var/www/manos-movies/movies-backend/frontend_build || error "Failed to copy build to remote server"

# Step 5: Activate venv and run collectstatic on remote server
log "Step 5: Activate venv and run collectstatic on remote server"
execute_remote_with_venv "www.manoskarystinos.com" "/var/www/manos-movies/venv" "python3 manage.py collectstatic --noinput" || error "Failed to run collectstatic on remote server"

# # Step 6: Restart uWSGI on remote server
# log "Step 6: Restart uWSGI on remote server"
# execute_remote_with_sudo "www.manoskarystinos.com" "systemctl restart uwsgi" || error "Failed to restart uWSGI on remote server"

# Step 9: Confirmation
log "Update process completed successfully."
