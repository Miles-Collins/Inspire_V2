import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { Pop } from "../Utils/Pop.js";
import { api } from "./AxiosService.js";

class TodosService {
  async getTodos() {
    let res = await api.get("/savannah/TODOS");
    console.log("getting todos", res.data);
    appState.todos = res.data.map((todo) => new Todo(todo));
    console.log("todos in the appState", appState.todos);
  }
  async createTodo(todoData) {
    let res = await api.post("/savannah/TODOS", todoData);
    console.log("New created Todo", res.data);
    appState.todos = [...appState.todos, new Todo(res.data)];
    console.log("New todo in the appState", appState.todos);
  }
  async editTodo(id) {
    let todo = appState.todos.find((t) => t.id == id);

    todo.completed = !todo.completed;
    let todoIndex = appState.todos.indexOf(todo);
    // debugger;
    let res = await api.put(`/savannah/TODOS/${id}`, todo);

    let updatedTodo = new Todo(res.data);
    console.log("updated todo", updatedTodo);

    appState.todos.splice(todoIndex, 1, updatedTodo);
    appState.emit("todos");
    // appState.todos = appState.todos;
  }
  async deleteTodo(id) {
    let res = await api.delete(`/savannah/TODOS/${id}`);
    appState.todos = appState.todos.filter((t) => t.id != id);
  }
}

export const todosService = new TodosService();
