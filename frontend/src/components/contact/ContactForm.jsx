import React from "react";

function ContactForm() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-[Beach] ">Your Details</h3>
        <p className="text-sm text-gray-400">
          Let us know how to get back to you.
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold uppercase text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" border border-[#EF7722] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EF7722]"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold uppercase text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" border border-[#EF7722] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EF7722]"
              placeholder="email@email.com"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-semibold uppercase text-gray-400"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className=" border border-[#EF7722] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EF7722]"
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="comments"
            className="text-sm font-semibold uppercase text-gray-400"
          >
            Comments / Questions
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="5"
            className=" border border-[#EF7722] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EF7722]"
            placeholder="Question"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#EF7722] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#ff6308] hover:scale-90 transition-all duration-300"
        >
          CONTACT US
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
