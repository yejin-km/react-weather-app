import React from "react";

export default function FormattedDate(props) {
  // console.log(props.date);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // Check whether AM or PM
  let am_pm = hours >= 12 ? "PM" : "AM";

  return (
    <div>
      {day} {hours % 12 || 12}:{minutes} {am_pm}
    </div>
  );
}
