import { appState } from "../AppState.js";
import { Background } from "../Models/Background.js";
import { api } from "./AxiosService.js";

class BackgroundsService {
  async getBackgrounds() {
    const res = await api.get("/images");
    // console.log("Background data:", res.data);
    appState.background = new Background(res.data);
    // console.log(appState.background);
  }
}

export const backgroundsService = new BackgroundsService();
