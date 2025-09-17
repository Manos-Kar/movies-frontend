import { getUrl } from "./constants";
import { get } from "./requestTemplates";

//GET @api_get_all_film_posters
export const get_all_film_posters = async () => {
  try {
    return await get(getUrl("GET_ALL_FILM_POSTERS"), {});
  } catch (error) {
    return error;
  }
};

//GET @api_get_film_details
export const get_film_details = async (film_slug: string) => {
  try {
    return await get(getUrl("GET_FILM_DETAILS", [film_slug]), {});
  } catch (error) {
    return error;
  }
};
