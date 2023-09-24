import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo text-capitalize">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 weather-info">
          <img src={props.data.icon_url} alt={props.data.description} />
          <Temperature fahrenheit={props.data.temperature} />
        </div>

        <div className="col-6 weather-info">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
