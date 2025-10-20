import React from "react";
import hello from "../../assets/Team Video.mp4";

function Video() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={hello} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
