import React, {
  Dispatch,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { IChildren, IToDo, IToDoState } from '../typing/db';
import { toDosReducer } from './toDosReducer';

type Action =
  | { type: 'ADD_TODO'; payload: IToDo; category: string }
  | { type: 'REMOVE_TODO'; id?: number; category?: string }
  | { type: 'TOGGLE_TODO'; id?: number; category?: string }
  | {
      type: 'UPDATE_TODO';
      text: string | null;
      id?: number;
      category?: string;
    };

type ToDosDispatch = Dispatch<Action>;

export const initialState = {
  inbox: [] as IToDo[],
  personal: [] as IToDo[],
};

export const initializer = (initialValue = {}) => {
  if (localStorage?.getItem('toDos') === null) return initialValue;
  return JSON.parse(localStorage?.getItem('toDos') || '');
};

export const ToDosStateContext = createContext<IToDoState | null>(null);
export const ToDosDispatchContext = createContext<ToDosDispatch | null>(null);

export const ToDosProvider = ({ children }: IChildren) => {
  const [toDos, dispatch] = useReducer(toDosReducer, initialState, initializer);
  const [, setValue] = useLocalStorage('toDos', {});

  useEffect(() => {
    setValue(toDos);
  }, [toDos]);

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
