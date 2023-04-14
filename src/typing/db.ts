/* ToDos */
export interface IToDo {
  id: number;
  createdBy: number;
  description: string;
  done: boolean;
  tags?: string[];
}

export type IToDoState = {
  [key in string]: IToDo[];
};

// Mapping
export const MAPPING_NAME = {
  all: '전체',
  active: '진행중',
  completed: '완료',
};

export const MAPPING_URL = {
  전체: '/all',
  진행중: '/active',
  완료: '/completed',
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
export const ACTION = {
  ADD: 'ADD_TODO',
  REMOVE: 'REMOVE_TODO',
  TOGGLE: 'TOGGLE_TODO',
  UPDATE: 'UPDATE_TODO',
};

export interface IChildren {
  children: React.ReactNode;
}

// components props
export interface IBoardProps {
  filters: string[];
  filter: string;
  category: string;
}

export interface ICreateToDoProps {
  category: string;
}

export interface IInfo {
  name: string;
  path: string;
  length: number;
}

export interface ISidebarProps {
  toDosInfo: IInfo[];
  category: string;
}

export interface IToDoProps {
  toDo: IToDo;
  selectedIds: Set<number>;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface IToDoListProps {
  category: string;
  filter: string;
}
