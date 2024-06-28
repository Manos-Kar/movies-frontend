import React from "react";
// import underConstruction from "../resources/images/under-construction-gif-11.gif";
import ReactPlayer from "react-player/vimeo";

function BackgroundVideo() {
  return (
    <div className="imagePlaceholder">
      <ReactPlayer
        // class="backgroundImage"
        url="https://vimeo.com/389223841#t=10s" // Replace with your Vimeo video URL
        playing={true}
        width="calc(100% - 40px)"
        height="100%"
        loop
        volume={0}
        style={{
          borderRadius: "300px",
          margin: "-50px 20px 0 20px",
        }}
        onReady={(player) => player.seekTo(20)}
      />
    </div>
  );
}

export default BackgroundVideo;
