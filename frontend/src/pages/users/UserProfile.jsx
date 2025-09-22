import React, { useRef, useEffect, useState, useContext } from "react";
import "../../index.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import FullScreenNav from "../../components/navbar/FullScreenNav";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavbarContext } from "../../context/nav/NavContext";
import Nav from "../../components/navbar/Nav"

function UserProfile() {
  const { id } = useParams();
  const profileRef = useRef(null);
  const { setOpen } = useContext(NavbarContext);
  const [user, setUser] = useState({});
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    axios
      .get(`https://backend-9yno.onrender.com/api/user/${id}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      });
    // Animate the main card on mount
    if (profileRef.current) {
      profileRef.current.classList.remove("opacity-0", "translate-y-10");
      profileRef.current.classList.add("opacity-100", "translate-y-0");
    }
  }, []);

  return (
    <div className="relative">
      <div className="relative flex items-center justify-center min-h-screen bg-white text-white font-sans overflow-hidden">
        {/* Background blobs for a dynamic, modern feel */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#32235E]  mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#1D3A5D] mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-[#1A5B4D] mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

        {/* Main Profile Card */}
        <div
          ref={profileRef}
          className="w-full h-screen max-w-4xl bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm border border-white border-opacity-10 p-2 shadow-xl relative z-10 opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
        >
          <div className="absolute top-3 right-4">
            <HiMiniBars3BottomRight
              onClick={() => setOpen(true)}
              size={22}
              color="black"
            />
          </div>
          <div className="flex flex-col items-center">
            {/* Profile image with glow animation */}
            <div className="relative mb-6">
              {user.profileImg ? (
                <img
                  src={user.profileImg}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-2 border-white border-opacity-20 shadow-lg object-cover animate-pulse-glow"
                />
              ) : (
                <FaRegUser size={38} />
              )}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping-slow"></div>
            </div>
            <h1 className="text-3xl text-black font-bold tracking-tight mb-2 opacity-0 animate-fade-in animation-delay-500">
              {user.name}
            </h1>

            {/* Stats section with hover animations */}
            <div className="grid grid-cols-2 gap-3 w-full text-center mb-8 opacity-0 animate-fade-in animation-delay-1000">
              <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-4 transition-all duration-300 border-1 border-black/30 transform hover:scale-105 hover:bg-opacity-10">
                <span className="block text-2xl font-bold text-[#1A5B6F]">
                  4.5K
                </span>
                <span className="block text-xs uppercase text-gray-400">
                  Videos
                </span>
              </div>
              <div className="bg-white bg-opacity-5 rounded-xl shadow-xl border-1 border-black/30 p-4 transition-all duration-300 transform hover:scale-105 hover:bg-opacity-10">
                <span className="block text-2xl font-bold text-[#1D3A5D]">
                  9.8K
                </span>
                <span className="block text-xs uppercase text-gray-400">
                  Orders
                </span>
              </div>
            </div>
          </div>

          {/* Video grid section */}
          <div className="flex w-full mt-[2rem] opacity-0 animate-fade-in animation-delay-1200 border-b-2 border-black/30">
            <div className="w-[50%] pb-3 hover:scale-110 cursor-pointer transition-all duration-300 transform flex items-center justify-center border-r-2 border-black/30">
              <AiOutlineLike color="black" size={30} />
            </div>
            <div className="w-[50%] pb-3 hover:scale-110 cursor-pointer transition-all duration-300 transform flex items-center justify-center">
              <IoBookmarkOutline color="black" size={30} />
            </div>
          </div>
          <div className="h-[600px] overflow-y-auto">
            <div className="grid grid-cols-3 gap-2">
              {videos.map((video) => (
                <div
                  key={video._id}
                  className="relative shadow-md transition-all duration-300 transform group"
                >
                  <video
                    muted
                    src={video.video}
                    alt={video.name}
                    className="w-full h-48 object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-lg font-bold mb-1 text-white">
                      {video.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                    <div className="absolute bottom-4 right-4 text-white text-xs px-2 py-1 bg-black/30 bg-opacity-50 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block mr-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Play
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <Nav />
      <div className="absolute top-0 left-0 z-50">
        <FullScreenNav size={32} />
      </div>
    </div>
  );
}

export default UserProfile;
