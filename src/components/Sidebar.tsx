import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { MdTaskAlt } from 'react-icons/md';
import { RiTaskLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Sidebar() {
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
          <i>
            <MdTaskAlt />
          </i>
          <h1>투두리스트</h1>
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
          <li className={styles['sidebar-menu__item-active']}>
            <Link to="/">
              <i>
                <RiTaskLine />
              </i>
              <span>진행중</span>
            </Link>
          </li>
          <li className={styles['sidebar-menu__item']}>
            <Link to="/">
              <i>
                <RiTaskLine />
              </i>
              <span>완료</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
