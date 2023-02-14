import React from 'react';
import { IToDo, IToDoState } from './../typing/db';

export const initialState = {
  진행중: [] as IToDo[],
  완료: [] as IToDo[],
};

export const toDosReducer = (state: IToDoState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return state;
    case 'REMOVE_TODO':
      return state;
    case 'UPDATE_TODO':
      return state;
    default:
      throw new Error(`No case for type ${type} found.`);
  }
};
