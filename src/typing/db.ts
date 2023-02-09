export type Status = 'active' | 'completed';
export type Categories = '';
export type Tags = '';

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
