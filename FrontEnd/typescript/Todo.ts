export class Todo {
  static localKey: number = 0;

  public todoItem: string = "";
  public todoKey = 0;

  constructor(todo: string) {
    this.todoKey = ++Todo.localKey;
    this.todoItem = todo;
  }
}
