import React from "react";



const featuredSections = [
  {
    title: "GROCERY DELIVERY",
    subtitle: "FROM SUPERMARKETS",
    discount: "UPTO 70% OFF",
    image: "/image/groceries.png",
  },
  {
    title: "RESTAURANT OUTING",
    subtitle: "EAT OUT & SAVE MORE",
    discount: "UPTO 50% OFF",
    image: "/image/restaurant.png",
  },
  {
    title: "RESTAURANT OUTING",
    subtitle: "EAT OUT & SAVE MORE",
    discount: "UPTO 50% OFF",
    image: "/image/restaurant.png",
  },
];


function Feautre() {
  return (
    <section className="w-full max-w-6xl p-6 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
      {featuredSections.map((section, index) => (
        <div
          key={index}
          className="bg-[#f5f5f5] border-1 border-grey-300 shadow-xl shadow-black/40 rounded-2xl p-6 flex flex-col items-start space-y-4 transition-transform transform hover:scale-105 duration-300"
        >
          <h2 className="text-xl text-[#4e342e] font-bold uppercase tracking-wide">
            {section.title}
          </h2>
          <p className="text-[#6d6d6d] text-sm">{section.subtitle}</p>
          <p className="text-[#d32f2f] font-bold">{section.discount}</p>
          <img
            src={section.image}
            alt={section.title}
            className="w-full rounded-xl object-cover h-40"
          />
          <button className="flex items-center space-x-2 text-[#e65100] font-bold mt-4">
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      ))}
    </section>
  );
}

export default Feautre;
