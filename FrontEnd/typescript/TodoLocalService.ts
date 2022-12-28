import { ITodoInterface } from "./ITodoInterface";
import { Todo } from "./Todo";

export class TodoLocalService implements ITodoInterface {
  private localStorageKey: string = "TodoList";

  async createTodo(item: string): Promise<Todo> {
    const todo = new Todo(item);
    const list: Todo[] = JSON.parse(
      localStorage.getItem(this.localStorageKey) ?? "[]"
    );
    list.push(todo);
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    console.log("todoList", list);
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    return JSON.parse(localStorage.getItem(this.localStorageKey) ?? "[]");
  }

  async updateTodo(todoKey: number, todoItem: string): Promise<boolean> {
    const list = await this.getAllTodos();
    list.forEach((todo) => {
      if (todo.todoKey === todoKey) todo.todoItem = todoItem;
    });
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    return true;
  }
  async getTodo(todoKey: number): Promise<Todo | undefined> {
    const list = await this.getAllTodos();
    return list.find((todo) => todo.todoKey === todoKey);
  }

  async deleteTodo(todoKey: number): Promise<boolean | Todo> {
    const list = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
    const index = list.findIndex((item: Todo) => item.todoKey === todoKey);
    if (index !== -1) list.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    console.log("TodoService.todokey", list);
    return true;
  }
}
