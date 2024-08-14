import HeroImage from "../../assets/images/abouthero.jpg";

const HeroAbout = () => {
  return (
    <div className="relative h-auto p-10 py-20 flex flex-col justify-center items-center text-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto  grid grid-cols-1 md:grid-cols-6 z-10 text-center md:text-left">
        {/* Text Section */}
        <div className="col-span-3"></div>
        <div className="col-span-3 flex flex-col gap-8 justify-center">
          <h1 className="text-3xl sm:text-4xl text-gray-800 md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
