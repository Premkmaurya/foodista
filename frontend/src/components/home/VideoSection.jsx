import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import SkeltonLoader from "./SkeltonLoader";

function VideoSection() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", {
        withCredentials: true,
      })
      .then((response) => {
        setVideos(response.data.foods);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="w-full h-full flex">
      <div className="w-full h-[80vh] flex flex-col p-[3rem]">
        <div>
          <h2 className="text-2xl text-black">Explore</h2>
        </div>
        <div className="w-full h-full py-5 flex">
          {videos.length > 0 ? (
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {videos.map((video) => {
                return (
                  <div
                    key={video._id}
                    className="w-[10vw] h-full mr-5 flex-shrink-0"
                  >
                    <SwiperSlide className="w-full cursor-pointer h-full rounded-lg overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        src={video.video}
                        muted
                        playsInline
                      ></video>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          ) : (
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><SkeltonLoader /></SwiperSlide>
              <SwiperSlide><SkeltonLoader /></SwiperSlide>
              <SwiperSlide><SkeltonLoader /></SwiperSlide>
              <SwiperSlide><SkeltonLoader /></SwiperSlide>
              <SwiperSlide><SkeltonLoader /></SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
