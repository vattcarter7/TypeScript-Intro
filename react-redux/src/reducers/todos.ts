import { ActionTypes } from './../actions/types';
import { Todo, FetchTodosAction } from '../actions';

export const todoReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
