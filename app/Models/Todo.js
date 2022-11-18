export class Todo {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.completed = data.completed || false;
  }

  get TodoTemplate() {
    return `
    <div class="d-flex">
      <input type="checkbox" ${
        this.completed ? "checked" : ""
      } onclick="app.todosController.editTodo('${this.id}')">
      <div>${this.description}</div>
      <button class="btn btn-danger" onclick="app.todosController.deleteTodo('${
        this.id
      }')">Delete</button>
    </div>
    `;
  }
}
