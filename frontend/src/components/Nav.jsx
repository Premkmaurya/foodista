import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav({foodGetter}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-black/50 backdrop-blur-xl border-t border-gray-700 py-3 px-4 flex justify-around items-center">
      <button
        onClick={() => {
          navigate("/");
          setActiveTab("home")}}
        className={`flex-1 flex flex-col items-center text-sm font-semibold transition-colors ${
          activeTab === "home" ? "text-white" : "text-gray-500"
        }`}
      >
        <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        Home
      </button>
      <button
        onClick={() => {
          foodGetter.address == undefined
            ? navigate(`/user/profile/${foodGetter._id}`)
            : navigate(`/seller/profile/${foodGetter._id}`);
          setActiveTab("profile");
        }}
        className={`flex-1 flex flex-col items-center text-sm font-semibold transition-colors ${
          activeTab === "profile" ? "text-white" : "text-gray-500"
        }`}
      >
        <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        Profile
      </button>
    </nav>
  );
}

export default Nav;
