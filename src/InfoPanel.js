import React, { useState } from 'react';
import Chatinfo from './Chatinfo';

function Search({ users, setUsers, initialUsers }) {
  const [inputtext, setInput] = useState('');
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    let newUsers = undefined;
    if (newValue === '') {
      newUsers = initialUsers;
    } else {
      newUsers = filterUsers(users, newValue);
    }
    setUsers(newUsers);
  };
  return (
    <>
      <div className="search">
        <img src="" />
        <input type="text" onChange={handleInputChange} value={inputtext} />
      </div>
    </>
  );
}

const filterUsers = (users, inputText) => {
  // console.log(inputText);
  return users.filter((u) =>
    u.name.toLowerCase().includes(inputText.toLowerCase())
  );
};

function InfoPanel({ handlePerson, initialUsers, jokesClick }) {
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className="infopanel">
      <Search users={users} setUsers={setUsers} initialUsers={initialUsers} />
      <Chatinfo
        users={users}
        handlePerson={handlePerson}
        jokesClick={jokesClick}
      />
    </div>
  );
}

export default InfoPanel;
