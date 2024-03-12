import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const {
    id,
    name,
    title,
    poster_path,
    first_air_date,
    overview,
    vote_average,
    vote_count,
  } = location.state;
  console.log(id, name, title, poster_path);
  return (
    <div className="flex justify-center bg-slate-700  h-screen pt-10 border">
      <div className=" flex flex-col items-center rounded-lg justify-center">
        <img
          className="w-60 p-3 rounded-3xl "
          src={`https://image.tmdb.org/t/p/original/t/p/w500/${poster_path}`}
          alt="poster"
        />
        <div className="bg-slate-500">
          <h1 className="text-2xl font-semibold  ">Title : {title || name}</h1>
          <h1>Release date : {first_air_date}</h1>
          <h1>Likes : {vote_count}</h1>
          <h1>Discription : {overview || "overView"}</h1>
          <h1>Rattings : {vote_average}</h1>
        </div>
      </div>
    </div>
  );
}

export default Details;
