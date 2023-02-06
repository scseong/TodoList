type Status = 'Active' | 'Completed';
type Categories = '';
type Tags = '';

export interface IToDo {
  id: number;
  category?: Categories;
  status?: Status;
  time?: number;
  content: string;
  tag?: Tags;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export interface IToDoLengthState {
  [key: string]: number;
}

// Sidebar
export interface ISidebarProps {
  data: IToDoState;
}
