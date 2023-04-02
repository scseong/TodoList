import React from 'react';
import Sidebar from '../components/Sidebar';
import Board from '../components/Board';
import { useToDosState } from '../reducer/ToDosContext';
import { useLocation } from 'react-router';
import { DarkModeContext, DarkModeProvider } from '../reducer/DarkModeContext';

const filters = ['all', 'active', 'completed'];

export default function Home() {
  const toDos = useToDosState();
  const toDosKeys = Object.keys(toDos);
  const toDosInfo = Object.assign([
    ...toDosKeys.map((key) => ({
      name: key,
      path: `/${key === toDosKeys[0] ? '' : key}`,
      length: toDos[key].length,
    })),
  ]);
  const pathname = useLocation().pathname;

  const [category = toDosKeys[0], filter = 'all'] = [
    pathname.split('/')[1] === '' ? toDosKeys[0] : pathname.split('/')[1],
    pathname.split('/')[2] ?? pathname.split('/')[2],
  ];

  return (
    <DarkModeProvider>
      <Sidebar toDosInfo={toDosInfo} category={category} />
      <Board category={category} filter={filter} filters={filters} />
    </DarkModeProvider>
  );
}
