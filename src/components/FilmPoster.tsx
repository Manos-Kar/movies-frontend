import React, { useState } from "react";
import filmsJson from "../resources/contentJsons/films.json";
import { useNavigate } from "react-router-dom";
import { PosterSection } from "../models/types";
import { getImageLink } from "../services/commonFunctions";

type Props = {
  filmSection: keyof typeof filmsJson;
  film: PosterSection;
};

function FilmPoster(props: Props) {
  const [extraClass, setExtraClass] = useState<string>("zoomOut");
  const navigate = useNavigate();
  console.log(props.film);

  return (
    <div className={`filmPosterContainer ${extraClass}`}>
      <img
        src={getImageLink(props.film[Object.keys(props.film)[0]])}
        alt="filmPoster"
        className={`filmPoster ${extraClass}`}
        onMouseEnter={() => setExtraClass("zoomIn")}
        onMouseLeave={() => setExtraClass("zoomOut")}
        onClick={() =>
          navigate(`/films/${props.filmSection}/${Object.keys(props.film)[0]}`)
        }
      />
    </div>
  );
}

export default FilmPoster;
