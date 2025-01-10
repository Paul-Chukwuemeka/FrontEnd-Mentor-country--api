import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import "./index.css";
import { SearchContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Countries = () => {
  const {
    countries,
    setCountries,
    countryList,
    setCountryList,
    info,
    setInfo,
    darkMode,
  } = useContext(SearchContext);
  const [countryInfo, setCountryInfo] =
    useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "./data/data.json"
      );
      const data = response.data;
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    setCountryList(countries);
  }, []);

  let selectedCountry = countryList.filter(
    (country) => {
      return country.name.common === countryInfo;
    }
  );
  if (document.body.classList.contains("dark")) {
    document
      .querySelectorAll(".card")
      .forEach((card) => {
        card.classList.add(".card-dark");
      });
  } else {
    document
      .querySelectorAll(".card")
      .forEach((card) => {
        card.classList.remove(".card-dark");
      });
  }
  return (
    <>
      {info ? (
        <>
          <div
            className={
              darkMode
                ? " text-white px-[50px] p-10"
                : " px-[50px] p-10  bg-white m-auto  rounded-lg "
            }
          >
            <button
              className={
                darkMode
                  ? "bg-[#0910169c] h-10 w-20 rounded-lg flex justify-around items-center"
                  : "bg-white border h-10 w-20 rounded-lg flex justify-evenly items-center"
              }
              onClick={() =>
                setInfo((info) => !info)
              }
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
              />
              Back
            </button>
            <div className="mt-4">
              {selectedCountry.map((country) => {
                return (
                  <div
                    key={country.name.common}
                    className="lg:flex lg:justify-between"
                  >
                    <img
                      src={country.flags.png}
                      alt={
                        "flag of " +
                        country.name.common
                      }
                      className="w-[80%] m-auto h-auto lg:w-[500px] lg:rounded-none lg:h-[300px] border-2"
                    />
                    <div className="w-[80%] m-auto mt-3 text-xl p-3 lg:w-[50%] flex flex-col flex-wrap gap-3 lg:h-[300px]">
                      <h1 className="text-4xl">
                        {country.name.common}
                      </h1>
                      <p>
                        Population:{" "}
                        {country.population.toLocaleString()}
                      </p>
                      <p>
                        Region: {country.region}
                      </p>
                      <p>
                        Subregion:{" "}
                        {country.subregion}
                      </p>
                      <p>
                        Capital: {country.capital}
                      </p>
                      <div className="lg:flex">
                        <h2>Currencies:</h2>
                        <ul className=" px-2">
                          {country.currencies &&
                            Object.keys(
                              country.currencies
                            ).map(
                              (currencyCode) => (
                                <li
                                  key={
                                    currencyCode
                                  }
                                >
                                  {
                                    country
                                      .currencies[
                                      currencyCode
                                    ].name
                                  }{" "}
                                  ({currencyCode})
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="countries p-[50px]">
          {countryList.map((country) => {
            return (
              <div
                className="card border shadow-md"
                key={country.name.common}
                onClick={() => {
                  setCountryInfo(
                    country.name.common
                  );
                  setInfo((info) => !info);
                }}
              >
                <img
                  src={country.flags.png}
                  alt=""
                />
                <div className="details">
                  <h1>{country.name.common}</h1>
                  <p>
                    Population:{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>Region: {country.region}</p>
                  <p className="text-nowrap">
                    Capital: {country.capital}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Countries;
