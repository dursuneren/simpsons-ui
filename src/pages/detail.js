import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Contexts
import { useSimpsons } from "../contexts/SimpsonsContext";

//Components
import Spinner from "../components/spinner";
import Error from "../components/error";

function Detail() {
  const { id } = useParams();
  let navigate = useNavigate();
  const { simpsons, setSimpsonsFromLocalStorage } = useSimpsons();
  const [simpson, setSimpson] = useState(null);
  const [simpsonLoading, setSimpsonLoading] = useState(true);

  useEffect(() => {
    //If parameter id is not defined, navigate to list.
    if (!id) navigate("/");
    //If context not have simpsons, get from localstorage.
    if (!simpsons.length) {
      //If localstorage not have simpsons, navigate to list.
      if (
        localStorage.getItem("simpsons") === null ||
        JSON.parse(localStorage.getItem("simpsons")).length === 0
      ) {
        navigate("/");
      } else {
        //If localstorage have simpsons, set context.
        setSimpsonsFromLocalStorage();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //If context have simpsons, find simpson by id.
  useEffect(() => {
    setSimpson(simpsons.find((simpson) => simpson.id === id));
    setSimpsonLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simpsons]);

  return (
    <>
      {simpsonLoading && <Spinner />}
      {!simpson && !simpsonLoading && (
        <Error text="The person you are looking for was not found!" />
      )}
      {simpson && (
        <>
          {/* Avatar */}
          <img
            className="mx-auto mb-10 w-50 h-75 rounded object-center"
            src={simpson?.avatar.split(".png")[0] + ".png"}
            alt="Default avatar"
          />
          <h3 className="font-simpsons-font text-3xl ext-black-700 dark:text-gray-300">
            {simpson?.name}
          </h3>
          <div className=" divide-y-2 divide-simpsons-blue dark:divide-simpsons-yellow mb-10">
            <h4 className="font-simpsons-font text-xl ext-black-700 dark:text-gray-300">
              {simpson?.job}
            </h4>
            <p className="font-comic text-black-700 mt-2 pt-3 dark:text-gray-300">
              {simpson?.description}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
