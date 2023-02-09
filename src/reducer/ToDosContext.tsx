import React, { Dispatch, useContext } from 'react';
import { createContext, useReducer } from 'react';
import { IToDo, IToDoState } from '../typing/db';
import { initialState, toDosReducer } from './toDosReducer';

type Action =
  | { type: 'ADD_TODO' }
  | { type: 'REMOVE_TODO' }
  | { type: 'UPDATE_TODO' };

type ToDosDispatch = Dispatch<Action>;

interface T1 {
  toDos: IToDoState;
}
interface T2 {
  dispatch: ToDosDispatch;
}

type ContextProp = {
  toDos: IToDoState;
  dispatch: ToDosDispatch;
};

interface IProviderProp {
  children: React.ReactNode;
}

export const initializer = (initialValue = {}) =>
  JSON.parse(localStorage?.getItem('toDos') || '') || initialValue;

export const ToDosContext = createContext<ContextProp | null>(null);

export const ToDosProvider = ({ children }: IProviderProp) => {
  const [toDos, dispatch] = useReducer(toDosReducer, initialState, initializer);

  // const addToDo = () => dispatch({ type: 'ADD_TODO' });
  // const removeToDo = () => dispatch({ type: 'REMOVE_TODO' });
  // const updateToDo = () => dispatch({ type: 'UPDATE_TODO' });

  return (
    <ToDosContext.Provider value={{ toDos, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export function useToDosState() {
  const toDos = useContext(ToDosContext);
  return toDos;
}
