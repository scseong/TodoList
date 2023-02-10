import React from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ToDos from '../components/ToDos';

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Sidebar location={location} />
      <ToDos />
    </>
  );
}
