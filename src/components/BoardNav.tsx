import React, { useEffect, useState } from 'react';
import { NavLink, Location } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import { MAPPING_URL } from '../typing/db';
import styles from './BoardNav.module.css';

interface IBoardNavProps {
  category: string;
}

const ARR_KEY = {
  all: 0,
  active: 1,
  completed: 2,
};

export default function BoardNav({ category = 'inbox' }: IBoardNavProps) {
  const toDos = useToDosState();
  const [lengthArr, setLengthArr] = useState<number[]>([]);

  useEffect(() => {
    if (!toDos) return;
    const toDosCount = toDos[category].length;
    const activeCount = toDos[category]?.filter(
      (toDo) => toDo.done === false,
    ).length;
    const completedCount = toDosCount - activeCount || 0;
    setLengthArr([toDosCount, activeCount, completedCount]);
  }, [toDos, category]);

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
            <span className={styles.count}>{lengthArr[ARR_KEY.all]}</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={`${category}${MAPPING_URL.active}`}
            className={({ isActive }) =>
              isActive ? styles.navItemActive : undefined
            }
          >
            <span>진행중</span>
            <span className={styles.count}>{lengthArr[ARR_KEY.active]}</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={`${category}${MAPPING_URL.completed}`}
            className={({ isActive }) =>
              isActive ? styles.navItemActive : undefined
            }
          >
            <span>완료</span>
            <span className={styles.count}>{lengthArr[ARR_KEY.completed]}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
