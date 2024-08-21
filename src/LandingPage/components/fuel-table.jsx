/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const headings = ["Company", "Petrol", "Diesel", "Premium"];

const FuelSummaryTable = (props) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-8 md:w-[90%] mx-auto overflow-x-auto">
      <div className="flex justify-between mb-4 items-center px-4 sm:px-16">
        <h4 className="font-bold text-gray-800 text-lg sm:text-xl">
          {props.category?.categoryName?.toUpperCase()}
        </h4>
      </div>
      {/* ----------------Table Heading--------------------- */}
      <div className="relative grid grid-cols-4 gap-4 shadow-md rounded-t-md p-4 font-semibold text-lg bg-gray-300">
        {headings.map((heading, index) => (
          <p
            key={index}
            className={`${index === 0 ? "sticky left-0 bg-gray-300 z-10" : ""}`}
          >
            {heading} {index > 0 ? "GHC" : ""}
          </p>
        ))}
      </div>
      <div className="border-y overflow-x-auto">
        {props.category?.companies.map((company, index) => {
          if (index > 2) return null; // Show only the first 3 companies
          return (
            <div
              className={`relative grid text-sm text-gray-600 ${
                index % 2 !== 1 ? "bg-gray-100" : "bg-white"
              } grid-cols-4 gap-4 py-4 items-center px-4 sm:px-5`}
              key={index}
            >
              <div className="flex items-center gap-2 sticky left-0 bg-inherit z-10">
                <img
                  src={`https://savefiles.org/${company.logo}?shareable_link=329`}
                  alt={company.companyName}
                  className="w-8 h-8"
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
        })}
      </div>
      <div className="flex justify-end items-center w-full mt-6">
        <Link to="/fuel" className="text-blue-500 underline">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default FuelSummaryTable;
