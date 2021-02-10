import React, { useState, createContext } from 'react';

import Header from './Header';
import Todos from './Todos';

export const UserContext = createContext();

function App() {
  const [username, setUsername] = useState('Enrique');

  function printDate() {
    console.log(new Date());
  }

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        printDate,
      }}
    >
      <Header />
      <Todos />
    </UserContext.Provider>
  );
}

export default App;
