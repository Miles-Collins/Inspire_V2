import { todosService } from "../Services/TodosService.js";

export class TodosControler {
  constructor() {}

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
