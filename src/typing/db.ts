import { Location } from 'react-router-dom';

export type Status = 'active' | 'completed';
export type Categories = '';
export type Tags = '';

/* ToDos */
export interface IToDo {
  id: string;
  createdBy: string;
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

export const mockData = {
  inbox: [
    {
      id: Date.now() + 1,
      description: '사이드바 컴포넌트 구현',
      done: true,
    },
    {
      id: Date.now() + 2,
      description: '투두 목록 출력하기',
      done: false,
    },
    { id: Date.now() + 3, description: '스타일링', done: false },
    { id: Date.now() + 4, description: '리액트 프로젝트 생성', done: true },
    { id: Date.now() + 5, description: '라우팅 설정', done: false },
  ],
  personal: [
    {
      id: Date.now() + 6,
      description: '저녁 식사',
      done: true,
    },
  ],
};

// Mapping
export const MAPPING_URL = {
  all: '/',
  active: '/active',
  completed: '/completed',
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
