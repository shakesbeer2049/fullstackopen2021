import Country from "./Country";

const Showcountry = ({ filter }) => {
    if (filter.length < 10 && filter.length > 0) {
      return (
        <>
          {filter.map((name, index) => (
            <Country name={name} key={index} />
          ))}
        </>
      );
    } else if (filter.length >= 10) {
      return (
        <div>
          <h1>Too many Matches</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No Matches yet</h1>
        </div>
      );
    }
  };

  export default Showcountry;