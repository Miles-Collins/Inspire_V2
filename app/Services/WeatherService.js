import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { setHTML } from "../Utils/Writer.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    const res = await api.get("/weather");
    // console.log("getting weather", res);
    appState.weather = new Weather(res.data);
    console.log("weather", appState.weather);
  }

  toggleWeather() {
    if (appState.weather.toggle == true) {
      setHTML("weather", appState.weather.CTemplate);
      appState.weather.toggle = !appState.weather.toggle;
      console.log("FTemp", appState.weather);
    } else {
      setHTML("weather", appState.weather.FTemplate);
      appState.weather.toggle = !appState.weather.toggle;
    }
  }
}

export const weatherService = new WeatherService();
