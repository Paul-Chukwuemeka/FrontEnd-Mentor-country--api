import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "./App";
const Navbar = () => {
    const {
      darkMode,
      setDarkMode
    } = useContext(SearchContext);
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div className="nav flex justify-between items-center px-[20px] sm:px-[50px] py-5 shadow-2xl w-full">
      <h1 className="text-3xl font-bold text-center sm:text-xl">Where in the world?</h1>

      <button className=" outline-none" onClick={() => setDarkMode(!darkMode)}>
        {!darkMode ? (
          <FontAwesomeIcon icon={faSun} className="px-2 text-xl"/>
        ) : (
          <FontAwesomeIcon icon={faMoon} className="px-2 text-xl"/>
        )}
        <span className="text-xl">{!darkMode ?   "Light mode" : " Dark mode"}</span>
      </button>
    </div>
  );
};

export default Navbar;
