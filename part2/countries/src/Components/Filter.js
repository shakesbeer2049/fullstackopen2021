import { useState} from "react";
import Showcountry from "./Showcountry";
const Filter = ({ countries }) => {
  const [filter, setFilter] = useState({});

  let filtered = [];

  const filterHandle = (e) => {
    if (e.target.value) {
      filtered = countries.filter(countryFilter);
      setFilter(filtered);
      
    } else {
      filtered = [];
      setFilter(filtered);
    }

    function countryFilter(country) {
      if (
        country.name.official
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return country.name.official;
      }
    }
  };
  // if no match show null
  // else if filter.len > 5 show too many
  // else if <=5 show first country and others with a button

  return (
    <div>
      <input type="text" onChange={filterHandle} />

      <Showcountry filter={filter} />
    </div>
  );
};

export default Filter;
