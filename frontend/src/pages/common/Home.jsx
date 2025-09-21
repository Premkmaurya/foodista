import Hero from "../../components/home/Hero";
import Feautre from "../../components/home/Feautre";
import Header from "../../components/home/Header";
import VideoSection from "../../components/home/VideoSection";
import Footer from "../../components/common/Footer";
import Ad from "../../components/home/Ad";

const Home = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center">
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
