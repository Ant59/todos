import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../environments/environment';

import * as fromTodos from "./todos.reducer";

export interface State {
  router: fromRouter.RouterState;
  todos: fromTodos.State;
  // TODO: Add auth state
};

const reducers = {
  router: fromRouter.routerReducer,
  todos: fromTodos.reducer
};

const developmentReducer = compose(
  // Prevent mutation
  storeFreeze,
  // Sync to localstorage for persistance
  localStorageSync(['todos'], true),
  combineReducers
)(reducers);

const productionReducer = compose(
  localStorageSync(['todos'], true),
  combineReducers
)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}
