import React, { useState } from "react";
import "./index.css";
import Countries from "./countries";
import Navbar from "./navbar";
import Filter from "./filter"
export const SearchContext =
  React.createContext();

function App() {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryList, setCountryList] = useState([])
  const [info , setInfo] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <SearchContext.Provider
        value={{
          input,
          setInput,
          region,
          setRegion,
          countries,
          setCountries,
          countryList,
          setCountryList,
          info,
          setInfo,
          darkMode,
          setDarkMode
        }}
      >
        <Navbar />
        <Filter />
        <Countries />
      </SearchContext.Provider>
    </>
  );
}

export default App;
