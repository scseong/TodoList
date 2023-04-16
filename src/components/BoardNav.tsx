import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import { IBoardProps, MAPPING_NAME } from '../typing/db';
import styles from './BoardNav.module.css';

export default function BoardNav({ category, filters, filter }: IBoardProps) {
  const toDos = useToDosState();
  const [lengthArr, setLengthArr] = useState<number[]>([]);

  useEffect(() => {
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
        {filters.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink
              to={`${category}/${item}`}
              className={({ isActive }) => {
                if (filter === 'all' && item === 'all')
                  return styles.navItemActive;
                return isActive ? styles.navItemActive : undefined;
              }}
            >
              <span>{MAPPING_NAME[item as never]}</span>
              <span className={styles.count}>{lengthArr[index]}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
