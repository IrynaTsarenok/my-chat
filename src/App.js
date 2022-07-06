import './Styles.css';
import InfoPanel from './InfoPanel';
import Dialoge from './Dialoge';
import React, { useState } from 'react';

const INITIAL_USERS = [
  { _id: '1', name: 'Alison Gray' },
  { _id: '2', name: 'Max Derin' },
  { _id: '3', name: 'Mary Popins' },
];

function App() {
  const [person, setPerson] = useState({ name: 'Name', _id: 'id' });

  const handlePerson = (person) => {
    setPerson(person);
  };
  const [jokes, setJokes] = useState(['']);
  const jokesClick = () => {
    const urlChuckNoris = 'https://api.chucknorris.io/jokes/random';
    fetch(urlChuckNoris)
      .then((responce) => responce.json())
      .then((data) => {
        let newJokes = {
          person: person._id,
          userId: 1,
          message: data.value,
          date: new Date(),
        };
        setJokes([...jokes, newJokes]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="body">
      <InfoPanel
        handlePerson={handlePerson}
        initialUsers={INITIAL_USERS}
        jokesClick={jokesClick}
      />
      <Dialoge person={person} jokes={jokes} />
    </div>
  );
}

export default App;
