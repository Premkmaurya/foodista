import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import axios from "axios"



function Home() {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/api/food",{withCredentials:true})
    .then(response=>{
      setVideos(response.data.foods)
    }).catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {videos.map((video, idx) => (
        <div
          key={idx}
          className="relative h-screen w-full snap-start flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col mb-1 items-center justify-end w-full h-full rounded-none overflow-hidden shadow-lg shadow-white bg-black
            md:max-w-[370px] md:rounded-2xl">
            <video
              src={video.video}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className='w-[4rem] h-full absolute right-0 bottom-[5rem] flex flex-col gap-5 justify-end items-center'>
                <div className='hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center'>
                  <AiOutlineLike color={"white"} size={29} />
                </div>
                <div className='hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center'>
                  <IoBookmarkOutline color={"white"} size={29} />
                </div>
                <div className='hover:bg-white/30 transition-all rounded-full w-12 h-12 flex items-center justify-center'>
                  <FaRegComment color={"white"} size={25} />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-center px-4 pb-2">
              <div className="text-white rounded-lg px-3 py-2 mb-3 w-full text-base leading-tight line-clamp-2">
                {video.description}
              </div>
              <button className="px-8 py-3 text-base rounded-full bg-orange-600 text-white font-bold shadow-md">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      ))} 
    </div>
  )
}
export default Home