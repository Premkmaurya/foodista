import Hero from "../../components/home/Hero";
import Feautre from "../../components/home/Feautre";
import Header from "../../components/navbar/Header";
import VideoSection from "../../components/home/VideoSection";
import Footer from "../../components/common/Footer";
import Ad from "../../components/home/Ad";
import { useContext, useEffect, useRef } from "react";
import { NavbarContext } from "../../context/nav/NavContext";
import gsap from "gsap";

const Home = () => {
  const { open } = useContext(NavbarContext);
  const containerRef = useRef(null);
  useEffect(() => {
    if (open) {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 2,
      onComplete: () => containerRef.current.classList.add("hidden"),
    })
  } else {
    containerRef.current.classList.remove("hidden")
    gsap.fromTo(containerRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }
    )
  }
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-white flex flex-col items-center"
    >
      <Header />
      <Hero />
      <Feautre />
      <VideoSection />
      <Ad />
      <Footer />
    </div>
  );
};

export default Home;
