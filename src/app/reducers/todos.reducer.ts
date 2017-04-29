import { Action } from '@ngrx/store';
import { omit } from 'lodash';

import * as todo from '../actions/todo.actions';
import { Todo } from "../models/todo.model";

export interface State {
  ids: number[];
  entities: { [id: number]: Todo };
}

export const initialState: State = {
  ids: [1, 2, 3],
  entities: {
    1: { title: "Test 1" },
    2: { title: "Test 2" },
    3: { title: "Test 3" },
  },
}

export function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    /*case ADD_ITEM:
    case UPDATE_ITEM:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          desc: action.payload.desc,
          dclass: action.payload.dclass,
          params: action.payload.params,
          price: action.payload.price
        }
      };
    case PRICE_ITEM:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          price: action.payload.price
        }
      };
    case REMOVE_ITEM:
      return omit(state, action.payload.id);
    case REMOVE_GROUP:
      return omit(state, action.payload.items);*/
    default:
      return state;
  }
}
