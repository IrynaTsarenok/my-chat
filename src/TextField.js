import React, { useEffect, useState } from 'react';
import Field from './Field';
import EntryField from './EntryField';

function TextField({ person, jokes }) {
  const [sms, setSms] = useState([
    { person: '2', userId: 1, message: 'hello, Ira)', date: new Date() },
    {
      person: '2',
      userId: 2,
      message: 'hello, Max. how are you?',
      date: new Date(),
    },
    { person: '2', userId: 1, message: 'i`m fine, you?', date: new Date() },
    { person: '1', userId: 1, message: 'hello, Ira)', date: new Date() },
    {
      person: '1',
      userId: 2,
      message: 'hello, Alison. how are you?',
      date: new Date(),
    },
    { person: '1', userId: 1, message: 'i`m fine, you?', date: new Date() },
    { person: '3', userId: 1, message: 'hello, Ira)', date: new Date() },
    {
      person: '3',
      userId: 2,
      message: 'hello, Mary) how are you?',
      date: new Date(),
    },
    { person: '3', userId: 1, message: 'i`m fine, you?', date: new Date() },
  ]);

  const [inputSms, setInputSms] = useState('');
  const mySmsChange = (inputSms) => {
    const newSms = inputSms.target.value;
    setInputSms(newSms);
  };
  const mySmsClick = () => {
    let newSms = {
      person: person._id,
      userId: 2,
      message: inputSms,
      date: new Date(),
    };

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
        setSms([...sms, newSms, newJokes]);
      })
      .catch((error) => console.log(error));

    localStorage.setItem('messages', JSON.stringify(sms));
  };
  useEffect(() => {
    let restore = JSON.parse(localStorage.getItem('messages'));
    if (restore) {
      setSms(restore);
    }
  }, []);

  return (
    <div className="textfield">
      <Field person={person} sms={sms} jokes={jokes} />
      <EntryField
        mySmsChange={mySmsChange}
        inputSms={inputSms}
        mySmsClick={mySmsClick}
      />
    </div>
  );
}

export default TextField;
