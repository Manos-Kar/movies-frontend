import React, { useEffect, useState } from "react";
// import underConstruction from "../resources/images/under-construction-gif-11.gif";
import ReactPlayer from "react-player/vimeo";
import filmsJson from "../resources/contentJsons/films.json";

function BackgroundVideo() {
  const [filmLink, setFilmLink] = useState("");
  useEffect(() => {
    let filmLinkArray = [];

    for (let film of filmsJson["shorts"]) {
      filmLinkArray.push(film.film_link);
    }

    const randomIndex = Math.floor(Math.random() * filmLinkArray.length);
    setFilmLink(filmLinkArray[randomIndex]);
  }, []);

  return (
    <div className="imagePlaceholder">
      <ReactPlayer
        url={filmLink}
        playing={true}
        width="calc(100% - 40px)"
        height="100%"
        loop
        volume={0}
        style={{
          borderRadius: "300px",
          margin: "-50px 20px 0 20px",
        }}
        onReady={(player) => player.seekTo(60)}
      />
    </div>
  );
}

export default BackgroundVideo;
