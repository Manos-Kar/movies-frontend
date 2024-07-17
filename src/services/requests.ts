import { getUrl } from "./constants";
import { get } from "./requestTemlates";

//GET @api_get_all_film_posters
export const get_all_film_posters = async () => {
  try {
    return await get(getUrl("GET_ALL_FILM_POSTERS"), {});
  } catch (error) {
    return error;
  }
};
