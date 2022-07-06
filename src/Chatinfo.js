function Person({ userData, handlePerson, jokesClick }) {
  // console.log(userData);
  // console.log(userData.name);

  return (
    <a
      onClick={() => {
        jokesClick();
        handlePerson(userData);
      }}
    >
      <div className="chatdiv">
        <div>
          <img src="" />
        </div>
        <div>
          <h3 className="personNameSearch">{userData.name}</h3>
          <h4>text</h4>
        </div>
        <div>
          <h4 className="data">data</h4>
        </div>
      </div>
    </a>
  );
}

function Chatinfo({ users, handlePerson, jokesClick }) {
  return (
    <div className="chatinfo">
      <h1>Chat</h1>
      {users.map((u) => (
        <Person
          key={u._id}
          userData={u}
          handlePerson={handlePerson}
          jokesClick={jokesClick}
        />
      ))}
    </div>
  );
}

export default Chatinfo;
