import React from "react";
import hero_img from "../assets/hero-img.png";

const HeroSection = () => {
  return (
    <div className="max-w-[90%] flex mx-auto">
      <div className="max-w-[50%] mx-6 mt-20">
        <p className="text-[#171a29] text-8xl font-black italic leading-[4rem]">
          <span className="text-9xl">FOOD</span> DELIVERY
        </p>
        <br />
        <p className="text-[#171a29] font-semibold">
          Discover the ultimate convinience with Monkey Delivers. Experience
          speed and variety with Monkey Delivers!
        </p>
        <br />
        <br />
        <a
          href="#restaurants"
          className="bg-[#171a29] text-slate-50 px-4 py-2 rounded-full"
        >
          Explore Restaurants
        </a>
      </div>

      <img
        src={hero_img}
        className="scroll-smooth w-[40rem] h-[40rem] scale-x-[-1] mt-[-2rem] -z-10"
      />
    </div>
  );
};

export default HeroSection;
