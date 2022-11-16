import { weatherService } from "../Services/WeatherService.js";

export class WeatherController {
  constructor() {}

  async getWeather() {
    try {
      await weatherService.getWeather();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
