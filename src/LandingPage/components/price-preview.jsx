import { useEffect, useState } from "react";
import CategoryTile from "./category-tile";

const categoriesTabs = [
  { name: "Fuel", value: "fuel" },
  { name: "Forex", value: "forex" },
  { name: "Long Rides", value: "rides" },
];

const categories = [
  {
    title: "fuel",
    path: "/fuel",
    headings: ["Name", "Petrol", "Diesel", "Premium"],
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
    setCategory(categories.find((c) => c.title === value));
  };
  return (
    <div className="bg-[] py-16">
      <div className="container mx-auto flex flex-col gap-10 w-full">
        <div className="flex gap-8 items-center justify-center align-middle">
          {categoriesTabs.map((category, index) => {
            return (
              <button
                key={index}
                className={`text-gray-900 p-4 py-2 rounded-md shadow-lg w-[150px] ${
                  categorytoView === category.value
                    ? "bg-primary-main text-black font-extrabold shadow-sm"
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
          <CategoryTile category={category} />
        </div>
      </div>
    </div>
  );
};

export default PricePreview;
