import React, { useEffect } from "react";

//Services
import simpsonsService from "../services/simpsonsService";

//Components
import SimpsonsList from "../components/Simpsons/simpsonsList";
import Header from "../components/header";
import Spinner from "../components/spinner";
import Error from "../components/error";

//Contexts
import { useSimpsons } from "../contexts/SimpsonsContext";

function List() {
  //from Context
  const {
    simpsons,
    setAllSimpsons,
    setSimpsonsFromLocalStorage,
    simpsonsLoading,
    setSimpsonsLoading,
  } = useSimpsons();

  //If localStorage has simpsons, set them to state or fetch them from API at first render
  useEffect(() => {
    if (
      localStorage.getItem("simpsons") === null ||
      JSON.parse(localStorage.getItem("simpsons")).length === 0
    ) {
      getSimpsons();
    } else {
      setSimpsonsFromLocalStorage();
      setSimpsonsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Get Simpsons from API and store them in localStorage and Context
  const getSimpsons = async () => {
    try {
      const { data } = await simpsonsService.getSimpsons();
      setAllSimpsons(data);
      setSimpsonsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Header header="List" />
      {simpsonsLoading && <Spinner />}
      {!simpsons.length && !simpsonsLoading && <Error text="Data Not Found!" />}
      <div>{simpsons && <SimpsonsList />}</div>
    </>
  );
}

export default List;
