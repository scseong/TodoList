export type Status = 'active' | 'completed';
export type Categories = '';
export type Tags = '';

/* ToDos */
export interface IToDo {
  id: number;
  createdBy: number;
  description: string;
  category?: Categories;
  tags?: Tags;
  done: boolean;
}

export type IToDoState = {
  [key in string]: IToDo[];
};

export interface IToDoLengthState {
  [key: string]: number;
}

//
export type IStatus = {
  [key in Status]: string;
};

// Mapping
export const MAPPING_URL = {
  전체: '/all',
  진행중: '/active',
  완료: '/completed',
};

export const MAPPING_NAME = {
  all: '전체',
  active: '진행중',
  completed: '완료',
};

// Date
export interface DateTimeFormatOptions {
  weekday?: 'long' | 'short' | 'narrow' | undefined;
  year?: 'numeric' | '2-digit' | undefined;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
}

export const DATE_FORMAT_OPTIONS: DateTimeFormatOptions = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  weekday: 'narrow',
};

// Context
export const Action = {
  ADD: 'ADD_TODO',
  REMOVE: 'REMOVE_TODO',
  UPDATE: 'UPDATE_TODO',
};
