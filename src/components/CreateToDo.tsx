import React, { useState } from 'react';
import { useToDosDispatch, useToDosState } from '../reducer/ToDosContext';

export default function CreateToDo() {
  const toDos = useToDosState();
  const toDoCategory = Object.keys(toDos);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('inbox');

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
  };

  //React.ChangeEvent<HTMLInputElement>
  const onChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;
      case 'task':
        setTask(value);
        break;
      default:
        console.error('error');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="task"
        value={task}
        onChange={onChange}
        type="text"
        placeholder="Add a Task"
      />

      <select name="category" id="" value={category} onChange={onChange}>
        {toDoCategory.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button>Click</button>
    </form>
  );
}
