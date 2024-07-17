export type FilmPosterType = {
  features: PosterSection[];
  shorts: PosterSection[];
  clips: PosterSection[];
};

export type PosterSection = {
  [key: string]: string;
};
