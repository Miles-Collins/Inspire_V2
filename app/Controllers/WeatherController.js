import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
  setHTML(
    "weather",
    appState.weather.toggle
      ? appState.weather.FTemplate
      : appState.weather.CTemplate
  );
}

export class WeatherController {
  constructor() {
    this.getWeather();
    appState.on("weather", _drawWeather);
  }

  async getWeather() {
    try {
      await weatherService.getWeather();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  toggleWeather() {
    try {
      // console.log("toggling weather");
      weatherService.toggleWeather();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
