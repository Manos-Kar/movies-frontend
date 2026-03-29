export const isDevEnv = () => import.meta.env.VITE_ENV === "dev";

export const getImageLink = (imageUrl: string) => {
  console.log(imageUrl);

  return isDevEnv()
    ? `http://localhost:8000${imageUrl}`
    : `https://www.manoskarystinos.com${imageUrl}`;
};
