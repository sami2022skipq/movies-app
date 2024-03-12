import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

const Card = ({ movie, addToFavorit, favourites,removefromFavorits }) => {
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
  return (
    <div className=" p-2 mt-4 w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 duration-350 hover:cursor-pointer">
      <Link to="/details" state={movie}>
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/t/p/w500/${poster_path}`}
          alt=""
        />
      </Link>
      <div className="p-1 bg-slate-600 absolute rounded-xl top-2 right-2 size-8">
        {favourites.includes(id) == false ? <div onClick={() => addToFavorit(id)}>💓</div> :  <div onClick={() => removefromFavorits(id)}>❌</div>}
        
       
      </div>
      <div className="pt-2">
        <h5 className="flex items-center justify-center mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {title || name || " "}
        </h5>
      </div>
    </div>
  );
};

export default Card;
