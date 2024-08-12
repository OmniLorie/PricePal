/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryTile = (props) => {
  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex justify-between items-center">
        <h4>{props.category?.title}</h4>
        <Link to={props.category?.path} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
        {props.category?.headings.map((heading, index) => {
          return <p key={index}>{heading}</p>;
        })}
      </div>
    </div>
  );
};

export default CategoryTile;
