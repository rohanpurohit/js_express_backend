import { TodoComponent } from "./TodoComponent";
import { TodoLocalService } from "./TodoLocalService";
import { TodoRemoteService } from "./TodoRemoteService";

document.addEventListener("DOMContentLoaded", () => {
  const todoComponent = new TodoComponent(
    "app-root",
    new TodoRemoteService("http://localhost:10000/")
  );
});
