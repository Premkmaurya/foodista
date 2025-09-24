import React from 'react'

function Introduction() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video className="w-full h-full object-cover" src="/video/video.mp4" playsInline autoPlay muted loop></video>
            </div>
            <div className="space-y-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-[#EF7722]">
                Get to know us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                We Always Make The Best
              </h2>
              <p className="text-black/50 font-[author] text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas id felis sed lorem auctor finibus. Maecenas eget
                porttitor nisi, eget sagittis erat varius non. Duis ut varius
                augue. Donec tincidunt laculis ligula, et maximus elit tincidunt
                eu.
              </p>
              <button className="bg-white text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
  )
}

export default Introduction
