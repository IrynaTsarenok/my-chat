import Persons from './Persons';
import TextField from './TextField';

function Dialoge({ person, jokes }) {
  return (
    <div className="dialoge">
      <Persons person={person} />
      <TextField person={person} jokes={jokes} />
    </div>
  );
}

export default Dialoge;
