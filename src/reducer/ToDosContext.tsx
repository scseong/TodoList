import React, { Dispatch, useContext, createContext, useReducer } from 'react';
import { IToDo, IToDoState } from '../typing/db';
import { toDosReducer } from './toDosReducer';

type Action =
  | { type: 'ADD_TODO' }
  | { type: 'REMOVE_TODO' }
  | { type: 'UPDATE_TODO' };

type ToDosDispatch = Dispatch<Action>;

interface IChildren {
  children: React.ReactNode;
}

export const initialState = {
  inbox: [] as IToDo[],
};

export const initializer = (initialValue = {}) => {
  if (localStorage?.getItem('toDos') === null) return initialValue;
  return JSON.parse(localStorage?.getItem('toDos') || '');
};

export const ToDosStateContext = createContext<IToDoState | null>(null);
export const ToDosDispatchContext = createContext<ToDosDispatch | null>(null);

export const ToDosProvider = ({ children }: IChildren) => {
  const [toDos, dispatch] = useReducer(toDosReducer, initialState, initializer);

  return (
    <ToDosStateContext.Provider value={toDos}>
      <ToDosDispatchContext.Provider value={dispatch}>
        {children}
      </ToDosDispatchContext.Provider>
    </ToDosStateContext.Provider>
  );
};

export function useToDosState() {
  const toDos = useContext(ToDosStateContext);
  if (!toDos) throw new Error('Cannot find ToDosStateContext');
  return toDos;
}

export function useToDosDispatch() {
  const dispatch = useContext(ToDosDispatchContext);
  if (!dispatch) throw new Error('Cannot find ToDosDispatchContext');
  return dispatch;
}
