"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const Todo_1 = require("./Todo");
class TodoService {
    constructor() {
        this.localStorageKey = "TodoList";
    }
    createTodo(item) {
        var _a;
        const todo = new Todo_1.Todo(item);
        const list = JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : "[]");
        list.push(todo);
        localStorage.setItem(this.localStorageKey, JSON.stringify(list));
        console.log("todoList", list);
        return todo;
    }
    getAllTodos() {
        var _a;
        return JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : "[]");
    }
}
exports.TodoService = TodoService;
