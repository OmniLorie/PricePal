
import { FaGasPump, FaDollarSign, FaTaxi, FaEllipsisH } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full py-4 px-6 bg-black text-amber-500 flex justify-between items-center">
        <div className="text-4xl font-bold">PricePal</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-l-full text-black"
          />
          <button className="px-4 py-2 bg-amber-500 text-black rounded-r-full">
            Search
          </button>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white h-[80vh] flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore real-time commodity prices in Ghana
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            From fuel, to forex, to long rides, and many more.
          </p>
        </div>
        <div className="w-1/2 overflow-hidden">
          <div className="flex justify-between animate-marquee">
            <FaGasPump className="text-3xl mx-4" />
            <FaDollarSign className="text-3xl mx-4" />
            <FaTaxi className="text-3xl mx-4" />
            <FaEllipsisH className="text-3xl mx-4" />
            <FaGasPump className="text-3xl mx-4" />
            <FaDollarSign className="text-3xl mx-4" />
            <FaTaxi className="text-3xl mx-4" />
            <FaEllipsisH className="text-3xl mx-4" />
          </div>
        </div>
        <button className="mt-8 px-6 py-2 w-1/4 bg-black shadow-lg text-amber-500 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Hero;
