import React from 'react';
import './styles.css';
import moment from 'moment';
import { FiCloud } from "react-icons/fi";
import { FiThermometer } from "react-icons/fi";
import { BiDroplet } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";

const WeatherCard = ({weatherData}) => (
  
  <div class="container">
    <div class="weather-side">
        <div class="weather-gradient">
        <FiCloud size="5rem" color="white"></FiCloud>
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
)

export default WeatherCard;