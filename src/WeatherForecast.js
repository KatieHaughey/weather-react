import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
