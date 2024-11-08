import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import AddUserIcon from './icons/AddUserIcon';
import './App.css';
export const App = () => {
  const [fromState, setFromState] = useState(false);

  return (
    <div>
      <h1>Users Data</h1>
      <button type="submit" className="addUserButton" onClick={() => setFromState(true)}>
        <AddUserIcon />
      </button>
      {fromState && <AddUser setFromState={setFromState} />}
      <UserList />

    </div>
  )
}
