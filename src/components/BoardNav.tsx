import React from 'react';
import { NavLink, Location } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import styles from './BoardNav.module.css';

interface IToDosStatus {
  all: number;
  active: number;
  completed: number;
}

export default function BoardNav({ category }: any) {
  const toDos = useToDosState();

  return (
    <div className={styles.nav}>
      <ul>
        {toDos[category || 'inbox'].map((toDo) => {
          return null;
          // return (
          //   <li key={toDo.id}>
          //     <NavLink to={`${category}/active`}>
          //       <span className={styles.count}>
          //         zz
          //         {/* {toDosLength[toDoKey as Status]} */}
          //       </span>
          //       {/* <span>{statusName[toDoKey]}</span> */}
          //     </NavLink>
          //   </li>
          // );
        })}
        {/* {Object.keys(toDosLength).map((toDoKey) => {
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
        })} */}
      </ul>
    </div>
  );
}
