import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handelSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="flex items-center justify-center bg-slate-700">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full mx-w-md bg-slate-900 rounded-xl shadow py-8 px-8">
          <h2 className="text-lg font-bold text-white text-center">Sign In</h2>

          <form className="flex flex-col mt-2" onSubmit={handelSubmit}>
            
            <input
              placeholder="Email"
              className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
              type="email"
            ></input>
            <input
              placeholder="Password"
              className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
              type="password"
            ></input>

            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500  text-white font-medium py-2 px-2  rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in duration-200"
              type="submit"
            >
              Log In
            </button>
            <p className="text-white text-center mt-4 ">
              Create a new account:
              <Link
                className="text-white-500 hover:underline mt-4 px-1"
                to="/sign-up"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
