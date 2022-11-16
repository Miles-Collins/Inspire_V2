import { appState } from "../AppState.js";
import { backgroundsService } from "../Services/BackgroundsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawBackground() {
  document.body.style.backgroundImage = `url(${appState.background.image})`;
  document.body.style.backgroundSize = "cover";
}
export class BackgroundController {
  constructor() {
    appState.on("background", _drawBackground);
    this.getBackgrounds();
  }
  async getBackgrounds() {
    try {
      await backgroundsService.getBackgrounds();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
