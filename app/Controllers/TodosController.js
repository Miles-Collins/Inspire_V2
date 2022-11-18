import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
  let template = "";
  appState.todos.forEach((t) => (template += t.TodoTemplate));
  setHTML("todos", template);
}

export class TodosController {
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
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      let form = window.event.target;
      let todoData = getFormData(form);
      await todosService.createTodo(todoData);
      Pop.toast("Created A New Todo!", "success");
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  async editTodo(id) {
    try {
      await todosService.editTodo(id);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  async deleteTodo(id) {
    try {
      let yes = await Pop.confirm("are you sure you want to delete this todo?");
      if (!yes) {
        return;
      }
      await todosService.deleteTodo(id);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
