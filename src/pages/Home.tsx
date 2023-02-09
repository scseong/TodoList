import React from 'react';
import Sidebar from '../components/Sidebar';
import ToDos from '../components/ToDos';
import { useToDosState } from '../reducer/ToDosContext';

const data = {
  active: [
    {
      id: 1,
      description: 'Sidebar component implementation',
      createdBy: Date.now(),
    },
    { id: 3, description: 'Show todos', createdBy: Date.now() },
    { id: 4, description: 'Styling', createdBy: Date.now() },
  ],
  completed: [
    { id: 0, description: 'Create react app', createdBy: Date.now() },
    { id: 2, description: 'Routing', createdBy: Date.now() },
  ],
};

export default function Home() {
  const data = useToDosState();

  return (
    <>
      <Sidebar />
      <ToDos />
    </>
  );
}
