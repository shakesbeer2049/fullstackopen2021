import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
// import Filter from './Filter';
// import Search from './Search';
const api_key = process.env.weather_api_key;
const Filter = ({ countryData }) => {
  const [filter, setFilter] = useState("");
  const [weather, setWeather] = useState("");
  const searchArray = [];
  const handler = (e) => {
   
    setFilter(e.target.value);
  };
  const a = countryData.filter((country) => {
    if (country.name.official.toLowerCase().includes(filter.toLowerCase())) {
      searchArray.push(country);
    }
  });

  const getWeather = () => {}
  useEffect(() => {
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${filter.capital}&units=metric&appid=${api_key}`
      )
      .then((resultWeather) => {
        setWeather(resultWeather.data);
      });
  }, []);

  return (
    <div>
      <input type="text" onChange={handler} />
      <h1>{filter}</h1>
      {filter.length != "" && filter.length <= 10 ? (
        searchArray.map((ele) => (
          <div className="country">
            <h1>{ele.name.official}</h1>
            <h2>{ele.capital}</h2>
            <h2>POPULATION: {ele.population}</h2>
            <h1>Weather in {ele.capital}</h1>
            <h2></h2>
            {/* <h2>{Object.keys(ele.currencies)}</h2> */}
            {/* <h2>{Object.keys(ele.languages)[0]}</h2> */}

            <h2 className="flag">{ele.flag}</h2>
            <hr />
          </div>
        ))
      ) : (
        <h1>Please be more specifc</h1>
      )}
    </div>
  );
};

const App = (props) => {
  const [countryData, setCountryData] = useState([]);

  const countries = [];
  

  // the function we pass inside usestate is our effect
  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then((result) => {
      setCountryData(result.data);
    });
    // axios
    // .get(`api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${weather_api_key}`)
    // .then(resultWeather => {
    //   setWeather(resultWeather.data)
    // })
  }, []);

  return (
    <div>
      {/* <input type="text" onChange = {handleFilter} /> */}
      <Filter countryData={countryData} />
    </div>
  );
};

export default App;
