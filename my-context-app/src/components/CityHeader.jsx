import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function CityHeader() {
  const { cityName, ruler, cityMood } = useContext(AppContext);

  return (
    <header className="city-header">
      <p className="label">Ancient City Council</p>
      <h1>{cityName}</h1>
      <p className="subtitle">
        Ruled by <strong>{ruler}</strong>
      </p>
      <p className="mood">Current city mood: {cityMood}</p>
    </header>
  );
}

export default CityHeader;