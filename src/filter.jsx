import React, {
  useContext,
  useEffect,
} from "react";
import { SearchContext } from "./App";

const Filter = () => {
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
    darkMode
  } = useContext(SearchContext);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    let filteredCountries = countries;
    if (input) {
      filteredCountries = filteredCountries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(input.toLowerCase())
      );
    }
    if(region){
      filteredCountries = filteredCountries.filter(
        (country)=> country.region === region
      )
    }
    setCountryList(filteredCountries);
  }, [input, region, countries]);

  return (
    <>
    {!info ?    <div className="w-full py-10 px-[40px] flex sm:flex-row gap-2 flex-col justify-between">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search for a country..."
        className={ darkMode ? "border-none bg-[#2b3945] w-[500px] rounded px-5 py-1 focus:border-[2px] focus:outline-none" :"border bg-white w-[500px] rounded-lg px-5 py-1 focus:border-[2px] focus:outline-none"  }
      />
      <select
        className={ darkMode ? "bg-[#2b3945]  p-3  rounded-lg w-fit":"bg-white text-[#2b3945] p-3 border rounded-lg w-fit"}
        onChange={handleRegionChange}
      >
        <option value={""}>
          Filter by Region
        </option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div> : <></>}
    </>

  );
};

export default Filter;
