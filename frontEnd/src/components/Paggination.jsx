import React from "react";

const Paggination = () => {
  return (
    <>
      <div className="flex justify-center m-3 mt-4">
        <div className="border  border-r-0 rounded-l-lg p-2 border-blue-600 ">
          Previous
        </div>
        <div className="border p-2 border-blue-600 ">
          0
        </div>
        <div className="border  border-l-0 rounded-r-lg p-2 border-blue-600 ">
          Next
        </div>
      </div>
    </>
  );
};

export default Paggination;
