import { useEffect, useState } from "react";
import CategoryTile from "./category-tile";

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
      <div className="container mx-auto flex flex-col gap-4 w-full ">
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
          <CategoryTile category={category} />
        </div>
      </div>
    </div>
  );
};

export default PricePreview;
