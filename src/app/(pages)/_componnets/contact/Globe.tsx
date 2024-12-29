import React from "react";

const Globe = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/assets/contact/2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Globe;
