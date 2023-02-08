import React from 'react';
import { useLocation } from 'react-router-dom';
import { IToDo } from '../typing/db';
import { capitalizeFirstLetter } from '../utils/String';
import styles from './ToDos.module.css';

interface IToDosProps {
  toDos?: IToDo[];
}

export default function ToDos({ toDos }: IToDosProps) {
  const location = useLocation();
  const status =
    location.pathname === '/' ? 'all' : location.pathname.substring(1);

  return (
    <main className={styles.toDos}>
      <h2 className={styles.toDos__title}>{capitalizeFirstLetter(status)}</h2>
      <div className={styles.toDos__contents}>
        <ul>
          {status === 'all'
            ? toDos?.map((toDo) => {
                console.log(toDo.description);
                return <li key={toDo.id}>{toDo.description}</li>;
              })
            : toDos
                ?.filter((toDo) => toDo.status === status)
                .map((toDo) => {
                  console.log(toDo.description);
                  return <li key={toDo.id}>{toDo.description}</li>;
                })}
        </ul>
      </div>
    </main>
  );
}
