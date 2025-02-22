import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;
  console.log(weather);


  return (

    <div class="card glowing-border" style={{ width: '18rem', justifySelf: 'center', marginTop: '50px', border: 'none' }}>
      <div class="card-body text-center">
        <h5 class="card-title">{weather.name}, {weather.sys.country}</h5>
        <h6 class="card-subtitle mb-2 ">Temperature: {weather.main.temp}°C</h6>
        <p class="card-text">Weather: {weather.weather[0].description}</p>
        <p class="card-text">Humidity: {weather.main.humidity}%</p>
        <p class="card-text">Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>


  );
};

export default WeatherDisplay;
