import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

const Card = ({ movie }) => {
  let {
    title,
    id,
    name,
    poster_path,
    first_air_date,
    overview,
    vote_average,
    vote_count,
  } = movie;
  // const dataToPass = { name: 'John Doe', age: 25 };
  return (
    // <div className="flex flex-wrap justify-center space-x-3">
    <div className=" p-2 mt-4 w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 duration-350 hover:cursor-pointer">
      <Link to="/details" state={movie}>
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/t/p/w500/${poster_path}`}
          alt=""
        />
      </Link>
      <div className="pt-2">
        <h5 className="flex items-center justify-center mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {title || name || " "}
        </h5>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
