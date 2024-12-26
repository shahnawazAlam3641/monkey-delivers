import hero_img from "../assets/hero-img.png";

const HeroSection = () => {
  return (
    <div className="max-w-[90%] flex mx-auto">
      <div className="md:max-w-[50%] mx-6 mt-20">
        <p className="flex flex-col text-[#171a29]  font-black italic leading-[2rem] md:leading-[4rem]">
          <span className="text-5xl md:text-8xl lg:text-9xl">FOOD</span>{" "}
          <span className="text-4xl md:text-7xl lg:text-8xl">DELIVERY</span>
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
        className="hidden md:block scroll-smooth w-[40rem] h-[40rem] scale-x-[-1] mt-[-2rem] -z-10"
      />
    </div>
  );
};

export default HeroSection;
