/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const headings = ["Company", "Petrol", "Diesel", "Premium"];

const FuelSummaryTable = (props) => {
  console.log("Fuel category---->", props.category);
  return (
    <div className="flex flex-col w-full px-8  md:w-[90%] mx-auto ">
      <div className="flex justify-between px-16 mb-4 items-center">
        <h4 className="font-bold text-gray-800 text-xl">
          {props.category?.categoryName?.toUpperCase()}
        </h4>
        <Link to={props.category?.path} className="text-blue-500 underline">
          Show more
        </Link>
      </div>
      {/* ----------------Table Heading--------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md rounded-md p-4 font-semibold text-lg bg-gray-300">
        {headings.map((heading, index) => {
          return (
            <p key={index}>
              {heading} {index > 0 ? "GHC" : ""}
            </p>
          );
        })}
      </div>
      <div className="border-y">
        {props.category?.companies.map((company, index) => {
          return (
            <div
              className={`grid text-sm text-gray-600 ${
                index % 2 !== 1 ? "bg-gray-100" : "bg-white"
              } grid-cols-1 sm:grid-cols-4 gap-4 py-4 items-center px-5`}
              key={index}
            >
              <div className="flex align-middle items-center gap-2">
                <img
                  src={`https://savefiles.org/${company.companyLogo}?shareable_link=329`}
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
    </div>
  );
};

export default FuelSummaryTable;
