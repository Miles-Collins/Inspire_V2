import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
  let template = "";
  appState.todos.forEach((t) => (template += t.TodoTemplate));
  setHTML("todos", template);
}

export class TodosControler {
  constructor() {
    this.getTodos();
    appState.on("todos", _drawTodos);
  }

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  async createTodo() {
    try {
      await todosService.createTodo();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  async editTodo() {
    try {
      await todosService.editTodo();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  async deleteTodo() {
    try {
      await todosService.deleteTodo();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
