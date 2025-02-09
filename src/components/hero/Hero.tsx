import hero from "../../assets/images/hero.png";
import apple from "../../assets/images/apple.png";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="container bg-primary flex flex-wrap gap-8 md:gap-16 my-10 px-4 md:px-16 rounded-xl shadow-md items-center justify-center">
      {/* Left Section */}
      <div className="flex flex-col py-8 md:py-16 gap-5 max-w-full md:max-w-[500px]">
        {/* Apple Icon and Text */}
        <div className="flex items-center gap-4">
          <img src={apple} alt="Apple logo" className="w-6 h-6 md:w-8 md:h-8" />
          <p className="text-white font-poppins text-lg">iPhone 14 Series</p>
        </div>

        {/* Main Title */}
        <div className="text-white text-4xl md:text-5xl font-inter font-semibold leading-tight">
          Up to 10% off Voucher
        </div>

        {/* Shop Now Button */}
        <div className="flex items-center gap-2 text-white text-base font-medium">
          <p className="border-b-2 pb-1 hover:text-secondary cursor-pointer">
            Shop Now
          </p>
          <GoArrowRight className="text-2xl" />
        </div>
      </div>

      {/* Hero Image */}
      <img
        src={hero}
        alt="Hero Image"
        className="object-contain w-full md:max-w-[500px] rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
