import React, { useEffect, useState } from 'react';
import { useToDosState } from '../reducer/ToDosContext';
import { IToDoState, DATE_FORMAT_OPTIONS, Status, IToDo } from '../typing/db';
import styles from './ToDoList.module.css';

interface IToDoListProps {
  category: string;
}

const ARR_KEY = {
  all: 'ALL',
  active: 'ACTIVE',
  completed: 'COMPLETED',
};

interface IToDoListProps {
  category: string;
  status: string;
}

export default function ToDoList({ category, status }: IToDoListProps) {
  const toDos = useToDosState();
  const [selectedIds, setSelectedIds] = useState(new Set());
  const handleOnChange = (id: string) => {
    const updateIdToSelected = new Set(selectedIds);
    if (updateIdToSelected.has(id)) {
      updateIdToSelected.delete(id);
    } else {
      updateIdToSelected.add(id);
    }
    setSelectedIds(updateIdToSelected);
  };
  const filterToDo = (toDos: IToDo[], status: string) => {
    switch (ARR_KEY[status as never]) {
      case 'ALL':
        return toDos;
      case 'ACTIVE':
        return toDos.filter((toDo) => toDo.done === false);
      case 'COMPLETED':
        return toDos.filter((toDo) => toDo.done === true);
      default:
        console.error('error');
    }
  };

  useEffect(() => {
    const newSelectedIds = new Set();
    const completedToDosIds = toDos[category]?.map((toDo) => {
      if (toDo.done === false) return;
      return toDo.id;
    });
    completedToDosIds?.map((id) => newSelectedIds.add(id));
    setSelectedIds(newSelectedIds);
  }, []);

  return (
    <div className={styles.wrapper}>
      {(status === 'all' || status === 'active') && (
        <ul className={styles.toDos}>
          {toDos[category]
            .filter((toDo) => toDo.done === false)
            .map((toDo) => (
              <li className={styles.toDoItem} key={toDo.id}>
                <input
                  type="checkbox"
                  id={toDo.id}
                  onChange={() => handleOnChange(toDo.id)}
                  checked={selectedIds.has(toDo.id)}
                  hidden
                />
                <label htmlFor={toDo.id}></label>
                <span>{toDo.description}</span>
                <span>
                  {new Date(toDo.createdBy).toLocaleDateString(
                    'ko-KR',
                    DATE_FORMAT_OPTIONS,
                  )}
                </span>
              </li>
            ))}
        </ul>
      )}
      {(status === 'all' || status === 'completed') && (
        <ul>
          {toDos[category]
            .filter((toDo) => toDo.done === true)
            .map((toDo) => (
              <li className={styles.toDoItem} key={toDo.id}>
                <input
                  type="checkbox"
                  id={toDo.id}
                  onChange={() => handleOnChange(toDo.id)}
                  checked={selectedIds.has(toDo.id)}
                  hidden
                />
                <label htmlFor={toDo.id}></label>
                <span>{toDo.description}</span>
                <span>
                  {new Date(toDo.createdBy).toLocaleDateString(
                    'ko-KR',
                    DATE_FORMAT_OPTIONS,
                  )}
                </span>
              </li>
            ))}
        </ul>
      )}

      {/* <div className={styles.toDos}>
              <h3>{toDo.}</h3>
              {toDos[toDoKey as Status].map((toDo) => (
                <li key={toDo.id} className={styles.toDoItem}>
                  <input
                    type="checkbox"
                    id={toDo.id}
                    onChange={() => handleOnChange(toDo.id)}
                    checked={selectedIds.has(toDo.id)}
                    hidden
                  />
                  <label htmlFor={toDo.id}></label>
                  <span>{toDo.description}</span>
                  <span>
                    {new Date(toDo.createdBy).toLocaleDateString(
                      'ko-KR',
                      DATE_FORMAT_OPTIONS,
                    )}
                  </span>
                </li>
              ))}
            </div> */}
    </div>
  );
}
