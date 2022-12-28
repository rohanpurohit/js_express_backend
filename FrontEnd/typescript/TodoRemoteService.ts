import axios from "axios";
import { ITodoInterface } from "./ITodoInterface";
import { Todo } from "./Todo";

export class TodoRemoteService implements ITodoInterface {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async createTodo(todoItem: string): Promise<Todo> {
    const res = await axios.post(
      this.url + "todo",
      JSON.stringify({
        item: todoItem,
      })
    );
    const todo = await res.data;
    return todo;
  }

  async deleteTodo(todoKey: number): Promise<boolean | Todo> {
    const res: boolean | Todo = await axios.delete(
      this.url + "todo" + "/" + todoKey
    );
    return res;
  }

  async updateTodo(todoKey: number, todoItem: string): Promise<boolean> {
    const res: boolean = await axios.patch(
      this.url + "todo" + "/" + todoKey,
      JSON.stringify({ item: todoItem })
    );
    return res;
  }

  async getTodo(todoKey: number): Promise<Todo | undefined> {
    const todo: Todo = await axios.get(this.url + "todo" + "/" + todoKey);
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const list = await axios.get(this.url);
    const res: Todo[] = list.data;
    return res;
  }
}
