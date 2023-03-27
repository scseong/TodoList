import React from 'react';
import Sidebar from '../components/Sidebar';
import Board from '../components/Board';
import { useToDosState } from '../reducer/ToDosContext';
import { useLocation } from 'react-router';

const filters = ['전체', '진행중', '완료'];

export default function Home() {
  const pathname = useLocation().pathname;
  const toDos = useToDosState();
  const toDosKeys = Object.keys(toDos);
  const toDosInfo = Object.assign([
    ...toDosKeys.map((key) => ({
      name: key,
      path: `/${key === toDosKeys[0] ? '' : key}`,
      length: toDos[key].length,
    })),
  ]);

  return (
    <>
      <Sidebar toDosInfo={toDosInfo} pathname={pathname} />
      <Board />
    </>
  );
}
