import React, { useState } from "react";
import { Film } from "../models/film";
import { useNavigate } from "react-router-dom";

type Props = {
  film: Film;
};

function FilmPoster(props: Props) {
  const [extraClass, setExtraClass] = useState<string>("zoomOut");
  const navigate = useNavigate();
  function createPathForUrl(title: string) {
    return title.toLowerCase().replace(".", "").replace(" ", "-");
  }

  return (
    <div className={`filmPosterContainer ${extraClass}`}>
      <img
        src={props.film.poster_url}
        alt="filmPoster"
        className={`filmPoster ${extraClass}`}
        onMouseEnter={() => setExtraClass("zoomIn")}
        onMouseLeave={() => setExtraClass("zoomOut")}
        onClick={() => navigate(`/films/${createPathForUrl(props.film.title)}`)}
      />
    </div>
  );
}

export default FilmPoster;
