import React from 'react';
import styles from './Board.module.css';
import ToDoList from './ToDoList';
import BoardNav from './BoardNav';
import { useLocation } from 'react-router-dom';

export default function Board() {
  let location = useLocation();

  return (
    <main className={styles.board}>
      <div className={styles.header}>
        <h2>
          {location.pathname.split('/')[1].toLocaleUpperCase() || 'INBOX'}
        </h2>
      </div>
      <div className={styles.container}>
        <BoardNav category={location.pathname.split('/')[1]} />
        {/* <ToDoList toDos={toDos} /> */}
      </div>
    </main>
  );
}
