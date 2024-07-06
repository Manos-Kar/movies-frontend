import React, { useState } from "react";
import Subtitle from "./Subtitle";
import filmsJson from "../resources/contentJsons/films.json";
import FilmPoster from "./FilmPoster";

type Props = {
  section: keyof typeof filmsJson;
};

function FilmSection(props: Props) {
  const films = useState(filmsJson[props.section])[0];

  return (
    <div className="filmSectionComponent">
      <Subtitle subtitle={props.section.toUpperCase()} />
      <div className="filmPostersContainer">
        {films.map((film, index) => (
          <FilmPoster
            filmSection={props.section}
            film={film}
            key={`filmPoster-${props.section}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FilmSection;
