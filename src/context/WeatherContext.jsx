import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("city") || "Mumbai");
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  return (
    <WeatherContext.Provider value={{ city, setCity, unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
