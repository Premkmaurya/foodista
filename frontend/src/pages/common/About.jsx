import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/home/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="bg-white text-black/90 min-h-screen">
        <div className="container mx-auto px-6 py-12 lg:py-24">
          {/* About Us Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Us
            </h1>
            <div className="text-lg font-[author] text-black/70 mt-2 px-10">
              We are a new-age consumer-first organization offering an
              easy-to-use convenience platform, accessible through a unified
              app.
            </div>
          </div>

          {/* Introduction Section */}
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

          {/* Skills and Stats Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Our Services</h3>
              <p className="text-black/50 font-[author] text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="space-y-6">
                {/* Skill 1 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Food</span>
                    <span className="font-semibold ">85%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2.5">
                    <div
                      className="bg-black h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                {/* Skill 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Grociries</span>
                    <span className="font-semibold ">90%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2.5">
                    <div
                      className="bg-black h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                {/* Skill 3 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">restraunt</span>
                    <span className="font-semibold ">77%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2.5">
                    <div
                      className="bg-black h-2.5 rounded-full"
                      style={{ width: "77%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 text-center mt-8 lg:mt-0">
              <div>
                <div className="text-4xl md:text-5xl font-bold">
                  220k+
                </div>
                <p className="text-sm font-[author] text-black/50 mt-2">
                  restraunt partner
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold">
                  1,000+
                </div>
                <p className="text-sm font-[author] text-black/50 mt-2">delivery partner</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold">
                  300+
                </div>
                <p className="text-sm font-[author] text-black/50 mt-2">cities in india</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold">
                  64
                </div>
                <p className="text-sm font-[author] text-black/50 mt-2">order delivered</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl p-12 text-center bg-black/30">
            <div className="absolute z-5 top-0 left-0 w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover" src="/image/poster.png" alt="" />
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
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
