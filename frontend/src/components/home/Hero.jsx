import React, { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Hero() {
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".first", {
      opacity: 0,
      rotate: -30,
      duration: 2,
      delay: 0.8,
      ease: "power3.out",
    });
    gsap.from(".second", {
      opacity: 0,
      rotate: -30,
      duration: 2,
      delay: 0.8,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    gsap.to(".first", {
      rotate: -40,
      transform:"translate(-10rem)",
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "first",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to(".second", {
      rotate: 40,
      transform:"translate(10rem)",
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "second",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });
  });

  return (
    <main className="w-full h-full text-[#b32911] flex-grow flex flex-col items-center justify-center p-3 lg:p-12 text-center relative overflow-hidden">
      {/* Background images for contrast */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute bottom-20 sm:top-0 -left-15 w-[40vw] sm:w-[30vw] h-[30vh] sm:h-full">
          <img
            className="first image w-full h-full object-cover"
            src="/image/food-1.png"
            alt=""
          />
        </div>
        <div className="absolute bottom-20 sm:top-0 right-0 sm:-right-2 w-[35vw] sm:w-[30vw] h-[30vh] sm:h-full">
          <img
            className="second image w-full h-full object-cover"
            src="/image/food-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-12 mb-6">
          <h1>Order food & groceries. Discover best restaurants near you.</h1>
        </div>
        <p className="text-lg lg:text-xl font-medium mb-12">
          Delicious meals delivered to your doorstep.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#EF7722] focus:outline-none focus:ring-2 focus:ring-[#EF7722] transition-all"
              placeholder="Enter your delivery location"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#EF7722] focus:outline-none focus:ring-2 focus:ring-[#EF7722] transition-all"
              placeholder="Search for restaurant, item or more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
