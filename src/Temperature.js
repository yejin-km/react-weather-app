import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  //show fahrenheit temperature
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  //show celsius temperature
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  //convert fahrenheit to celsius
  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span className="temperature">
          <strong>{props.fahrenheit}</strong>
        </span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">
          <strong>{Math.round(celsius())}</strong>
        </span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
