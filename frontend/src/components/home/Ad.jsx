import React, { useRef } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Ad() {
  const videoRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.to(videoRef.current,{
      scrollTrigger:{
        trigger:videoRef.current,
        start:"top bottom",
        onEnter:()=> videoRef.current.play(),
        onLeaveBack:()=> videoRef.current.pause(),
      }
    })
  })
  return (
    <div className="w-full h-[15rem] md:h-[30rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem] overflow-hidden">
      <video ref={videoRef} className="w-full h-full object-cover" src="/video/video.mp4" playsInline loop muted></video>
    </div>
  );
}

export default Ad;
