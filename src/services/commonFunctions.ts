export const isDevEnv = () => process.env.REACT_APP_ENV === "dev";

export const getImageLink = (imageUrl: string) => {
  return isDevEnv()
    ? `http://localhost:8000${imageUrl}`
    : `https://www.manoskarystinos.com/var/www/manos-movies/movies-backend${imageUrl}`;
};
