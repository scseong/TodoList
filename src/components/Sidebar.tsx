import React from 'react';
import styles from './Sidebar.module.css';
import { RiTodoLine } from 'react-icons/ri';
import { ISidebarProps } from '../typing/db';

export default function Sidebar({ data }: ISidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <RiTodoLine size="1.3em" />
        <h1>ToDoList</h1>
      </div>
      <div className={styles.sidebar__nav}>
        <ul>
          {Object.keys(data).map((category, index) => (
            <li key={index}>
              {category}
              <span className={styles.badge}>{data[category].length}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
