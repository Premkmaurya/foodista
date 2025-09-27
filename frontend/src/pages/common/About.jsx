import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/navbar/Header";
import Heading from "../../components/about/Heading";
import Introduction from "../../components/about/Introduction";
import Skills from "../../components/about/Skills";
import Call from "../../components/about/Call";

function About() {
  return (
    <div>
      <Header />
      <div className="bg-white text-black/90 min-h-screen">
        <div className="container mx-auto px-6 py-12 lg:py-24">
          <Heading />
          <Introduction />
          <Skills />
        </div>
        <Call />
      </div>
      <Footer />
    </div>
  );
}

export default About;
