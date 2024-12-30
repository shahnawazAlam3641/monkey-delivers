import HeroSection from "../common/HeroSection";
import Cuisines from "../common/Cuisines";

const Body = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Cuisines />
    </div>
  );
};

export default Body;
