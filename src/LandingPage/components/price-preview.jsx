/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FuelSummaryTable from "./fuel-table";

import ForexSummaryTable from "./forex-table";
import RidesSummaryTable from "./rides-table";
import TableSkeleton from "./TableSkeleton";
import { apiCategoryByName } from "../../services/categories";

const categoryTabs = [
  { name: "FUEL", value: "Fuel" },
  { name: "FOREX", value: "Forex" },
  { name: "LONG RIDES", value: "Long Rides" },
];

const PricePreview = () => {
  const [loading, setLoading] = useState(false);
  const [categorytoView, setCategoryToView] = useState("Fuel");
  const [category, setCategory] = useState(null);

  const fetchCategory = async (categoryName) => {
    setLoading(true);
    try {
      const res = await apiCategoryByName(categoryName);
      if (res.status === 200) {
        setCategory(res.data.category);
      }
    } catch (error) {
      console.log("Error Fetching category", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setCategoryToView(category.value);
    fetchCategory(category.value);
  };

  useEffect(() => {
    fetchCategory("Fuel");
  }, []);

  return (
    <div
      className="container w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 bg-white rounded-xl py-8 absolute left-0 right-0 -top-[15%] shadow-5xl"
      style={{ margin: "auto" }}
    >
      <div className="flex gap-4 md:gap-8 items-center justify-center align-middle flex-wrap">
        {categoryTabs.map((tab, index) => {
          return (
            <button
              key={index}
              className={`text-gray-900 p-3 md:p-4 rounded-md shadow-md w-[120px] md:w-[150px] font-semibold ${
                categorytoView.toLowerCase() === tab.name.toLowerCase()
                  ? "bg-primary-main text-red-600 shadow-sm font-extrabold"
                  : "bg-complementary"
              } hover:shadow-xl`}
              onClick={() => handleCategoryChange(tab)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      {loading ? (
        <TableSkeleton />
      ) : (
        <div>
          {categorytoView === "Fuel" && (
            <FuelSummaryTable category={category} />
          )}
          {categorytoView === "Forex" && (
            <ForexSummaryTable category={category} />
          )}
          {categorytoView === "Long Rides" && (
            <RidesSummaryTable category={category} />
          )}
        </div>
      )}
    </div>
  );
};

export default PricePreview;
