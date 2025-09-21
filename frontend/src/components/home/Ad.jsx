import React from "react";

function Ad() {
  return (
    <div className="w-full h-[15rem] md:h-[30rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem] overflow-hidden">
      <video className="w-full h-full object-cover" src="/public/video/video.mp4" autoPlay playsInline loop muted></video>
    </div>
  );
}

export default Ad;
