import React from 'react';
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import { DATE_FORMAT_OPTIONS, IToDo } from '../typing/db';
import styles from './ToDo.module.css';

interface IToDoProps {
  toDo: IToDo;
  selectedIds: Set<number>;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ToDo({
  toDo,
  selectedIds,
  onToggle,
  onEdit,
  onDelete,
}: IToDoProps) {
  const { id, description, createdBy } = toDo;
  const handleChange = () => onToggle(id);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'edit':
        onEdit(id);
        break;
      case 'delete':
        onDelete(id);
        break;
      default:
        console.error('invalid button');
    }
  };

  return (
    <li className={styles.toDoItem} key={id}>
      <input
        type="checkbox"
        id={id + ''}
        onChange={handleChange}
        checked={selectedIds.has(id)}
        hidden
      />
      <label htmlFor={id + ''}></label>
      <span>{description}</span>
      <span>
        {new Date(createdBy).toLocaleDateString('ko-KR', DATE_FORMAT_OPTIONS)}
      </span>
      <div className={styles.btnBox}>
        <button name="edit" onClick={handleClick}>
          <BsPencilSquare />
        </button>
        <button name="delete" onClick={handleClick}>
          <BsTrashFill />
        </button>
      </div>
    </li>
  );
}
