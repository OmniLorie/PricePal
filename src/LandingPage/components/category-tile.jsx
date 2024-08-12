/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryTile = (props) => {
  return (
    <div className="flex flex-col w-full px-8 gap-6 md:w-[90%] mx-auto ">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-gray-800 text-xl">
          {props.category?.title.toUpperCase()}
        </h4>
        <Link to={props.category?.path}>Show more</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md rounded-md p-4 font-semibold text-lg bg-gray-300">
        {props.category?.headings.map((heading, index) => {
          return <p key={index}>{heading}</p>;
        })}
      </div>
    </div>
  );
};

export default CategoryTile;
