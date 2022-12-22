import { Todo } from "./Todo";

export class TodoService {
  private localStorageKey: string = "TodoList";

  createTodo(item: string): Todo {
    const todo = new Todo(item);
    const list: Todo[] = JSON.parse(
      localStorage.getItem(this.localStorageKey) ?? "[]"
    );
    list.push(todo);
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    console.log("todoList", list);
    return todo;
  }

  getAllTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) ?? "[]");
  }

  deleteTodo(todoKey: number) {
    const list = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
    const index = list.findIndex((item: Todo) => item.todoKey === todoKey);
    if (index !== -1) list.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    console.log("TodoService.todokey", list);
  }
}
