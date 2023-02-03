import React from 'react';
import Sidebar from './components/Sidebar';

const data = {
  Active: [
    { id: 0, content: 'hi' },
    { id: 1, content: 'hello' },
  ],
  Completed: [{ id: 2, content: 'hehe' }],
};

function App() {
  return (
    <>
      <Sidebar data={data} />
    </>
  );
}

export default App;
