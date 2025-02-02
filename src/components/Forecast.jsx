import { useWeather } from "../hooks/useWeather";
import { useQuery } from "@tanstack/react-query";
import { fetchForeCast } from "../services/Weather";
import ErrorMessage from "./ErrorMessage";
import {
  ForecastCard,
  ForecastRow,
  Icon,
  SpinnerContainer,
} from "../styles/StyledComponents";

const Forecast = () => {
  const { city, unit } = useWeather();
  const { data, error, isLoading } = useQuery({
    queryKey: ["forecast", city],
    queryFn: () => fetchForeCast(city),
    retry: false,
    refetchInterval: 30000,
  });

  if (isLoading) return <SpinnerContainer />;
  if (error) return <ErrorMessage message={error.message} />;

  const dailyForecasts = data.list.filter((forecast) =>
    forecast.dt_txt.includes("12:00:00")
  );

  if (!data) return null;

  return (
    <ForecastRow>
      {dailyForecasts.map((forecast, index) => (
        <ForecastCard key={index}>
          <p>
            {new Date(forecast.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <Icon
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            alt={`${forecast.weather[0].description} icon`}
          />
          <p>
            {unit === "C"
              ? forecast.main.temp.toFixed(1)
              : ((forecast.main.temp * 9) / 5 + 32).toFixed(1)}
            °{unit}
          </p>
        </ForecastCard>
      ))}
    </ForecastRow>
  );
};

export default Forecast;
