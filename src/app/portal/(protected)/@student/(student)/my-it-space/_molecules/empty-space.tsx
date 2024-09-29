import React from "react";

const EmptySpace = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-lg lg:max-w-xl w-4/5">
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Not yet...</h2>
        <p className="text-gray-600">
          You need to secure an IT space to be able to view this page.
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
          Find IT Space
        </button>
      </div>
    </div>
  );
};

export default EmptySpace;
