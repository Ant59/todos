import { Action } from '@ngrx/store';

// Get the model
import { Todo } from '../models/todo.model';

// All actions relevant to todos for use in reducers and dispatches
export const ADD_TODO =     'Add Todo';
export const REMOVE_TODO =  'Remove Todo';
export const EDIT_TODO =    'Edit Todo';

// Add todo to state
export class AddTodoAction implements Action {
  // Readonly is a typescript modifier for properties that prevents mutation
  readonly type = ADD_TODO;

  constructor(public payload: Todo) { }
}

// Remove todo from state
export class RemoveTodoAction implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: Todo) { }
}

// Edit single todo
export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: Todo) { }
}

// This union makes it easier for reducers to use only certain action types
export type Actions
  = AddTodoAction
  | RemoveTodoAction
  | EditTodoAction;
