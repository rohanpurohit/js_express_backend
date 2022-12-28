import { Todo } from "./Todo";

export interface ITodoInterface {
  createTodo(todoItem: string): Promise<Todo>;
  deleteTodo(todoKey: number): Promise<Todo | boolean>;
  updateTodo(todoKey: number, todoItem: string): Promise<boolean>;
  getTodo(todoKey: number): Promise<Todo | undefined>;
  getAllTodos(): Promise<Todo[]>;
}
