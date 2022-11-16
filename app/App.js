import { BackgroundController } from "./Controllers/BackgroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodosControler } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  backgroundsController = new BackgroundController();
  timeController = new TimeController();
  quoteController = new QuoteController();

  weatherController = new WeatherController();

  todosController = new TodosControler();
}

window["app"] = new App();
