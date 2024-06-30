import React from "react";
import PageTitle from "../components/PageTitle";
import FilmSection from "../components/FilmSection";

function Films() {
  return (
    <div className="pageComponent">
      <div className="filmSectionsContainer">
        <FilmSection section="features" />
        <FilmSection section="shorts" />
        <FilmSection section="clips" />
      </div>
      <PageTitle title="FILMS" />
    </div>
  );
}

export default Films;
