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

const PricePreview = (props) => {
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
    <div
      className="container w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 bg-white rounded-xl py-8 absolute left-0 right-0 -top-[15%] shadow-5xl"
      style={{ margin: "auto" }}
    >
      <div className="flex gap-4 md:gap-8 items-center justify-center align-middle flex-wrap">
        {categoriesTabs.map((category, index) => {
          return (
            <button
              key={index}
              className={`text-gray-900 p-3 md:p-4 rounded-md shadow-md w-[120px] md:w-[150px] font-semibold ${
                categorytoView === category.value
                  ? "bg-primary-main text-red-600 shadow-sm font-extrabold"
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
  );
};

export default PricePreview;
