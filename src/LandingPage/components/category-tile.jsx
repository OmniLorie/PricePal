/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryTile = (props) => {
  return (
    <div className="flex flex-col w-full px-8  md:w-[90%] mx-auto ">
      <div className="flex justify-between px-8 mb-4 items-center">
        <h4 className="font-bold text-gray-800 text-xl">
          {props.category?.title.toUpperCase()}
        </h4>
        <Link to={props.category?.path} className="text-blue-500 underline">
          Show more
        </Link>
      </div>
      {/* ----------------Table Heading--------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md rounded-md p-4 font-semibold text-lg bg-gray-300">
        {props.category?.headings.map((heading, index) => {
          return (
            <p key={index}>
              {heading} {index > 0 ? "GHC" : ""}
            </p>
          );
        })}
      </div>
      <div className="border-y">
        {props.category?.data.map((d, index) => {
          return (
            <div
              className={`grid text-sm text-gray-600 ${
                index % 2 !== 1 ? "bg-gray-100" : "bg-white"
              } grid-cols-1 sm:grid-cols-4 gap-4 py-4 items-center px-5`}
              key={index}
            >
              <div className="flex align-middle items-center gap-2">
                <img
                  src={d.companyLogo}
                  alt={d.companyName}
                  className="size-6"
                />
                <p className="pl-1">{d.companyName}</p>
              </div>
              <p className="pl-1">{d.petrol}</p>
              <p className="pl-1">{d.diesel}</p>
              <p className="pl-1">{d.premium}</p>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default CategoryTile;
