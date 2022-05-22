import React from "react";
import { useNavigate } from "react-router-dom";

//Icons
import { FaArrowUp, FaArrowDown, FaTrashAlt } from "react-icons/fa";

//Contexts
import { useSimpsons } from "../../contexts/SimpsonsContext";

let buttonStyle =
  "bg-transparent hover:bg-white hover:dark:bg-gray-200 text-gray-400 font-semibold py-2 px-2 border border-blue-500 hover:border-transparent rounded-full";

function SimpsonsList() {
  let navigate = useNavigate();
  const { simpsons, setAllSimpsons } = useSimpsons();

  const deleteSimpson = (id) => {
    setAllSimpsons(simpsons.filter((simpson) => simpson.id !== id));
  };

  const moveSimpson = (index, position) => {
    //If array dimensions out of bounds, return
    if (index + position < 0 || index + position >= simpsons.length) return;

    // Create a copy of the array
    const newSimpsons = [...simpsons];
    // swap
    const temp = newSimpsons[index];
    //delete from old position on array
    newSimpsons.splice(index, 1);
    //insert on new position
    newSimpsons.splice(index + position, 0, temp);
    //set localstorage and context
    setAllSimpsons(newSimpsons);
  };

  return (
    <ol className="dark:text-gray-200">
      {simpsons.map((simpson, index) => (
        <li key={simpson.id} className="mb-5">
          <div className="grid grid-cols-4 items-center text-left p-3 border-solid border-2 shadow rounded-lg hover:bg-blue-100 hover:shadow-xl hover:dark:bg-blue-800">
            {/* Placement */}
            <p className="font-comic ml-5">{index + 1}</p>
            {/* Avatar */}
            <img
              className="w-20 h-25 rounded"
              src={simpson.avatar.split(".png")[0] + ".png"}
              alt="Default avatar"
            />
            {/* Name */}
            <button
              className="font-comic hover:text-red-600"
              onClick={() => navigate(`/detail/${simpson.id}`)}
            >
              {simpson.name}
            </button>
            {/* Actions */}
            <div className="grid grid-cols-3 place-items-center">
              {/* Up Button */}
              <button
                className={buttonStyle + " text-green-400"}
                onClick={() => moveSimpson(index, -1)}
              >
                <FaArrowUp />
              </button>
              {/* Down Button */}
              <button
                className={buttonStyle + " text-red-400"}
                onClick={() => moveSimpson(index, 1)}
              >
                <FaArrowDown />
              </button>
              {/* Delete Button */}
              <button
                className={buttonStyle + " text-gray-500"}
                onClick={() => deleteSimpson(simpson.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default SimpsonsList;
