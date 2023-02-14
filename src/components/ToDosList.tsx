import React, { useEffect, useState } from 'react';
import { DateTimeFormatOptions, IToDoState, Status } from '../typing/db';
import styles from './ToDos.module.css';

interface Prop {
  toDos: IToDoState;
}

const options: DateTimeFormatOptions = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  weekday: 'narrow',
};

export default function ToDosList({ toDos }: Prop) {
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

  useEffect(() => {
    const newSelectedIds = new Set();
    const completedToDosIds = toDos.완료.map((toDo) => toDo.id);
    completedToDosIds?.map((id) => newSelectedIds.add(id));
    setSelectedIds(newSelectedIds);
  }, []);

  return (
    <div className={styles['toDos-wrapper']}>
      <ul>
        {Object.keys(toDos).map((toDoKey, index) => (
          <React.Fragment key={index}>
            <div className={styles['toDos-wrapper__heading']}>
              <h3 key={index}>{toDoKey}</h3>
            </div>
            <div className={styles['toDos-wrapper__lists']}>
              {toDos[toDoKey as Status].map((toDo) => (
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
                      options,
                    )}
                  </span>
                </li>
              ))}
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
