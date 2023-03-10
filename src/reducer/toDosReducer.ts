import React from 'react';
import { IToDoState } from './../typing/db';

export const toDosReducer = (state: IToDoState, action: any) => {
  const { type, id, category, payload } = action;

  switch (type) {
    case 'ADD_TODO':
      const newToDo = { ...state, [category]: [...state[category], payload] };
      return newToDo;
    case 'REMOVE_TODO':
      const toDoCopy = [...state[category]];
      const toDoObj = toDoCopy.filter((toDo) => toDo.id !== id);
      return {
        ...state,
        [category]: [...toDoObj],
      };
    case 'UPDATE_TODO':
      const oldToDo = state[category].filter((toDo) => toDo.id !== id);
      const targetToDo = state[category].filter((toDo) => toDo.id === id)[0];
      return {
        ...state,
        [category]: [...oldToDo, { ...targetToDo, done: !targetToDo.done }],
      };
    default:
      throw new Error(`No case for type ${type} found.`);
  }
};
