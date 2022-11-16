import { BackgroundController } from "./Controllers/BackgroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  backgroundsController = new BackgroundController();
  timeController = new TimeController();
  quoteController = new QuoteController();
}

window["app"] = new App();
