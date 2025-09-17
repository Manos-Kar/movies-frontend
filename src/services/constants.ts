const GET_ALL_FILM_POSTERS = "moviesapp/api/get_all_film_posters/";
const GET_FILM_DETAILS = "moviesapp/api/get_film_details/";

export type UrlOption = "GET_ALL_FILM_POSTERS" | "GET_FILM_DETAILS";

export const getUrl = (option: UrlOption, ids?: string[]) => {
  let resUrl = "";

  switch (option) {
    case "GET_ALL_FILM_POSTERS":
      resUrl += GET_ALL_FILM_POSTERS;
      break;

    case "GET_FILM_DETAILS":
      resUrl += GET_FILM_DETAILS + ids?.join("/");
      break;
  }

  return process.env.REACT_APP_API_BASIC_URL + resUrl;
};
