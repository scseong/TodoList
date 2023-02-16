import React from 'react';
import Sidebar from '../components/Sidebar';
import Board from '../components/Board';
import { useToDosState } from '../reducer/ToDosContext';

export default function Home() {
  const toDos = useToDosState();
  const toDosKeys = Object.keys(toDos);
  const lengthToDos = Object.assign(
    {},
    ...toDosKeys.map((key) => ({ [key]: toDos[key].length })),
  );

  return (
    <>
      <Sidebar lengthToDos={lengthToDos} />
      <Board />
    </>
  );
}
