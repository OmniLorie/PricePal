import Hero from "./components/hero";
import PricePreview from "./components/price-preview";
import Feature from "./components/feature";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="bg-gray-100 py-16 relative min-h-screen md:min-h-[75vh] pt-20">
        <PricePreview />
        <Feature />
      </div>
    </div>
  );
};

export default LandingPage;
