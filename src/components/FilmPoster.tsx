import React, { useState } from "react";
import { Film } from "../models/film";
import filmsJson from "../resources/contentJsons/films.json";
import { useNavigate } from "react-router-dom";

type Props = {
  filmSection: keyof typeof filmsJson;
  film: Film;
};

function FilmPoster(props: Props) {
  const [extraClass, setExtraClass] = useState<string>("zoomOut");
  const navigate = useNavigate();

  return (
    <div className={`filmPosterContainer ${extraClass}`}>
      <img
        src={props.film.poster_url}
        alt="filmPoster"
        className={`filmPoster ${extraClass}`}
        onMouseEnter={() => setExtraClass("zoomIn")}
        onMouseLeave={() => setExtraClass("zoomOut")}
        onClick={() =>
          navigate(`/films/${props.filmSection}/${props.film.slug}`)
        }
      />
    </div>
  );
}

export default FilmPoster;
