import { useState,useEffect } from "react";
import axios from "axios";

const Country = ({ name }) => {
  const [show, setShow] = useState(false);
  const[weather, setWeather] = useState()
  const api_key = process.env.REACT_APP_API_KEY
  
  

  useEffect(()=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${name.capital}&appid=${api_key}&units=metric`)
    .then(res => {
      setWeather(res)
    })
    .catch(error => console.log(error))
  }
    ,[name.capital,api_key])
  function toggler() {
    setShow(!show);
  }

  if(show) {
     
    return (
      <>
        <div className="country">
          <span>{name.name.common}</span>
          <span>
            <button onClick={toggler}>Toggle View</button>
          </span>
          <div>
            <h1>{name.name.common}</h1>
            <h1>{name.flag}</h1>
            <h2>Capital : {name.capital}</h2>
            <h2>Population : {name.population}</h2>
            <h2>Weather in {name.capital} : {weather.data.main.temp}&deg;C</h2>
            
          </div>
          <hr />
        </div>
      </>
    );
  } else if(!show) {
    return (
      <>
        <div className="country">
          <div>
            <h1>
              {name.name.common}{" "}
              <span>
                <button onClick={toggler}>Toggle View</button>
              </span>
            </h1>
          </div>

          <hr />
        </div>
      </>
    );
  }
};

export default Country;
