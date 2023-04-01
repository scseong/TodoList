import React, { useEffect, useState } from 'react';
import { useToDosDispatch, useToDosState } from '../reducer/ToDosContext';
import { IToDoState } from '../typing/db';
import ToDo from './ToDo';
import styles from './ToDoList.module.css';

interface IToDoListProps {
  category: string;
  filter: string;
}

function getFilteredItems(todos: IToDoState, filter: string, category: string) {
  if (filter === 'all') return todos[category].sort((a, b) => b.id - a.id);
  else if (filter === 'active')
    return todos[category].filter((todo) => todo.done === false);
  else return todos[category].filter((todo) => todo.done === true);
}

export default function ToDoList({ category, filter }: IToDoListProps) {
  const toDos = useToDosState();
  const dispatch = useToDosDispatch();
  const [selectedIds, setSelectedIds] = useState(new Set<number>());
  const filtered = getFilteredItems(toDos, filter, category);

  const handleToggle = (id: number) => {
    const updateIdToSelected = new Set(selectedIds);
    if (updateIdToSelected.has(id)) {
      updateIdToSelected.delete(id);
    } else {
      updateIdToSelected.add(id);
    }
    dispatch({ type: 'TOGGLE_TODO', id: Number(id), category });
    setSelectedIds(updateIdToSelected);
  };
  const handleEdit = (id: number) => {
    const text = window.prompt('변경할 문구를 입력해주세요.');
    if (!text) return;
    dispatch({ type: 'UPDATE_TODO', id, text, category });
  };
  const handleDelete = (id: number) => {
    if (window.confirm('삭제하시겠습니까?')) {
      dispatch({ type: 'REMOVE_TODO', id, category });
    }
  };

  useEffect(() => {
    const newSelectedIds = new Set<number>();
    const completedToDosIds = toDos[category]?.filter(
      (toDo) => toDo.done === true,
    );
    completedToDosIds.map((toDo) => newSelectedIds.add(toDo.id));
    setSelectedIds(newSelectedIds);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.toDos}>
        {filtered.map((toDo) => (
          <ToDo
            key={toDo.id}
            selectedIds={selectedIds}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
            toDo={toDo}
          />
        ))}
      </ul>
    </div>
  );
}
