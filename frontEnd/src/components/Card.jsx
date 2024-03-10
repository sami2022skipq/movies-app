import React from "react";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-3">
      <div className="w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 duration-350" >
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://www.indiewire.com/wp-content/uploads/2019/12/beach_bum.jpg?w=510"
            alt=""
          />
        </a>
        <div className="pt-2">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
            </h5>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
