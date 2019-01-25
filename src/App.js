import React, { Component } from 'react';
import './Style/App.css';
import LoadingScreen from './Components/LoadingScreen';
import Form from './Components/SearchBar';
import WeatherDetailsRight from './Components/WeatherDetailsRight';
import WeatherSummaryLeft from './Components/WeatherSummaryLeft';

import 'weather-icons/css/weather-icons.css';

const API_KEY = 'ee7908d028e3f01465f7626710ff3aef';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: undefined,
      temperature: undefined,
      tempMin: undefined,
      tempMax: undefined,
      city: undefined,
      country: undefined,
      test: undefined,
      humidity: undefined,
      wind: undefined,
      sunrise: undefined,
      sunset: undefined,
      isLoading: true,
      error: undefined
    };
  }

  getWeather = async e => {
    e.preventDefault();
    const zipCode = e.target.elements.zipCode.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (zipCode) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: Math.floor(data.main.temp),
        tempMin: Math.floor(data.main.temp_min),
        tempMax: Math.floor(data.main.temp_max),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        weatherId: data.weather[0].id,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        isLoading: false,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values.'
      });
    }
  };

  render() {
    return (
      <div id="background">
        <Form getWeather={this.getWeather} />
        {this.state.isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="card-container">
            <WeatherSummaryLeft
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              weatherId={this.state.weatherId}
            />
            <WeatherDetailsRight
              temperature={this.state.temperature}
              tempMin={this.state.tempMin}
              tempMax={this.state.tempMax}
              humidity={this.state.humidity}
              wind={this.state.wind}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
