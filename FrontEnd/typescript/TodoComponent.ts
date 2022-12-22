import { Todo } from "./Todo";
import { TodoService } from "./TodoService";
export class TodoComponent {
  private todoList: Todo[] = [];

  private todoService = new TodoService();

  constructor(selector: string) {
    const div = document.createElement("div");
    div.innerText = "Hello";
    const root = document.querySelector(selector);

    const template = `<div>
    <input id="todo-input" type="text" placeholder="Enter your text here" />
    <button id="add-button">Add Todo</button>
  </div>
  
  <ul id="items-list"></ul>`;

    root?.insertAdjacentHTML("beforeend", template);
    const itemsList = document.querySelector("#items-list") as HTMLUListElement;

    const addButton = document.querySelector(
      "#add-button"
    ) as HTMLButtonElement;
    const input = document.querySelector("#todo-input") as HTMLInputElement;

    // this.todoList = JSON.parse(window.localStorage.getItem("todoList") ?? "[]");

    this.todoList = this.todoService.getAllTodos();
    this.todoList.forEach((item) => {
      const listItem = `<li id="todo-${item.todoKey}">${item.todoItem} <button>X</button></li>`;
      itemsList.insertAdjacentHTML("beforeend", listItem);
      const liButton = document.querySelector(`#todo-${item.todoKey} > button`);
      liButton?.addEventListener("click", () => {
        this.todoService.deleteTodo(item.todoKey);
      });
    });

    const addTodo = () => {
      const todo = this.todoService.createTodo(input?.value);
      this.todoList.push(todo);

      const item = `<li id="todo-${todo.todoKey}">${input?.value} <button>X</button></li>`;
      input.value = "";
      itemsList?.insertAdjacentHTML("beforeend", item);

      const liButton = document.querySelector(`#todo-${todo.todoKey} > button`);
      liButton?.addEventListener("click", () => {
        this.todoService.deleteTodo(todo.todoKey);
      });
    };

    addButton?.addEventListener("click", addTodo);
  }
}
