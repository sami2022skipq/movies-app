import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conifrmPassword, setConfirmPassword] = useState("");

  const handelsubmit = () => {
    e.prventDefault();
    
    Axios.post("http://localhost:3000/auth/signUp", {
      firstName,
      lastName,
      email,
      password,
    }).then(response=>{
        console.log(`responce of Axios is ${response}`)
    }).catch(err=>{
        console.log(err)
    });
  };
  return (
    <div className="flex items-center justify-center bg-slate-700">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full mx-w-md bg-slate-900 rounded-xl shadow py-8 px-8">
          <h2 className="text-lg font-bold text-white text-center">Sign Up</h2>

          <form className="flex flex-col mt-2" onSubmit={handelsubmit}>
            <div className="flex space-x-4 mb-4">
              <input
                placeholder="First Name"
                className=" bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="text" name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <input
                placeholder="Last Name"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="text" name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <input
              placeholder="Email"
              className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
              type="email" name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="Password"
              className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
              type="password" name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              placeholder="Confirm Password"
              className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
              type="password" name="conifrmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500  text-white font-medium py-2 px-2  rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in duration-200"
              type="submit"
            >
              Submit
            </button>
            <p className="text-white text-center mt-4 ">
              Already have an account ?{" "}
              <Link
                className="text-white-500 hover:underline mt-4 px-1"
                to="/sign-in"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
