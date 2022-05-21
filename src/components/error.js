import React from "react";


function Error({text}) {
  return (
    <div className="flex justify-center items-center">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">{text}</strong>
      </div>
    </div>
  );
}

export default Error;
