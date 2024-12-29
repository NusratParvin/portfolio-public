import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-player bg-black/10 opacity-70">
      <video autoPlay loop muted className="max-w-full h-auto">
        <source src="/assets/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
