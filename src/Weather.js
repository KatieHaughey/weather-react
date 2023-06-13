import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="header">
            <h1>{weatherData.city}</h1>
            <h2>
              <div className="p-2">
                <WeatherIcon
                  code={weatherData.icon}
                  size={100}
                  color={"white"}
                />
              </div>
              <WeatherTemperature celsius={weatherData.temperature} />
            </h2>
            <h3>
              <FormattedDate date={weatherData.date} />
            </h3>
            <ul className="weather-details">
              <li className="text-capitalize">{weatherData.description}</li>
              <br />
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <WeatherForecast coordinates={weatherData.coordinates} />

          <br />

          <form className="change-city" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autocomplete="off"
                  className="search"
                  onChange={changeCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="button btn btn-light"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
