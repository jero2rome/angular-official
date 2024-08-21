import { Component } from "@angular/core";

@Component({
  standalone : true,
  selector: "todo-list-item",
  templateUrl: "todo-list-item.component.html",
  styleUrls: ["todo-list-item.component.scss"]
})
export class TodoListItem {
  todo = {
    title: "Todo 1",
    completed: false
  };
}