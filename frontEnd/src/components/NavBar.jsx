import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 items-center p-4 bg-slate-950 text-white text-xl">
        <Link to="/xyz"><img src="/vite.svg" /></Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/">Home</Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/fav">Favorites</Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/sign-in">Log In</Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/sign-up">Sign Up</Link>
      </div>
    </>
  );
};

export default NavBar;
