import React, { useState } from 'react';
import { useToDosDispatch } from '../reducer/ToDosContext';
import styles from './CreateToDo.module.css';
import { BsListTask } from 'react-icons/bs';

interface ICreateToDoProps {
  category: string;
}

export default function CreateToDo({ category }: ICreateToDoProps) {
  const [task, setTask] = useState('');

  const dispatch = useToDosDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Date.now();
    const description = task;
    const done = false;
    const createdBy = Date.now();

    dispatch({
      type: 'ADD_TODO',
      category,
      payload: { id, description, done, createdBy },
    });

    setTask('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask(value);
  };

  return (
    <form className={styles.todoForm} onSubmit={onSubmit}>
      <div className={styles.todoBox}>
        <BsListTask />
        <input
          name="task"
          value={task}
          onChange={onChange}
          type="text"
          placeholder="할 일 추가"
          required
        />
      </div>
    </form>
  );
}
