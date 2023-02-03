import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
