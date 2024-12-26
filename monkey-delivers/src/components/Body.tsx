import HeroSection from "./HeroSection";
import Cuisines from "./Cuisines";

const Body = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Cuisines />
    </div>
  );
};

export default Body;
