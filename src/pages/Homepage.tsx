import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";

function Homepage() {
  return (
    <div className="homepage">
      <BackgroundVideo />
      <div className="nameComponent">
        <div className="nameRowDiv">
          <p className="nameRow 1">MANOS</p>
          <div className="namesubtextcontainer 1">
            <p className="namesubtext">
              This site showcases my filmography from 2013 to 2019, highlighting
              a range of cinematic works. Explore a collection that captures
              artistic evolution and storytelling craft.
            </p>
          </div>
        </div>
      </div>
      <div className="nameRowDiv2">
        <p className="nameRow 2">KARYSTINOS</p>
      </div>
      <div className="nameRowDiv3">
        <p className="nameRow nameRow3">FILMS</p>
      </div>
      <div className="emptyDiv"></div>
    </div>
  );
}

export default Homepage;
