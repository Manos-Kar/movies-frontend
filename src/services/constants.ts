const GET_ALL_FILM_POSTERS = "moviesapp/api/get_all_film_posters/";

export type UrlOption = "GET_ALL_FILM_POSTERS";

export const getUrl = (option: UrlOption, ids?: string[]) => {
  let resUrl = "";

  switch (option) {
    case "GET_ALL_FILM_POSTERS":
      resUrl += GET_ALL_FILM_POSTERS;
      break;
  }

  return process.env.REACT_APP_API_BASIC_URL + resUrl;
};
