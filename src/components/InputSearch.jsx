import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import {
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "../styles/StyledComponents";
import { fetchWeather } from "../services/Weather";
import ErrorMessage from "./ErrorMessage";

const InputSearch = () => {
  const { setCity } = useWeather();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleCity = async (e) => {
    if (!input.trim()) return;

    try {
      const cityExists = await fetchWeather(input);
      if (!cityExists) throw new Error("City not found!");

      localStorage.setItem("city", input);
      setCity(input);
      setError("");
    } catch (err) {
      setError("City not found", err);
      setInput(localStorage.getItem("city") || "");
    }
    setInput("");
    e.target.blur();
  };

  return (
    <>
      <SearchWrapper>
        <SearchIcon onClick={handleCity}>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search City"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCity(e)}
        />
      </SearchWrapper>
      <ErrorMessage message={error} />
    </>
  );
};

export default InputSearch;
