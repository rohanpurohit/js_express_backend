import { ITodoInterface } from "./ITodoInterface";
import { Todo } from "./Todo";
export class TodoComponent {
  private todoList: Todo[] = [];

  private todoService: ITodoInterface;
  private itemsList: HTMLUListElement;
  private input: HTMLInputElement;
  constructor(selector: string, service: ITodoInterface) {
    this.todoService = service;

    const div = document.createElement("div");
    div.innerText = "Hello";
    const root = document.querySelector(selector);

    const template = `<div>
    <input id="todo-input" type="text" placeholder="Enter your text here" />
    <button id="add-button">Add Todo</button>
  </div>
  
  <ul id="items-list"></ul>`;

    root?.insertAdjacentHTML("beforeend", template);
    this.itemsList = document.querySelector("#items-list") as HTMLUListElement;

    const addButton = document.querySelector(
      "#add-button"
    ) as HTMLButtonElement;
    this.input = document.querySelector("#todo-input") as HTMLInputElement;

    // this.todoList = JSON.parse(window.localStorage.getItem("todoList") ?? "[]");

    this.fetchAndAddTodo();

    addButton?.addEventListener("click", this.addTodo);
  }
  async fetchAndAddTodo() {
    this.todoList = await this.todoService.getAllTodos();
    this.todoList.forEach((item) => {
      const listItem = `<li id="todo-${item.todoKey}">${item.todoItem} <button>X</button></li> <button id="edit">edit</button>`;
      this.itemsList.insertAdjacentHTML("beforeend", listItem);
      const liButton = document.querySelector(`#todo-${item.todoKey} > button`);
      const editButton = document.querySelector(
        `#todo-${item.todoKey} > #edit`
      );
      editButton?.addEventListener("click", () => {
        this.todoService.updateTodo(item.todoKey, "updated");
        location.reload();
      });
      liButton?.addEventListener("click", () => {
        this.todoService.deleteTodo(item.todoKey);
        location.reload();
      });
    });
    // location.reload();
  }
  addTodo = async () => {
    const todo = await this.todoService.createTodo(this.input?.value);
    this.todoList.push(todo);
    const item = `<li id="todo-${todo.todoKey}">${this.input?.value} <button>X</button> <button id="edit">edit</button></li> `;
    this.input.value = "";
    this.itemsList?.insertAdjacentHTML("beforeend", item);

    const liButton = document.querySelector(`#todo-${todo.todoKey} > button`);
    const editButton = document.querySelector(`#todo-${todo.todoKey} > #edit`);

    editButton?.addEventListener("click", () => {
      this.todoService.updateTodo(todo.todoKey, "updated");
      location.reload();
    });
    liButton?.addEventListener("click", () => {
      this.todoService.deleteTodo(todo.todoKey);
      location.reload();
    });
  };
}
