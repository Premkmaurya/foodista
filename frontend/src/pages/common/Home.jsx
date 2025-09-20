import Hero from "../../components/home/Hero";
import Feautre from "../../components/home/Feautre";
import Header from "../../components/home/Header";
import VideoSection from "../../components/home/VideoSection";

const Home = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <Header />
      <Hero />
      <Feautre />
      <VideoSection />
    </div>
  );
};

export default Home;
