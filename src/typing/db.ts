import { Location } from 'react-router-dom';

export type Status = '진행중' | '완료';
export type Categories = '';
export type Tags = '';

/* ToDos */
export interface IToDo {
  id: string;
  createdBy: string;
  description: string;
  category?: Categories;
  tags?: Tags;
}

export type IToDoState = {
  [key in Status]: IToDo[];
};

export interface IToDoLengthState {
  [key: string]: number;
}

/* Sidebar */
export interface ISidebarProps {
  location: Location;
}

export type IStatus = {
  [key in Status]: string;
};

export const mockData = {
  진행중: [
    {
      id: 1,
      description: '사이드바 컴포넌트 구현',
      createdBy: Date.now(),
    },
    { id: 3, description: '투두 목록 출력하기', createdBy: Date.now() },
    { id: 4, description: '스타일링', createdBy: Date.now() },
  ],
  완료: [
    { id: 0, description: '리액트 프로젝트 생성', createdBy: Date.now() },
    { id: 2, description: '라우팅 설정', createdBy: Date.now() },
  ],
};

// Date
export interface DateTimeFormatOptions {
  weekday?: 'long' | 'short' | 'narrow' | undefined;
  year?: 'numeric' | '2-digit' | undefined;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
}
