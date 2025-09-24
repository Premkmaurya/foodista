import React from "react";

function Call() {
  return (
    <div className="relative rounded-t-2xl overflow-hidden shadow-2xl p-12 text-center bg-black/30">
      <div className="absolute z-5 top-0 left-0 w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/image/poster.png"
          alt=""
        />
      </div>
      <div className="relative z-10 space-y-4">
        <div className="text-sm text-white uppercase tracking-wider">
          order Now
        </div>
        <h3 className="text-white text-2xl md:text-3xl">
          We Are Always Ready To delivered A Perfect dish
        </h3>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#EF7722] hover:font-normal hover:text-white transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Call;
