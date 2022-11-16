import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { api } from "./AxiosService.js";

class TodosService {
  async getTodos() {
    let res = await api.get("/savannah/TODOS");
    console.log("getting todos", res.data);
    appState.todos = res.data.map((todo) => new Todo(todo));
    console.log("todos in the appState", appState.todos);
  }
  async createTodo() {
    let res = await api.post("/savannah/TODOS");
  }
  async editTodo() {
    let res = await api.put("/savannah/TODOS");
  }
  async deleteTodo() {
    let res = await api.delete("/savannah/TODOS");
  }
}

export const todosService = new TodosService();
