import React, { useEffect, useState } from 'react';
import { useToDosDispatch, useToDosState } from '../reducer/ToDosContext';
import { DATE_FORMAT_OPTIONS } from '../typing/db';
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs';
import styles from './ToDoList.module.css';

import { RiTaskLine } from 'react-icons/ri';
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
  const dispatch = useToDosDispatch();
  const [selectedIds, setSelectedIds] = useState(new Set());
  const handleOnChange = (id: string) => {
    const updateIdToSelected = new Set(selectedIds);
    if (updateIdToSelected.has(id)) {
      updateIdToSelected.delete(id);
      dispatch({ type: 'TOGGLE_TODO', id: Number(id), category });
    } else {
      updateIdToSelected.add(id);
      dispatch({ type: 'TOGGLE_TODO', id: Number(id), category });
    }
    setSelectedIds(updateIdToSelected);
  };
  const handleEdit = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: number,
  ) => {
    const text = window.prompt('변경할 문구를 입력해주세요.');
    if (!text) return;
    dispatch({ type: 'UPDATE_TODO', id, text, category });
  };
  const handleDelete = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: number,
  ) => {
    if (window.confirm('삭제하시겠습니까?')) {
      dispatch({ type: 'REMOVE_TODO', id, category });
    }
  };

  useEffect(() => {
    const newSelectedIds = new Set();
    const completedToDosIds = toDos[category]?.map((toDo) => {
      if (toDo.done === true) return toDo.id + '';
    });
    completedToDosIds.filter((e) => e)?.map((id) => newSelectedIds.add(id));
    setSelectedIds(newSelectedIds);
  }, [category]);

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
                  id={toDo.id + ''}
                  onChange={() => handleOnChange(toDo.id + '')}
                  checked={selectedIds.has(toDo.id + '')}
                  hidden
                />
                <label htmlFor={toDo.id + ''}></label>
                <span>{toDo.description}</span>
                <span>
                  {new Date(toDo.createdBy).toLocaleDateString(
                    'ko-KR',
                    DATE_FORMAT_OPTIONS,
                  )}
                </span>
                <div className={styles.btnBox}>
                  <BsPencilSquare onClick={(e) => handleEdit(e, toDo.id)} />
                  <BsTrashFill onClick={(e) => handleDelete(e, toDo.id)} />
                </div>
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
                  id={toDo.id + ''}
                  onChange={() => handleOnChange(toDo.id + '')}
                  checked={selectedIds.has(toDo.id + '')}
                  hidden
                />
                <label htmlFor={toDo.id + ''}></label>
                <span>{toDo.description}</span>
                <span>
                  {new Date(toDo.createdBy).toLocaleDateString(
                    'ko-KR',
                    DATE_FORMAT_OPTIONS,
                  )}
                </span>
                <div className={styles.btnBox}>
                  <BsPencilSquare onClick={(e) => handleEdit(e, toDo.id)} />
                  <BsTrashFill onClick={(e) => handleDelete(e, toDo.id)} />
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
