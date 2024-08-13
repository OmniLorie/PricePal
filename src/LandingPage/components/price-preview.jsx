import { useEffect, useState } from "react";
import CategoryTile from "./category-tile";
import Shell from "../../assets/images/Shell.png";
import Total from "../../assets/images/total energies.jpeg";
import Goil from "../../assets/images/Goil logo.jpeg";
import ForexSummaryTable from "./forex-table";

const categoriesTabs = [
  { name: "FUEL", value: "fuel" },
  { name: "FOREX", value: "forex" },
  { name: "LONG RIDES", value: "rides" },
];

const categories = [
  {
    title: "Fuel",
    path: "/fuel",
    headings: ["Company Name", "Petrol", "Diesel", "Premium"],
    data: [
      {
        companyLogo: Shell,
        companyName: "Shell",
        petrol: "15.6",
        diesel: "10.8",
        premium: "17.9",
      },
      {
        companyLogo: Total,
        companyName: "Total Energies",
        petrol: "15.7",
        diesel: "10.9",
        premium: "18.00",
      },
      {
        companyLogo: Goil,
        companyName: "Goil",
        petrol: "15.5",
        diesel: "10.3",
        premium: "17.5",
      },
    ],
  },
  {
    title: "Forex",
    path: "/forex",
    headings: ["Bank", "Buying", "Selling", "Mid-rate"],
    data: ["Shel", "", "", ""],
  },
  {
    title: "Fuel",
    path: "/fuel",
    headings: ["Company Name", "Petrol", "Diesel", "Premium"],
    data: [
      {
        companyLogo: Shell,
        companyName: "Shell",
        petrol: "15.6",
        diesel: "10.8",
        premium: "17.9",
      },
    ],
  },
];

const PricePreview = () => {
  const [categorytoView, setCategoryToView] = useState("fuel");
  const [category, setCategory] = useState(null);

  useEffect(() => {
    handleCategoryChange("fuel");
  }, []);

  const handleCategoryChange = (value) => {
    setCategoryToView(value);
    setCategory(
      categories.find((c) => c.title.toLowerCase() === value.toLowerCase())
    );
  };
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto flex flex-col gap-8 w-full ">
        <div className="flex gap-8 items-center justify-center align-middle">
          {categoriesTabs.map((category, index) => {
            return (
              <button
                key={index}
                className={`text-gray-900 p-4 py-2 rounded-md shadow-lg w-[150px] font-extrabold ${
                  categorytoView === category.value
                    ? "bg-primary-main text-black  shadow-sm"
                    : "bg-complementary"
                } hover:shadow-xl`}
                onClick={() => handleCategoryChange(category.value)}
              >
                {category.name}
              </button>
            );
          })}
        </div>
        <div>
          {categorytoView === "fuel" && <CategoryTile category={category} />}
          {categorytoView === "forex" && <ForexSummaryTable />}
        </div>
      </div>
    </div>
  );
};

export default PricePreview;
