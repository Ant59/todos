import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers/app.reducer';
import * as fromTodos from '../../reducers/todos.reducer';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todos$: Observable<fromTodos.State>;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.todos$ = this.store.select<fromTodos.State>('todos');
  }

}
