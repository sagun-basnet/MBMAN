import React from "react";
import Navbar from "../components/global/Navbar";
import Slider from "../components/home/Slider";
import HeroSection from "../components/home/HeroSection";

const HomePage = () => {
  const api = [
    {
      id: 1,
      name: "jhon",
    },
    {
      id: 2,
      name: "ram",
    },
    {
      id: 3,
      name: "bj",
    },
    {
      id: 4,
      name: "hari",
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {api.map((item, index) => {
        return (
          <div className="w-[10rem] h-[10rem] border-2  flex flex-col justify-center items-center">
            <span>{item.id}</span>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
