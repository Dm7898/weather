import { useWeather } from "../hooks/useWeather";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/Weather";
import ErrorMessage from "./ErrorMessage";
import {
  Container,
  Row,
  ForecastCard,
  SubTitle,
  Button,
  SpinnerContainer,
  Icon,
  ImgDiv,
  ForecastRow,
} from "../styles/StyledComponents";
import InputSearch from "./InputSearch";
import Forecast from "./Forecast";

const WeatherInfo = () => {
  const { city, unit, toggleUnit } = useWeather();
  const {
    data: weather,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    retry: false,
    refetchInterval: 30000,
  });

  if (isLoading)
    return (
      <Container>
        <SpinnerContainer />
      </Container>
    );
  if (error)
    return (
      <Container>
        <ErrorMessage message={error.message} />
      </Container>
    );
  if (!weather) return null;

  const timestamp = weather.dt;
  const date = new Date(timestamp * 1000);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dayName = date.toLocaleDateString([], { weekday: "long" });
  const temperature =
    unit === "C" ? weather.main.temp : (weather.main.temp * 9) / 5 + 32;

  return (
    <Container>
      <Row>
        <InputSearch />
        <SubTitle>
          <span>
            {weather.name}, {weather.sys.country}
          </span>
          <br />
          <span>{time}</span>
        </SubTitle>
      </Row>

      <ImgDiv>
        <Icon
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={`${weather.weather[0].description} icon`}
        />
      </ImgDiv>
      <div>
        {weather.weather[0].description.charAt(0).toUpperCase() +
          weather.weather[0].description.slice(1)}
      </div>
      <Button onClick={toggleUnit} aria-label="Toggle temperature unit">
        Switch to {unit === "C" ? "F" : "C"}
      </Button>

      <Row>
        <SubTitle>☀️ Weather</SubTitle>
      </Row>
      <ForecastRow>
        <ForecastCard>
          <h2>
            {temperature.toFixed(1)}°{unit}
          </h2>
          <h3>{dayName}</h3>
        </ForecastCard>

        <ForecastCard>
          <div>
            <Icon
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={`${weather.weather[0].description} icon`}
            />
          </div>
          <div>
            <p>💨 {weather.wind.speed} m/s</p>
            <p>💧 {weather.main.humidity}%</p>
          </div>
        </ForecastCard>
      </ForecastRow>

      <Forecast />
    </Container>
  );
};

export default WeatherInfo;
