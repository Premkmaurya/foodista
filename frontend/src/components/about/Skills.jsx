import React from "react";

function Skills() {
  return (
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
                className="bg-[#EF7722] h-2.5 rounded-full"
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
                className="bg-[#EF7722] h-2.5 rounded-full"
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
                className="bg-[#EF7722] h-2.5 rounded-full"
                style={{ width: "77%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-8 text-center mt-8 lg:mt-0">
        <div>
          <div className="text-4xl md:text-5xl font-bold">220k+</div>
          <p className="text-sm font-[author] text-black/50 mt-2">
            restraunt partner
          </p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">1,000+</div>
          <p className="text-sm font-[author] text-black/50 mt-2">
            delivery partner
          </p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">300+</div>
          <p className="text-sm font-[author] text-black/50 mt-2">
            cities in india
          </p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">64</div>
          <p className="text-sm font-[author] text-black/50 mt-2">
            order delivered
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
