import React from 'react';
import { NavLink, Location } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import { MAPPING_URL } from '../typing/db';
import styles from './BoardNav.module.css';

interface IBoardNavProps {
  category: string;
}

export default function BoardNav({ category }: IBoardNavProps) {
  const toDos = useToDosState();
  const toDosCount = toDos[category].length;
  const activeCount = toDos[category].filter(
    (toDo) => toDo.done === true,
  ).length;
  const completedCount = toDosCount - activeCount;

  let firstKey;
  for (firstKey in toDos) break;

  return (
    <div className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <NavLink
            to={`${category}`}
            className={({ isActive }) =>
              isActive ? styles.navItemActive : undefined
            }
            end
          >
            <span>전체</span>
            <span className={styles.count}>{toDosCount}</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={`${category || firstKey}${MAPPING_URL.active}`}
            className={({ isActive }) =>
              isActive ? styles.navItemActive : undefined
            }
          >
            <span>진행중</span>
            <span className={styles.count}>{activeCount}</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={`${category || firstKey}${MAPPING_URL.completed}`}
            className={({ isActive }) =>
              isActive ? styles.navItemActive : undefined
            }
          >
            <span>완료</span>
            <span className={styles.count}>{completedCount}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
