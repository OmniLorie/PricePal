import { useEffect, useState } from "react";
import { apiCategoryByName } from "../services/categories";

const headings = ["Company", "Petrol", "Diesel", "Premium"];
const Fuel = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchCategory = async (categoryName) => {
    setLoading(true);
    try {
      const res = await apiCategoryByName(categoryName);
      console.log("data-->", res.data.category);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log("Error Fetching category", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategory("Fuel");
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full px-8  md:w-[90%] mx-auto my-32 ">
        <div className="flex justify-between px-16 mb-4 items-center">
          <h4 className="font-bold text-gray-800 text-xl">
            {data?.category?.categoryName?.toUpperCase()}
          </h4>
        </div>
        {/* ----------------Table Heading--------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md rounded-t-md p-4 font-semibold text-lg bg-gray-300">
          {headings.map((heading, index) => {
            return (
              <p key={index}>
                {heading} {index > 0 ? "GHC" : ""}
              </p>
            );
          })}
        </div>
        <div className="border-y">
          {data?.category?.companies.map((company, index) => {
            return (
              <div
                className={`grid text-sm text-gray-600 ${
                  index % 2 !== 1 ? "bg-gray-100" : "bg-white"
                } grid-cols-1 sm:grid-cols-4 gap-4 py-4 items-center px-5`}
                key={index}
              >
                <div className="flex align-middle items-center gap-2">
                  <img
                    src={`https://savefiles.org/${company.logo}?shareable_link=329`}
                    alt={company.companyName}
                    className="size-6"
                  />
                  <p className="pl-1">{company.companyName}</p>
                </div>
                {["Petrol", "Diesel", "Premium"].map((productType) => {
                  const product = company.products.find(
                    (product) => product.productName === productType
                  );
                  return (
                    <p key={productType} className="pl-1">
                      {product ? product.price : "N/A"}
                    </p>
                  );
                })}
              </div>
            );
          })}{" "}
        </div>
        <div className="flex justify-end items-center w-full mt-6"></div>
      </div>
    </div>
  );
};

export default Fuel;
