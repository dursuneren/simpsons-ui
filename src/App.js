import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//Pages
import List from "./pages/list";
import Add from "./pages/add";
import Detail from "./pages/detail";

//Providers
import { SimpsonsProvider } from "./contexts/SimpsonsContext";

function App() {
  return (
    <div className="App dark:bg-gray-900 flex flex-col min-h-screen">
      <Navbar />
      <SimpsonsProvider>
        <article className="container mx-auto pt-10 sm:px-20 md:px-30 lg:px-34 xl:px-40 2xl:px-45">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </article>
      </SimpsonsProvider>
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
}

export default App;
