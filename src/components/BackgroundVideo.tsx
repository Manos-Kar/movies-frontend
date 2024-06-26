import React from "react";
// import underConstruction from "../resources/images/under-construction-gif-11.gif";
import ReactPlayer from "react-player/vimeo";

function BackgroundVideo() {
  return (
    <div className="imagePlaceholder">
      <ReactPlayer
        // class="backgroundImage"
        url="https://player.vimeo.com/video/264692804?h=fe55d38887" // Replace with your Vimeo video URL
        playing={true}
        width="120%"
        height="100%"
        loop
        volume={0}
        style={{
          borderRadius: "30px",
          margin: "-10px",
          width: "calc(100% - 60px)",
          height: "calc(100% - 100px)",
        }}
        onReady={(player) => player.seekTo(20)}
      />
    </div>
  );
}

export default BackgroundVideo;
