import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredSections = [
    {
      title: "GROCERY DELIVERY",
      subtitle: "FROM SUPERMARKETS",
      discount: "UPTO 70% OFF",
      image: "https://placehold.co/300x200/52a868/ffffff?text=Groceries",
    },
    {
      title: "INSTAMART",
      subtitle: "INSTANT GROCERY",
      discount: "UPTO 60% OFF",
      image: "https://placehold.co/300x200/9e42bd/ffffff?text=Instamart",
    },
    {
      title: "RESTAURANT OUTING",
      subtitle: "EAT OUT & SAVE MORE",
      discount: "UPTO 50% OFF",
      image: "https://placehold.co/300x200/e84118/ffffff?text=Dineout",
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#EF7722] flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold">Foodista</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <Link to="/seller/register" className="font-light cursor-pointer hover:underline">
            Partner with us
          </Link>
          <button onClick={()=>{navigate('/user/login')}} className="bg-white cursor-pointer text-black py-2 px-6 rounded-full transition-transform transform hover:scale-105">
            Log In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="w-full h-full text-[#b32911] flex-grow flex flex-col items-center justify-center p-6 lg:p-12 text-center relative overflow-hidden">
        {/* Background images for contrast */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 -left-15 w-[40vw] h-full">
            <img
              className="w-full h-full object-cover"
              src="/image/food-1.png"
              alt=""
            />
          </div>
          <div className="absolute top-0 right-0 w-[40vw] h-full">
            <img
              className="w-full h-full object-cover"
              src="/image/food-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-12 mb-6">
            Order food & groceries. Discover best restaurants.
          </h1>
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

      {/* Featured Sections */}
      <section className="w-full max-w-6xl p-6 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {featuredSections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-start space-y-4 shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-xl font-bold uppercase tracking-wide">
              {section.title}
            </h2>
            <p className="text-gray-400 text-sm">{section.subtitle}</p>
            <p className="text-yellow-400 font-bold">{section.discount}</p>
            <img
              src={section.image}
              alt={section.title}
              className="w-full rounded-xl object-cover h-40"
            />
            <button className="flex items-center space-x-2 text-indigo-400 font-bold mt-4">
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
    </div>
  );
};

export default Home;
