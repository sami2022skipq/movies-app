import React from "react";

const Paggination = (props) => {
  let { onNext, onPrev, pageNum } = props;

  return (
    <>
      <div className="flex justify-center m-3 mt-4">
        <div
          className="border  border-r-0 rounded-l-lg p-2 border-blue-600  hover:bg-blue-600 hover:cursor-pointer"
          onClick={onPrev}
        >
          Previous
        </div>
        <div className="border p-2 border-blue-600 hover:bg-blue-600 hover:cursor-pointer">
          {pageNum}
        </div>
        <div
          className="border  border-l-0 rounded-r-lg p-2 border-blue-600  hover:bg-blue-600 hover:cursor-pointer"
          onClick={onNext}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default Paggination;
