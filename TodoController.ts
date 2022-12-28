import express, { Express, Router } from "express";
import bodyParser from "body-parser";

class Todo {
  private todoKey: number;
  private todoItem: string;

  constructor(key: number, item: string) {
    this.todoKey = key;
    this.todoItem = item;
  }

  getTodoKey = () => this.todoKey;
  getTodoItem = () => this.todoItem;
  setTodoItem = (item: string) => (this.todoItem = item);
}
class TodoRouter {
  private port: number = 10000;
  private router: Express;
  private todoList: Todo[] = [];
  private lastKey: number = 0;
  constructor() {
    this.router = express();
    this.addRoutes();
    // this.router.use(bodyParser.json());
    this.router.listen(this.port, () => console.log("port listening at 10000"));
  }

  private addRoutes(): void {
    this.router.get("/", (req, res) => res.send(this.todoList));

    this.router.get("/todo/:todoKey", (req, res) => {
      const key = +req.params.todoKey;
      const todo = this.todoList.find((todo) => todo.getTodoKey() === key);
      if (todo) res.send(todo);
    });

    this.router.delete("/todo/:todoKey", (req, res) => {
      const key = +req.params.todoKey;
      const todoFound = this.todoList.find((todo) => todo.getTodoKey() === key);
      if (!todoFound) res.send(false);
      this.todoList = this.todoList.filter((todo) => todo.getTodoKey() !== key);
      res.send(true);
    });

    this.router.patch(
      "/todo/:todoKey",
      express.json({ type: "*/*" }),
      (req, res) => {
        const body = req.body;
        const key = +req.params.todoKey;
        this.todoList = this.todoList.map((todo) => {
          if (todo.getTodoKey() === key) {
            todo.setTodoItem(body.item);
          }
          return todo;
        });

        res.send(true);
      }
    );

    this.router.post("/todo", express.json({ type: "*/*" }), (req, res) => {
      const body = req.body;
      this.lastKey = this.lastKey + 1;
      const newTodo = new Todo(this.lastKey, body.item);
      this.todoList.push(newTodo);
      res.send(newTodo);
    });
  }
}

const todo = new TodoRouter();
