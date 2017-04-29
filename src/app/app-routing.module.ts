import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TodoListComponent } from './containers/todo-list/todo-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: TodoListComponent },
      //{ path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
