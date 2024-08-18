import Hero from "./components/hero";
import PricePreview from "./components/price-preview";
import Feature from "./components/feature";
import { apiProducts } from "../services/products";
import { useEffect } from "react";
import { apiCompanies } from "../services/companies";
import ContactUs from "./components/contact-us";

const LandingPage = () => {
  const fetchProducts = async () => {
    // const res = await apiProducts();
    const res = await apiCompanies();
    console.log("Products--->", res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <div className="bg-pattern py-16 relative min-h-screen md:min-h-[75vh] pt-20">
        <PricePreview />
      </div>
      <div className="bg-primary-main py-20">
        <Feature />
      </div>
      <div className="bg-pattern py-20">
        <ContactUs />
      </div>
    </div>
  );
};

export default LandingPage;
