import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(true);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(false);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">15</span>
              <span className="WeatherForecast-temperature-min">10</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1c2d25d3b778335dacad0d1205b20d4e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&long=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
