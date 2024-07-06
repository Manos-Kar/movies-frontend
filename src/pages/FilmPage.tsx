import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import filmsJson from "../resources/contentJsons/films.json";

import { useParams } from "react-router-dom";
import { Film } from "../models/film";
import ReactPlayer from "react-player";

function FilmPage() {
  const [film, setFilm] = useState<Film | undefined>();
  const params = useParams();

  useEffect(() => {
    let filmSection = params.filmSection;
    if (filmSection !== undefined) {
      for (let filmObject of filmsJson[filmSection as keyof typeof filmsJson]) {
        if (params.filmName === filmObject.slug) {
          setFilm(filmObject);
        }
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pageComponent">
      {film !== undefined && (
        <>
          <div className="filmInfo">
            <div className="filmVideoContainer">
              <ReactPlayer
                // class="backgroundImage"
                url={film.film_link} // Replace with your Vimeo video URL
                width="900px"
                height={500}
                controls
              />
            </div>
          </div>
          <PageTitle title={film.title.toUpperCase()} />
        </>
      )}
    </div>
  );
}

export default FilmPage;
