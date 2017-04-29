import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor() {
    // Create a bunch of fake todos
    this.todos = [
      {
        title: "Test 1",
      },
      {
        title: "Test 2",
      },
      {
        title: "Test 3",
      },
    ];
  }

  ngOnInit() {
  }

}
