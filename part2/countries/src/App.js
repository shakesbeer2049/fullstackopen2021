import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter";
import "./index";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <>
      <Filter countries={countries} />
      <h1>Hello World</h1>
    </>
  );
};

export default App;
