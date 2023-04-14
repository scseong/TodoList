import React from 'react';
import styles from './Sidebar.module.css';
import { MdTaskAlt } from 'react-icons/md';
import { RiTaskLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { ISidebarProps } from '../typing/db';

export default function Sidebar({ toDosInfo, category }: ISidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={`${styles.logo} ${styles['drag-prevent']}`}>
          <Link to="/">
            <i>
              <MdTaskAlt />
            </i>
            <h1>투두리스트</h1>
          </Link>
        </div>
        <ToggleTheme />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navIndex}>
            <span>LISTS</span>
          </li>
          <>
            {Object.keys(toDosInfo).map((todo, index) => (
              <li key={index} className={styles.navItem}>
                <NavLink
                  to={toDosInfo[todo as never].path}
                  className={({ isActive }) => {
                    if (toDosInfo[todo as never].name === category)
                      return styles.navItemActive;
                    return isActive ? styles.navItemActive : undefined;
                  }}
                >
                  <div>
                    <i>
                      <RiTaskLine />
                    </i>
                    <span>
                      {toDosInfo[todo as never].name.toLocaleUpperCase()}
                    </span>
                    <span>{toDosInfo[todo as never].length}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </>
        </ul>
      </nav>
    </aside>
  );
}
