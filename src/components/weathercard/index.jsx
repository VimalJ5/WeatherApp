
function Weather({ weatherData }) {
    return (
      <div className="weather-card">
        {weatherData && (
          <div className="weather-details">
            <h2>{weatherData.name}</h2>
            <img src = {`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            <p> Temperature : {weatherData.main.temp} C</p>
            <p> {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Weather;