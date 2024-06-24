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

# Step 5: Restart uWSGI on remote server
log "Step 5: Restart uWSGI on remote server"
ssh www.manoskarystinos.com 'sudo systemctl restart uwsgi' || error "Failed to restart uWSGI on remote server"

# Step 6: Delay before checking uWSGI status
log "Step 6: Delay before checking uWSGI status"
sleep 5

# Step 7: Check uWSGI status on remote server and proceed only if active
log "Step 7: Check uWSGI status on remote server"
if ssh www.manoskarystinos.com 'sudo systemctl is-active --quiet uwsgi'; then
    log "uWSGI is active on the remote server."
else
    error "uWSGI is not active on the remote server."
fi

# Step 8: Confirmation
log "Update process completed successfully."
