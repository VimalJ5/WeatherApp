import React, { useState, useEffect } from 'react';
import './App.css'
import Weather from './components/weathercard'
import Title from './components/Title'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState('Zurich'); // Set default city to Zurich

  useEffect(() => {
    fetchWeatherData(search);
  }, []); // Fetch weather data on component mount

  const fetchWeatherData = async (city) => {
    const apiKey = ''; //Enter your API key here
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  return (
    <div className="App">
      <Title />
      <div className="content-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search city"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
