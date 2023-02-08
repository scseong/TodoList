import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ToDos from '../components/ToDos';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { IToDo, IToDoLengthState } from '../typing/db';

const data = [
  {
    id: 0,
    description: 'Create react app',
    status: 'completed',
    createdBy: Date.now(),
  },
  {
    id: 1,
    description: 'Sidebar component implementation',
    status: 'active',
    createdBy: Date.now(),
  },
  { id: 2, description: 'Routing', status: 'completed', createdBy: Date.now() },
  { id: 3, description: 'Show todos', status: 'active', createdBy: Date.now() },
  { id: 4, description: 'Styling', status: 'active', createdBy: Date.now() },
];

export default function Home() {
  const [toDos, setToDos] = useLocalStorage('toDos', [{}] as IToDo[]);
  const [toDosLengthObj, setToDosLengthObj] = useState({} as IToDoLengthState);

  useEffect(() => {
    const toDosLength = toDos.length;
    const activeLength = toDos.filter(
      (toDo) => toDo.status === 'active',
    ).length;
    const completedLength = toDosLength - activeLength;
    setToDosLengthObj({
      all: toDosLength,
      active: activeLength,
      completed: completedLength,
    });
  }, [toDos]);

  return (
    <>
      <Sidebar toDoLengthObj={toDosLengthObj} />
      <ToDos toDos={toDos} />
    </>
  );
}
