import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: props.defaultCity,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="header">
            <h1>{weatherData.city}</h1>
            <h2>
              <div>
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <span className="currentTemperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="degreesToggle">°C</span>
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
          <div className="five-days"></div>

          <br />

          <form className="change-city">
            <button className="button btn btn-light mb-4">
              Current location
            </button>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autocomplete="off"
                  className="search"
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
    let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let unit = "metric";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(getResponse);

    return "Loading...";
  }
}
