import React from 'react';
import styles from './Board.module.css';
import ToDoList from './ToDoList';
import BoardNav from './BoardNav';
import CreateToDo from './CreateToDo';

interface IBoardProps {
  filters: string[];
  filter: string;
  category: string;
}

export default function Board({ filters, filter, category }: IBoardProps) {
  return (
    <main className={styles.board}>
      <div className={styles.header}>
        <h2>{category.toLocaleUpperCase()}</h2>
      </div>
      <div className={styles.container}>
        <BoardNav category={category} filters={filters} filter={filter} />
        <CreateToDo category={category} />
        <ToDoList category={category} filter={filter} />
      </div>
    </main>
  );
}
