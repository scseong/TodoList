import React from 'react';
import { Location } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import styles from './ToDos.module.css';
import ToDosList from './ToDosList';
import ToDosNav from './ToDosNav';

interface IToDosProp {
  location?: Location;
}

export default function ToDos({ location }: IToDosProp) {
  const toDos = useToDosState();

  const toDosLength = {
    all: toDos.진행중.length + toDos.완료.length,
    active: toDos.진행중.length,
    completed: toDos.완료.length,
  };

  return (
    <main className={styles['toDos']}>
      <div className={styles['toDos-heading']}>
        <h2>투두스</h2>
      </div>
      <div className={styles['toDos-container']}>
        <ToDosNav toDosLength={toDosLength} location={location} />
        <ToDosList toDos={toDos} />
      </div>
    </main>
  );
}
