import { useState, useEffect } from "react";
import Hero from "./components/hero";
import PricePreview from "./components/price-preview";
import Feature from "./components/feature";
import { apiCategories } from "../services/categories";
import { apiCompanies } from "../services/companies";
import { apiProducts} from "../services/products";


const LandingPage = () => {
  const[companies, setCompanies] = useState(null)
  const[products, setProducts] = useState(null)
  const[categories, setCategories] = useState(null)
  return (
    <div>
      <Hero />
      <div className="bg-gray-100 py-16 relative min-h-screen md:min-h-[75vh] pt-20">
        <PricePreview categories={categories} products={products} companies={companies}/>
        <Feature />
      </div>
    </div>
  );
};

export default LandingPage;
