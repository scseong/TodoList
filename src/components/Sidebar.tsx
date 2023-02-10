import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { MdTaskAlt } from 'react-icons/md';
import { RiTaskLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import { ISidebarProps, IStatus, Status } from '../typing/db';

const status: IStatus = { 진행중: '/', 완료: '/completed' };

export default function Sidebar({ location }: ISidebarProps) {
  const path = location.pathname;
  const toDos = useToDosState();
  const toDosKeys = Object.keys(toDos);
  const [checked, setIsChecked] = useState(false);
  const toggleMode = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar-header']}>
        <div
          className={`${styles['sidebar-header__logo']} ${styles['drag-prevent']}`}
        >
          <Link to="/">
            <i>
              <MdTaskAlt />
            </i>
            <h1>투두리스트</h1>
          </Link>
        </div>
        <div className={styles['theme-toggle']}>
          <input
            type="checkbox"
            id="toggle"
            hidden
            checked={checked}
            onChange={toggleMode}
          />
          <label htmlFor="toggle">
            <span />
          </label>
        </div>
      </div>
      <div className={styles['sidebar-menu']}>
        <ul className={styles['sidebar-menu__list']}>
          {toDosKeys?.map((toDoKey) => {
            const matchLocation = path === status[toDoKey as Status];
            return (
              <li
                key={toDoKey}
                className={
                  matchLocation
                    ? styles['sidebar-menu__item-active']
                    : styles['sidebar-menu__item']
                }
              >
                <Link to={status[toDoKey as Status]}>
                  <i>
                    <RiTaskLine />
                  </i>
                  <span>{toDoKey}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
