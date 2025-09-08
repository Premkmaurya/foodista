import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  const [videos, setVideos] = useState([]);
  const [seller, setSeller] = useState('')
  const containerRefs = useRef([]); // Store refs to each video container

  // Fetching videos
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {

        setVideos(response.data.foods);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Intersection Observer logic
  useEffect(() => {
    if (!containerRefs.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoEl = entry.target.querySelector("video");

          if (videoEl) {
            if (entry.isIntersecting && entry.intersectionRatio === 1) {
              // Reset to beginning and play
              videoEl.currentTime = 0;
              videoEl.play().catch((err) => {
                console.warn("Autoplay failed:", err);
              });
            } else {
              videoEl.pause();
            }
          }
        });
      },
      {
        threshold: 1.0,
      }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [videos]);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {videos.map((video, idx) => (
        <div
          key={idx}
          ref={(el) => (containerRefs.current[idx] = el)}
          className="relative h-screen w-full snap-start flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col mb-1 items-center justify-end w-full h-full rounded-none overflow-hidden shadow-lg shadow-white bg-black md:max-w-[370px] md:rounded-2xl">
            <video
              src={video.video}
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className="w-[4rem] h-full absolute right-0 bottom-[6.3rem] flex flex-col gap-5 justify-end items-center">
              <div className="hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center">
                <AiOutlineLike color={"white"} size={29} />
              </div>
              <div className="hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center">
                <IoBookmarkOutline color={"white"} size={29} />
              </div>
              <div className="hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center">
                <FaRegComment color={"white"} size={25} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-start px-4 pb-2">
              <div className="text-white rounded-lg px-3 py-2 mb-3 w-full text-base leading-tight line-clamp-2">
                {video.description}
              </div>
              <button onClick={()=>navigate(`/seller/profile/${video.seller}`)} 
                className="cursor-pointer px-8 py-3 text-base rounded-full bg-orange-600 text-white font-bold shadow-md">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
