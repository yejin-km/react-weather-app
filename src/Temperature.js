import React from "react";

export default function Temperature(props) {
  return (
    <div>
      <span className="temperature">
        <strong>{props.fahrenheit}</strong>
      </span>
      <span className="unit">°F</span>
    </div>
  );
}
