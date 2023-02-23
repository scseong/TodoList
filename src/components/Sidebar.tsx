import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { MdTaskAlt } from 'react-icons/md';
import { RiTaskLine } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface ISidebarProps {
  lengthToDos: [key: string];
}

export default function Sidebar({ lengthToDos }: ISidebarProps) {
  const location = useLocation();
  const [isDark, setISDark] = useState(false);
  const toggleMode = () => {
    setISDark((prev) => !prev);
  };

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
        <div className={styles.theme}>
          <input
            type="checkbox"
            id="toggle"
            hidden
            checked={isDark}
            onChange={toggleMode}
          />
          <label htmlFor="toggle">
            <span />
          </label>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navIndex}>
            <span>LISTS</span>
          </li>
          {Object.keys(lengthToDos).map((category, index) => (
            <li key={category} className={styles.navItem}>
              <NavLink
                to={index === 0 ? '/inbox' : `/${category}`}
                className={({ isActive }) => {
                  if (location.pathname === '/' && index === 0)
                    return styles.navItemActive;
                  return isActive ? styles.navItemActive : undefined;
                }}
              >
                <div>
                  <i>
                    <RiTaskLine />
                  </i>
                  <span>{category.toLocaleUpperCase()}</span>
                  <span>{lengthToDos[category as never]}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
