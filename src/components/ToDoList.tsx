import React, { useEffect, useState } from 'react';
import { IToDoState, DATE_FORMAT_OPTIONS, Status } from '../typing/db';
import styles from './Board.module.css';

// interface Prop {
//   toDos: IToDoState;
// }

export default function ToDoList({ toDos }: any) {
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

  // useEffect(() => {
  //   const newSelectedIds = new Set();
  //   const completedToDosIds = toDos.completed.map((toDo) => toDo.id);
  //   completedToDosIds?.map((id) => newSelectedIds.add(id));
  //   setSelectedIds(newSelectedIds);
  // }, []);

  return (
    <div className={styles['toDos-wrapper']}>
      <ul>
        {Object.keys(toDos).map((toDoKey, index) => (
          <React.Fragment key={index}>
            <div className={styles['toDos-wrapper__heading']}>
              <h3 key={index}>{toDoKey}</h3>
            </div>
            <div className={styles['toDos-wrapper__lists']}>
              {/* {toDos[toDoKey as Status].map((toDo) => (
                <li key={toDo.id} className={styles['toDos-wrapper__list']}>
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
              ))} */}
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
