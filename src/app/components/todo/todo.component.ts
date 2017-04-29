import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
