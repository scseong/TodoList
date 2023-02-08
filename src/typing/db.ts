export type Status = 'active' | 'completed';
export type Categories = '';
export type Tags = '';

export interface IToDo {
  id: string;
  createdBy: string;
  description: string;
  status: Status;
  category?: Categories;
  tags?: Tags;
}

export interface IToDoLengthState {
  [key: string]: number;
}
