import React, { useRef, useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../../context/nav/NavContext";

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
        opacity: 1,
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
        className="hidden h-screen w-screen fixed z-50 top-0"
      >
        <div className="h-full w-full flex">
          <div className="stair_2 h-full w-1/5 bg-black"></div>
          <div className="stair_2 h-full w-1/5 bg-black"></div>
          <div className="stair_2 h-full w-1/5 bg-black"></div>
          <div className="stair_2 h-full w-1/5 bg-black"></div>
          <div className="stair_2 h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div
        ref={fullNavRef}
        className="hidden h-screen w-screen absolute z-70 text-white bg-black"
      >
        <div className="flex w-full justify-between px-4 items-center">
          <div className="w-[7rem]">
            <svg
              className=" w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <RxCross1
            onClick={() => {
              tl2.current.reverse().delay(-1);
              setOpen(false);
            }}
            ref={crossIconRef}
            className="w-20 cursor-pointer"
            size={85}
            color={"white"}
          />
        </div>
        <div className="py-25">
          <div className="link relative overflow-hidden border-y-1 border-white/30">
            <h1 className="font-[font-v-2] text-center leading-[12.4vw] sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
              home
            </h1>
            <div className="moveLink absolute -top-[100%] h-[4.6rem] flex gap-[18rem] bg-[#D3FD50]">
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative overflow-hidden border-y-1 border-white/30">
            <h1 className="font-[font-v-2] leading-[12.4vw] text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
              about
            </h1>
            <div className="moveLink absolute -top-[100%] h-[4.6rem] flex gap-[18rem] bg-[#D3FD50]">
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative overflow-hidden border-y-1 border-white/30">
            <h1 className="font-[font-v-2] leading-[12.4vw] text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
              cart
            </h1>
            <div className="moveLink absolute -top-[100%] h-[4.6rem] flex gap-[18rem] bg-[#D3FD50]">
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative overflow-hidden border-y-1 border-white/30">
            <h1 className="font-[font-v-2] leading-[12.4vw] text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
              order
            </h1>
            <div className="moveLink absolute -top-[100%] h-[4.6rem] flex gap-[18rem] bg-[#D3FD50]">
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative overflow-hidden border-y-1 border-white/30">
            <h1 className="font-[font-v-2] leading-[12.4vw] text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
              liked
            </h1>
            <div className="moveLink absolute -top-[100%] h-[4.6rem] flex gap-[18rem] bg-[#D3FD50]">
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex text-black">
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
                <h2 className="whitespace-nowrap font-[font-v-2]   text-center sm:leading-[6vw] tracking-tight uppercase  text-[4.4rem] sm:text-[5.3rem]">
                  Pour Tout voir
                </h2>
                <img
                  className="w-[14vw] h-18 pt-2 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullScreenNav;
