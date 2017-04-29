import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
