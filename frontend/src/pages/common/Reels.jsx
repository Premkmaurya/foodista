import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { context } from "../../context/auth/AuthContext";
import Nav from "../../components/navbar/Nav";
import { FaRegUser } from "react-icons/fa";

function Reels() {
  const navigate = useNavigate();
  const { loggedIn } = useContext(context);
  const [videos, setVideos] = useState([]);
  const containerRefs = useRef([]);
  const [foodGetter, setFoodGetter] = useState(null);

  // Fetching videos
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", {
        withCredentials: true,
      })
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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
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
        threshold: [0.75,0.8,0.9,1],
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
    const response = await axios.post(
      "http://localhost:3000/api/food/like",
      { foodId },
      {
        withCredentials: true,
      }
    );
  };
  const saveHandler = async (foodId) => {
    const response = await axios.post(
      "http://localhost:3000/api/food/save",
      { foodId },
      {
        withCredentials: true,
      }
    );
  };
  const cartHandler = async (foodId) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/food/cart",
        { foodId },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  return (
    <>
      <div className="container h-[100vh] overflow-y-scroll snap-y snap-mandatory bg-black">
        {videos.map((video, idx) => (
          <div
            key={idx}
            ref={(el) => (containerRefs.current[idx] = el)}
            className="relative h-[100vh] w-full snap-start flex items-center justify-center bg-black"
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
              <div className="w-[4rem] h-full absolute z-10 text-white right-0 bottom-[13rem] flex flex-col gap-5 justify-end items-center">
                <div className="hover:bg-white/30 flex-col transition-all rounded-full w-12 h-12 flex items-center justify-center">
                  <AiOutlineLike
                    onClick={() => likeHandler(video._id)}
                    color={"white"}
                    size={29}
                  />
                  <p>{video.likeCount != 0 && video.likeCount}</p>
                </div>
                <div className="hover:bg-white/30 flex-col transition-all rounded-full w-12 h-12 flex items-center justify-center">
                  <IoBookmarkOutline
                    onClick={() => saveHandler(video._id)}
                    color={"white"}
                    size={29}
                  />
                  <p>{video.saveCount != 0 && video.saveCount}</p>
                </div>
                <div
                  onClick={() => cartHandler(video._id)}
                  className="hover:bg-white/30 flex-col transition-all rounded-full w-12 h-12 flex items-center justify-center"
                >
                  <IoCartOutline color={"white"} size={28} />
                  <p>{video.cartCount != 0 && video.cartCount}</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 pb-[8rem] sm:pb-[5.5rem] bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-white">
                {/* Profile and Details */}
                <div
                  onClick={() => navigate(`/seller/profile/${video.seller}`)}
                  className="flex w-fit items-start space-x-4 mb-2"
                >
                  {video.profileImg ? (
                    <img
                      src={video.profileImg}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  ) : (
                    <FaRegUser className="w-12 h-12 rounded-full p-1 bg-white text-gray-500" />
                  )}

                  <div>
                    <h3 className="font-bold text-lg">{video.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-200 mb-4">{video.description}</p>

                {/* Buy Now Button */}
                <button onClick={()=>navigate('/order')} className="w-full px-6 py-3 capatalize border-1 backdrop-blue-lg border-white bg-black/40 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5">
                  Order Now
                </button>
              </div>
            </div>
            <Nav id={video._id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Reels;
