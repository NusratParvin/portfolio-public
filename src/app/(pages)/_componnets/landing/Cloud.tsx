const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center bg-black/10 opacity-70 w-full h-full">
      <video autoPlay loop muted controls className="h-80 max-w-full">
        <source src="/assets/about/about-full.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
