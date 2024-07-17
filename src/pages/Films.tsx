import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import FilmSection from "../components/FilmSection";
import { get_all_film_posters } from "../services/requests";
import { FilmPosterType } from "../models/types";

function Films() {
  const [filmPosters, setFilmPosters] = useState<FilmPosterType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get_all_film_posters().then((res: any) => {
      if (!("errorCode" in res)) {
        let tempFilmPosters = res.data as FilmPosterType;
        setFilmPosters(tempFilmPosters);
        setIsLoading(false);
      } else {
        console.log(res);
      }
    });
  }, []);

  return (
    <div className="pageComponent">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="filmSectionsContainer">
          <FilmSection section="features" films={filmPosters!.features} />
          <FilmSection section="shorts" films={filmPosters!.shorts} />
          <FilmSection section="clips" films={filmPosters!.clips} />
        </div>
      )}

      <PageTitle title="FILMS" />
    </div>
  );
}

export default Films;
