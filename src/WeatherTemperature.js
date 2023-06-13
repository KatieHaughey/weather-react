import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <span className="degreesToggle">
          °C | {""}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="currentTemperature">{fahrenheit()}</span>
        <span className="degreesToggle">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          {""} | °F
        </span>
      </div>
    );
  }
}
