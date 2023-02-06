import React, { memo } from 'react';
import styles from './Sidebar.module.css';
import { RiTodoLine } from 'react-icons/ri';
import { IToDoLengthState } from '../typing/db';
import SidebarItem from './SidebarItem';

interface IProps {
  data: IToDoLengthState;
}

function Sidebar({ data }: IProps) {
  let all_length = 0;
  Object.keys(data).forEach((category) => (all_length += data[category]));
  data = { All: all_length, ...data };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <RiTodoLine size="1.3em" />
        <h1>ToDoList</h1>
      </div>
      <div className={styles.sidebar__nav}>
        <ul>
          {Object.keys(data).map((key) => (
            <SidebarItem category={key} length={data[key]} key={key} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
