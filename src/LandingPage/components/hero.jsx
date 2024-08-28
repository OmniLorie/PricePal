import HeroImage from "../../assets/images/hero1.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex flex-col justify-center items-center text-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto  grid grid-cols-1 md:grid-cols-6 z-10 text-center md:text-left">
        {/* Text Section */}
        <div className="col-span-4 flex flex-col gap-8 justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight">
            Explore real-time commodity prices
            <br className="hidden md:block" /> in Ghana
          </h1>
          <p className="ibm-plex-mono-semibold text-lg sm:text-xl md:text-2xl mb-8 text-red-600 font-semibold">
            <Typewriter
              options={{
                strings: ["Fuel, Forex, Long Rides and More..."],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
