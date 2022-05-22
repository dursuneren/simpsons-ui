import { createContext, useState, useContext } from "react";

const SimpsonsContext = createContext("");

export const SimpsonsProvider = ({ children }) => {
  const [simpsons, setSimpsons] = useState([]);
  const [simpsonsLoading, setSimpsonsLoading] = useState(true);

  //Setting data in the context and localStorage
  const setAllSimpsons = (data) => {
    setSimpsons(data);
    localStorage.setItem("simpsons", JSON.stringify(data));
  };

  //Getting data from localStorage to the context
  const setSimpsonsFromLocalStorage = () => {
    setSimpsons(JSON.parse(localStorage.getItem("simpsons")));
  };

  const values = {
    simpsons,
    setSimpsons,
    setAllSimpsons,
    setSimpsonsFromLocalStorage,
    simpsonsLoading,
    setSimpsonsLoading,
  };

  return (
    <SimpsonsContext.Provider value={values}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export const useSimpsons = () => {
  const context = useContext(SimpsonsContext);

  //Checking if the context is defined
  if (!context) {
    console.error("useSimpsons must be used within a SimpsonsContextProvider");
  }

  return context;
};
