import React, { useState } from 'react';
import A from './A';
import './App.css';

function App() {
  const [isAMounted, setIsAMounted] = useState<boolean>(true);
  
  return (
    <div className="App">
      {isAMounted && <A />}
      <button onClick={() => setIsAMounted(false)}>unmount A</button>
    </div>
  );
}

export default App;
