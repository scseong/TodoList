import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import { IToDoLengthState, IToDoState } from '../typing/db';

const data = {
  Active: [
    { id: 0, content: 'hi' },
    { id: 1, content: 'hello' },
  ],
  Completed: [{ id: 2, content: 'hehe' }],
};

type IDataKeys = 'Active' | 'Completed';

export default function Home() {
  const [sideObj, setSideObj] = useState({} as IToDoLengthState);

  useEffect(() => {
    const obj = {} as IToDoLengthState;
    const dataKeys = Object.keys(data);
    dataKeys.map((key) => {
      obj[key] = data[key as IDataKeys].length;
    });
    setSideObj(obj);
  }, []);

  return (
    <>
      <Sidebar data={sideObj} />
      <Outlet />
    </>
  );
}
