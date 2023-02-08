import React from 'react';
import styles from './Sidebar.module.css';
import { RiTodoLine } from 'react-icons/ri';
import { IToDoLengthState } from '../typing/db';
import SidebarItem from './SidebarItem';

interface ISidebarProps {
  toDoLengthObj: IToDoLengthState;
}

export default function Sidebar({ toDoLengthObj }: ISidebarProps) {
  console.log('Sidebar');
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <RiTodoLine size="1.3em" />
        <h1>ToDoList</h1>
      </div>
      <div className={styles.sidebar__nav}>
        <ul>
          {Object.keys(toDoLengthObj).map((key) => (
            <SidebarItem status={key} length={toDoLengthObj[key]} key={key} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
