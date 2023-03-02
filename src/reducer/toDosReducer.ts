import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { IToDoState } from './../typing/db';

export const toDosReducer = (state: IToDoState, action: any) => {
  const { type, category, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      const obj = { ...state, [category]: [...state[category], payload] };
      return obj;
    case 'REMOVE_TODO':
      return state;
    case 'UPDATE_TODO':
      return state;
    default:
      throw new Error(`No case for type ${type} found.`);
  }
};
