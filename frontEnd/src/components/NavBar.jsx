import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState("");

  let location = useLocation();

  return (
    <>
      <div className="flex flex-row space-x-4 items-center p-4 bg-slate-950 text-white text-xl">
        <Link to="/xyz">
          <img src="/vite.svg" />
        </Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/">
          Home
        </Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/fav">
          Favorites
        </Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/sign-in">
          Log In
        </Link>
        <Link className="p-1 rounded-md hover:bg-slate-600" to="/sign-up">
          Sign Up
        </Link>
        <form className="flex justify-end items-end" role="search">
          {localStorage.getItem("token") ? (
            <>
              <Link
                type="button"
                className="bg-red-700 rounded-xl p-1 hover:bg-red-900"
                to="/sign-in"
                role="button"
                onClick={() => {
                  localStorage.setItem("token", "");
                }}
              >
                Log Out
              </Link>
            </>
          ) : (
            // showing Login and Sigup button based on pathname
            <div>
              {location.pathname === "/login" && (
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              )}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default NavBar;
