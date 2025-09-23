import React, { useRef, useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../../context/nav/NavContext";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function FullScreenNav() {
  const crossIconRef = useRef(null);
  const stairDivRef = useRef(null);
  const fullNavRef = useRef(null);
  const { open, setOpen } = useContext(NavbarContext);

  const tl2 = useRef();

  useGSAP(() => {
    // timeline paused by default
    tl2.current = gsap.timeline({ paused: true });

    tl2.current
      .to(stairDivRef.current, {
        delay: -0.7,
        display: "block",
      })
      .from(".stair_2", {
        height: 0,
        stagger: {
          amount: -0.2,
        },
      })
      .to(fullNavRef.current, {
        display: "block",
      })
      .from(".link", {
        delay: -0.3,
        rotateX: 90,
        duration: 0.3,
        ease: "power2.out",
        stagger: {
          amount: 0.1,
        },
      })
      .to(stairDivRef.current, {
        display: "none",
      })
      .to(".stair_2", {
        y: "0%",
      });
  }, []);

  useEffect(() => {
    if (open) {
      tl2.current.play();
    } else {
      tl2.current.reverse();
    }
  }, [open]);

  return (
    <>
      <div
        ref={stairDivRef}
        className="hidden h-screen w-screen fixed z-10 top-0"
      >
        <div className="h-full w-full flex">
          <div className="stair_2 h-full w-1/5 bg-[#EF7722]"></div>
          <div className="stair_2 h-full w-1/5 bg-[#EF7722]"></div>
          <div className="stair_2 h-full w-1/5 bg-[#EF7722]"></div>
          <div className="stair_2 h-full w-1/5 bg-[#EF7722]"></div>
          <div className="stair_2 h-full w-1/5 bg-[#EF7722]"></div>
        </div>
      </div>
      <div
        ref={fullNavRef}
        className="hidden h-[100vh] w-screen absolute top-0 left-0 z-50 text-white bg-[#EF7722]"
      >
        <div className="link flex w-full justify-between h-[4rem] px-4 py-6 items-center">
          <div className="w-[7rem] h-full">
            <Link to="/" className="text-4xl font-bold">foodista</Link>
          </div>
          <RxCross1
            onClick={() => {
              tl2.current.reverse().delay(-1);
              setOpen(false);
            }}
            ref={crossIconRef}
            className="w-20 cursor-pointer"
            size={30}
            color={"white"}
          />
        </div>
        <div className="relative w-full h-[92%]">
          <div>
            <button className="bg-white absolute top-5 right-6 cursor-pointer text-black py-2 px-6 rounded-full transition-transform transform hover:scale-105">
              log in
            </button>
          </div>
          <div className="link py-[14rem] flex flex-col justify-center">
            <div className="border-t-1 flex justify-center pt-2 items-center border-white">
              <Link to="/" className="text-3xl">home</Link>
            </div>
            <div className="border-t-1 flex justify-center pt-2 items-center border-white">
              <Link to="/reels" className="text-3xl">reels</Link>
            </div>
            <div className="border-t-1 flex justify-center pt-2 items-center border-white">
              <Link to="/cart" className="text-3xl">cart</Link>
            </div>
            <div className="border-t-1 flex justify-center pt-2 items-center border-white">
              <Link to="/about" className="text-3xl">about</Link>
            </div>
            <div className="border-y-1 flex justify-center pt-2 items-center border-white">
              <Link to="/contact-us" className="text-3xl">contact us</Link>
            </div>
          </div>
          <div className="link absolute bottom-3 right-3">
            <div className="flex justify-end items-center mb-3">
              <FaInstagram onClick={()=>window.open("https://www.instagram.com/premmaurya222", "_blank", "noopener,noreferrer")} color={"white"} size={23} />
              <FaGithub onClick={()=>window.open('https://www.github.com/Premkmaurya')} color={"white"} size={23} className="ml-4" />
              <FaLinkedin onClick={()=>window.open('https://www.linkedin.com/in/prem-maurya-8640b5319/')} color={"white"} size={23} className="ml-4" />
            </div>
            <p className="text-sm">
              © 2025 Foodista - Terms - Privacy - Refunds
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullScreenNav;
