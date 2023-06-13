import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Tue</div>
          <div>
            <WeatherIcon code="01d" size={32} />
          </div>
          <span>20</span>
          <span className="WeatherForecast-low">10</span>
        </div>
      </div>
    </div>
  );
}
