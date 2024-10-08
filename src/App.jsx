import React, { useState } from 'react';
//import axios from 'axios';
import SearchBar from './components/searchBar';
import WeatherDisplay from './components/weatherDisplay';
import Error from './components/Error';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'c7c2395753b8ba9b3b878aa747a168a6'; // Replace with your OpenWeatherMap API Key

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  const handleReset = () => {
    setWeather(null);
    setError('');
  };

  return (
    <>
    <h1>My Weather Station</h1>
    <div className="app">
      
      
      <SearchBar onSearch={fetchWeather} onReset={handleReset} />
      <Error message={error} />
      <WeatherDisplay weather={weather} />
    </div>
    </>
  );
}

export default App;
