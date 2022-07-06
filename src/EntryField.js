import React, { useState } from 'react';
function EntryField({ mySmsClick, mySmsChange, inputSms }) {
  return (
    <div className="entryfieldd">
      <div className="entryfield">
        <input
          className="inputsms"
          type="text"
          value={inputSms}
          onChange={mySmsChange}
        />
        <button onClick={mySmsClick}>
          <img src="" />
        </button>
      </div>
    </div>
  );
}

export default EntryField;
