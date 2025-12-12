import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";

import { useParams } from "react-router-dom";
import { Film } from "../models/film";
import ReactPlayer from "react-player";
import { get_film_details } from "../services/requests";

function FilmPage() {
  const [film, setFilm] = useState<Film | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    let filmName = params.filmName;
    if (filmName !== undefined) {
      get_film_details(filmName).then((filmDetails: any) => {
        console.log(filmDetails);

        if (filmDetails) {
          let tempFilmDetails = filmDetails["data"] as Film;
          tempFilmDetails.awards = filmDetails["data"].awards.split("\n");
          console.log(tempFilmDetails);

          setFilm(tempFilmDetails);
        }
      });
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
            <div className="filmDetailsContainer">
              <div className="filmeDetailSection">
                <p className="filmDetailTitle">Summary</p>
                <p className="filmDetailText">{film.summary}</p>
              </div>
              <div className="filmeDetailSection">
                <p className="filmDetailTitle">Credits</p>
                <p className="filmDetailText">{film.credits}</p>
              </div>
              {film.awards.length > 0 && (
                <div className="filmeDetailSection">
                  <p className="filmDetailTitle">Awards</p>
                  {film.awards.map((award, index) => (
                    <p className="filmAward" key={`filmAward-${index}`}>
                      {award}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <PageTitle title={film.name.toUpperCase()} />
        </>
      )}
    </div>
  );
}

export default FilmPage;
