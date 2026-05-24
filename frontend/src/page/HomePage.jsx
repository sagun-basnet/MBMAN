import React from "react";
import Navbar from "../components/global/Navbar";
import Slider from "../components/home/Slider";
import HeroSection from "../components/home/HeroSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Slider />
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
