import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const fetchWeatherData = async (location) => {
    const API_KEY = '27b1f5e62b30e89fc38784ad50224966'; // Replace with your OpenWeatherMap API key
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    setWeatherData(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      const lowercaseLocation = location.toLowerCase();
      fetchWeatherData(lowercaseLocation);
      setLocation(lowercaseLocation);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex">
          <input
            type="text"
            name="location"
            placeholder="Enter city name"
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 p-2 rounded-l-md flex-grow bg-gray-900"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 px-4 rounded-r-md font-semibold"
          >
            Get Weather
          </button>
        </div>
      </form>
      {weatherData && (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <h3 className="text-gray-600 mb-4">
            {weatherData.weather[0].main} - {weatherData.weather[0].description}
          </h3>
          <h1 className="text-6xl font-bold">{Math.round(weatherData.main.temp)}°C</h1>
        </div>
      )}
    </div>
  );
};

export default Weather;
