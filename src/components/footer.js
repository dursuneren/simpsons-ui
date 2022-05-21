import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
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
  );
}

export default Footer;
