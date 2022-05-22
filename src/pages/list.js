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
import { toast } from "react-toastify";

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

  //If simpsons array is empty because of deletion, show warning for refetching or add new simpson
  useEffect(() => {
    !simpsons?.length &&
      !simpsonsLoading &&
      toast.warn(
        "If you want to add a simpson, click on the 'Add +' button or refresh the page!",
        { autoClose: 5000 }
      );
  }, [simpsons, simpsonsLoading]);

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
      <div>{simpsons && <SimpsonsList />}</div>
      {!simpsons?.length && !simpsonsLoading && <Error text="Data Not Found!" />}
      {simpsonsLoading && <Spinner />}
    </>
  );
}

export default List;
