import React from 'react';
import { Link, Location } from 'react-router-dom';
import styles from './ToDos.module.css';

interface IToDosStatus {
  all: number;
  active: number;
  completed: number;
}

interface IToDosLengthProp {
  toDosLength: IToDosStatus;
  location?: Location;
}

type Status = 'all' | 'active' | 'completed';

const statusUrl = { all: '/', active: '/active', completed: '/completed' };
const statusName = { all: '전체', active: '진행중', completed: '완료' };

export default function ToDosNav({ toDosLength, location }: IToDosLengthProp) {
  return (
    <div className={styles['toDos-nav']}>
      <ul>
        {Object.keys(toDosLength).map((toDoKey) => {
          const matchUrl = location?.pathname === statusUrl[toDoKey as Status];
          return (
            <li
              className={
                matchUrl
                  ? styles['toDos-nav__item--active']
                  : styles['toDos-nav__item']
              }
              key={toDoKey}
            >
              <Link to={statusUrl[toDoKey as Status]}>
                <span className={styles['toDos-nav__count']}>
                  {toDosLength[toDoKey as Status]}
                </span>
                <span>{statusName[toDoKey as Status]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
