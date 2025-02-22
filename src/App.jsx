import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import WeatherDisplay from './components/weatherDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'c7c2395753b8ba9b3b878aa747a168a6'; 

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

      <p class="h1 text-center glowing-text">My Weather Station</p>
      <div className="app">
        <SearchBar onSearch={fetchWeather} onReset={handleReset} />
        <WeatherDisplay weather={weather} />
      </div>
    </>
  );
}

export default App;
