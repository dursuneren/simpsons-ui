import "./App.css";
import Navbar from "./components/navbar";
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="App dark:bg-gray-900 flex flex-col min-h-screen">
      <Navbar />
      <article className="container mx-auto pt-10 sm:px-20 md:px-30 lg:px-34 xl:px-40 2xl:px-45">
        <div className="divide-y divide-simpsons-blue dark:divide-simpsons-yellow">
          <h3 className="font-simpsons-font text-3xl ext-black-700 dark:text-gray-300">
            Lorem Ipsum!
          </h3>
          <p className="font-comic text-black-700 mt-2 pt-3 dark:text-gray-300">
          Grampa Simpson or simply Grampa, (born May 25, 1907) is a major character in The Simpsons and a supporting character in The Simpsons Movie. He is the oldest patriarch of the Simpson family, ex-husband of Mona Simpson, father of Homer Simpson, Herbert Powell and Abbey, father-in-law of Marge Simpson and paternal grandfather of Bart, Lisa and Maggie Simpson. He is also the ex-boyfriend of Jacqueline Bouvier, his daughter-in-law's mother (which would have made Marge and Homer step siblings).
          </p>
        </div>
      </article>
      <div className="flex-1"></div>
      <footer className="text-center lg:text-left">
        <div className="flex justify-center p-6 bg-simpsons-blue-light text-gray-700 dark:bg-simpsons-blue-dark dark:text-gray-400">
          <span>© {new Date().getFullYear()} - Created By</span>
          <FaHeart className="text-simpsons-red ml-2 mt-1 mr-2" />
          <a
            className="text-gray-700 underline hover:text-gray-600 hover:dark:text-gray-300 dark:text-white font-semibold"
            href="https://github.com/dursuneren"
            target="_blank"
            rel="noreferrer"
          >
            debetuz.dev
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
