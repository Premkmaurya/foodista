import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavbarContext } from "../../context/nav/NavContext";

function Header() {
  const navigate = useNavigate();
  const { setOpen } = useContext(NavbarContext);
  return (
    <header className="w-full bg-[#EF7722] flex justify-between items-center p-6 lg:px-12">
      <div className="flex items-center space-x-2">
        <span className="text-3xl font-bold">Foodista</span>
      </div>
      <div className="sm:hidden mr-6">
        <HiMiniBars3BottomRight
          onClick={() => setOpen(true)}
          size={32}
          color="white"
        />
      </div>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
        <Link
          to="/seller/register"
          className="font-light cursor-pointer hover:underline"
        >
          Partner with us
        </Link>
        <button
          onClick={() => {
            navigate("/user/login");
          }}
          className="bg-white cursor-pointer text-black py-2 px-6 rounded-full transition-transform transform hover:scale-105"
        >
          Log In
        </button>
      </nav>
    </header>
  );
}

export default Header;
