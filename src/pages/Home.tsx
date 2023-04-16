import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Board from '../components/Board';
import { useToDosState } from '../reducer/ToDosContext';
import { useLocation } from 'react-router';
import { DarkModeProvider } from '../reducer/DarkModeContext';
import { IInfo } from '../typing/db';

const filters = ['all', 'active', 'completed'];

export default function Home() {
  const toDos = useToDosState();
  const [toDosKeys, setToDosKeys] = useState(Object.keys(toDos));
  const [toDosInfo, setToDosInfo] = useState<IInfo[]>([]);
  const pathname = useLocation().pathname;

  const [category = toDosKeys[0], filter = 'all'] = [
    pathname.split('/')[1] === '' ? toDosKeys[0] : pathname.split('/')[1],
    pathname.split('/')[2] ?? pathname.split('/')[2],
  ];

  useEffect(() => {
    const info = [
      ...toDosKeys.map((key) => ({
        name: key,
        path: `/${key === toDosKeys[0] ? '' : key}`,
        length: toDos[key].length,
      })),
    ];
    const keys = Object.keys(toDos);
    setToDosKeys(keys);
    setToDosInfo(info);
  }, [toDos]);

  return (
    <DarkModeProvider>
      <Sidebar toDosInfo={toDosInfo} category={category} />
      <Board category={category} filter={filter} filters={filters} />
    </DarkModeProvider>
  );
}
