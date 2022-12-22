"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
const TodoService_1 = require("./TodoService");
class TodoComponent {
    constructor(selector) {
        this.todoList = [];
        this.todoService = new TodoService_1.TodoService();
        const div = document.createElement("div");
        div.innerText = "Hello";
        const root = document.querySelector(selector);
        const template = `<div>
    <input id="todo-input" type="text" placeholder="Enter your text here" />
    <button id="add-button">Add Button</button>
  </div>
  
  <ul id="items-list"></ul>`;
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
        const itemsList = document.querySelector("#items-list");
        const addButton = document.querySelector("#add-button");
        const input = document.querySelector("#todo-input");
        // this.todoList = JSON.parse(window.localStorage.getItem("todoList") ?? "[]");
        this.todoList = this.todoService.getAllTodos();
        this.todoList.forEach((item) => {
            const listItem = `<li>${item.todoItem}</li>`;
            itemsList.insertAdjacentHTML("beforeend", listItem);
        });
        const addTodo = () => {
            const todo = this.todoService.createTodo(input === null || input === void 0 ? void 0 : input.value);
            this.todoList.push(todo);
            const item = `<li>${input === null || input === void 0 ? void 0 : input.value}</li>`;
            input.value = "";
            itemsList === null || itemsList === void 0 ? void 0 : itemsList.insertAdjacentHTML("beforeend", item);
        };
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", addTodo);
    }
}
exports.TodoComponent = TodoComponent;
