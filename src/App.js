import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import List from "./pages/list";
import Add from "./pages/add";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App dark:bg-gray-900 flex flex-col min-h-screen">
      <Navbar />
      <article className="container mx-auto pt-10 sm:px-20 md:px-30 lg:px-34 xl:px-40 2xl:px-45">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </article>
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
}

export default App;
