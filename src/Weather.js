import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temp: 10,
    date: "Wednesday 10:00",
    description: "Cloudy",
    humidity: 60,
    wind: 42,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="header">
          <h1 id="city-name">{weatherData.city}</h1>
          <h2>
            <div>
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </div>
            <span className="currentTemperature">{weatherData.temp}</span>
            <span className="degreesToggle">°C</span>
          </h2>
          <h3>{weatherData.date}</h3>
          <ul id="weather-details">
            <li>{weatherData.description}</li>
            <br />
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <div className="five-days" id="forecast"></div>
      </div>

      <br />

      <form className="change-city" id="city-form">
        <input
          type="text"
          placeholder="Enter City"
          id="enter-city"
          autocomplete="off"
        />
        <input type="submit" id="submit-city" />
      </form>

      <button id="current-location-button">Current location</button>
    </div>
  );
}
