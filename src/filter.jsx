import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { SearchContext } from "./App";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = () => {
  const [regionFilter, SetRegionFilter] =
    useState(true);
  const {
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
  } = useContext(SearchContext);
  const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const handleRegionFilter = () => {
    SetRegionFilter(
      (regionFilter) => !regionFilter
    );
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
    handleRegionFilter()
  };
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    let filteredCountries = countries;
    if (input) {
      filteredCountries =
        filteredCountries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(input.toLowerCase())
        );
    }
    if (region) {
      filteredCountries =
        filteredCountries.filter(
          (country) => country.region === region
        );
    }
    setCountryList(filteredCountries);
  }, [input, region, countries]);

  return (
    <>
      {!info ? (
        <div className="w-full py-10 px-[40px] flex sm:flex-row gap-2 flex-col justify-between">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Search for a country..."
            className={
              darkMode
                ? "border-none bg-[#2b3945] sm:w-[50%] rounded px-5 py-3 focus:border-[2px] focus:outline-none"
                : "border bg-white w-[400px] rounded-lg px-5 py-1 focus:border-[2px] focus:outline-none"
            }
          />

          <div className=" rounded-lg ">
            {regionFilter ? (
              <p className="flex gap-3 p-3 items-center border rounded-lg  " onClick={handleRegionFilter}>
                Filter By Region{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </p>
            ) : (
              <>
                <p className="flex gap-3 p-3 items-center relative border rounded-lg " onClick={handleRegionFilter}>
                  Filter By Region{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                  ></FontAwesomeIcon>
                </p>
            <div className={darkMode ? "absolute flex flex-col items-center border mt-1 rounded-lg bg-[#2b3945] ": " bg-white absolute flex flex-col items-center border mt-1 rounded-lg "}>
                  {regions.map((region) => {
                    return <button className="px-12 py-1" value={region} onClick={handleRegionChange} key={region}>{region}</button>;
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Filter;
