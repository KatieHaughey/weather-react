import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <div>
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={32}
          color={"black"}
        />
      </div>
      <span className="WeatherForecast-max">{maxTemperature()}</span>
      <span className="WeatherForecast-min">{minTemperature()}</span>
    </div>
  );
}
