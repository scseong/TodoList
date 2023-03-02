import React from 'react';
import styles from './Board.module.css';
import ToDoList from './ToDoList';
import BoardNav from './BoardNav';
import { useLocation } from 'react-router-dom';
import CreateToDo from './CreateToDo';

export default function Board() {
  const [, category = 'inbox', status = 'all'] = useLocation()
    .pathname.split('/')
    .map((str) => (str === '' ? 'inbox' : str));

  return (
    <main className={styles.board}>
      <div className={styles.header}>
        <h2>{category.toLocaleUpperCase() || 'INBOX'}</h2>
      </div>
      <div className={styles.container}>
        <BoardNav category={category} />
        <ToDoList category={category} status={status} />
        <CreateToDo />
      </div>
    </main>
  );
}
