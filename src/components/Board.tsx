import React from 'react';
import styles from './Board.module.css';
import ToDosList from './ToDosList';
import BoardNav from './BoardNav';
import { useLocation } from 'react-router-dom';

export default function Board() {
  let location = useLocation();

  return (
    <main className={styles.board}>
      <div className={styles.header}>
        <h2>투두스</h2>
      </div>
      <div className={styles.container}>
        <BoardNav category={location.pathname.substring(1)} />
        {/* <ToDosList toDos={toDos} /> */}
      </div>
    </main>
  );
}
