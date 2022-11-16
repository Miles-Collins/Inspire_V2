export class Todo {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.completed = false;
  }

  get TodoTemplate() {
    return `
    <div class="d-flex">
      <input type="checkbox" id="${this.id}">
      <div>${this.description}</div>
    </div>
    `;
  }
}
