import React from "react";
import Subtitle from "./Subtitle";
import filmsJson from "../resources/contentJsons/films.json";
import FilmPoster from "./FilmPoster";
import { PosterSection } from "../models/types";

type Props = {
  section: keyof typeof filmsJson;
  films: PosterSection[];
};

function FilmSection(props: Props) {
  return (
    <div className="filmSectionComponent">
      <Subtitle subtitle={props.section.toUpperCase()} />
      <div className="filmPostersContainer">
        {props.films.map((film, index) => (
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
