import React from 'react';
import './styles.css';
import moment from 'moment';
import { FiCloud } from "react-icons/fi";
import { FiThermometer } from "react-icons/fi";
import { FiCloudRain } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiCloudOff } from "react-icons/fi";
import { FiCloudLightning } from "react-icons/fi";
import { FiCloudSnow } from "react-icons/fi";
import { BiDroplet } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => {
  let WeatherIcon;

  switch (weatherData.weather[0].main) {
    case 'Clear':
      WeatherIcon = <FiSun size="5rem" color="white" />;
      break;
    case 'Clouds':
      WeatherIcon = <FiCloud size="5rem" color="white" />;
      break;
    case 'Rain':
      WeatherIcon = <FiCloudRain size="5rem" color="white" />;
      break;
    case 'Snow':
      WeatherIcon = <FiCloudSnow size="5rem" color="white" />;
      break;
    case 'Thunderstorm':
      WeatherIcon = <FiCloudLightning size="5rem" color="white" />;
      break;
    default:
      WeatherIcon = <FiCloudOff size="5rem" color="white" />;
      break;
  }
  return (
    <div class="container">
    <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
    <div class="weather-side">
        <div class="weather-gradient">
        {WeatherIcon}
        </div>

        <div class="date-container">
          <h2 class="day-dayname">{moment().format('dddd')}</h2>
          <span class="date-day">{moment().format('LL')} </span>
          <span class="location"> {weatherData.name}</span>
        </div>
        <div class="weather-container">
          <h1 class="weather-temp"><FiThermometer size="2.5rem"></FiThermometer>{Math.round(weatherData.main.temp)} &deg;C</h1>
          <h3 class="weather-desc"><BiNotepad></BiNotepad>{weatherData.weather[0].main}</h3>
          <h3 class="weather-humidity"><BiDroplet></BiDroplet>Humidity {weatherData.main.humidity} %</h3>
        </div>
        
    </div>
  </div>
  );
  }
  

export default WeatherCard;