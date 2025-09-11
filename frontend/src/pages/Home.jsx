import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { context } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { loggedIn } = useContext(context);
  const [videos, setVideos] = useState([]);
  const containerRefs = useRef([]);
  const [activeTab, setActiveTab] = useState("home");
  const [foodGetter, setFoodGetter] = useState(null);

  // Fetching videos
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {
        setVideos(response.data.foods);
        setFoodGetter(response.data.foodGetter);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loggedIn]);

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

  const likeHandler = async (foodId) => {
      const response = await axios.post("http://localhost:3000/api/food/like",{foodId},{
        withCredentials:true
      })
  }
  const saveHandler = async (foodId) => {
      const response = await axios.post("http://localhost:3000/api/food/save",{foodId},{
        withCredentials:true
      })
  }

  return (
    <>
      <div className="container h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
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
              <div className="w-[4rem] h-full absolute text-white right-0 bottom-[11rem] flex flex-col gap-5 justify-end items-center">
                <div className="hover:bg-white/30 flex-col transition-all rounded-full w-12 h-12 flex items-center justify-center">
                  <AiOutlineLike onClick={()=>likeHandler(video._id)} color={"white"} size={29} />
                  <p>{video.likeCount !=0 && video.likeCount}</p>
                </div>
                <div className="hover:bg-white/30 flex-col transition-all rounded-full w-12 h-12 flex items-center justify-center">
                  <IoBookmarkOutline onClick={()=>saveHandler(video._id)} color={"white"} size={29} />
                    <p>{video.saveCount !=0 && video.saveCount}</p>
                </div>
                <div className="hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center">
                  <FaRegComment color={"white"} size={25} />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 pb-[5.5rem] bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-white">
                {/* Profile and Details */}
                <div
                  onClick={() => navigate(`/seller/profile/${video.seller}`)}
                  className="flex items-start space-x-4 mb-2"
                >
                  <img
                    src={video.profileImg}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{video.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-200 mb-4">{video.description}</p>

                {/* Buy Now Button */}
                <button className="w-full px-6 py-3 bg-[#4285F4] text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#357ae8] hover:shadow-xl transform hover:-translate-y-0.5">
                  Buy now
                </button>
              </div>
              <nav className="fixed bottom-0 inset-x-0 bg-black/50 backdrop-blur-xl border-t border-gray-700 py-3 px-4 flex justify-around items-center">
                <button
                  onClick={() => setActiveTab("home")}
                  className={`flex-1 flex flex-col items-center text-sm font-semibold transition-colors ${
                    activeTab === "home" ? "text-white" : "text-gray-500"
                  }`}
                >
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  Home
                </button>
                <button
                  onClick={() => {
                    foodGetter.address == undefined ? navigate(`/user/profile/${foodGetter._id}`) : navigate(`/seller/profile/${foodGetter._id}`);
                    setActiveTab("profile");
                  }}
                  className={`flex-1 flex flex-col items-center text-sm font-semibold transition-colors ${
                    activeTab === "profile" ? "text-white" : "text-gray-500"
                  }`}
                >
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  Profile
                </button>
              </nav>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
