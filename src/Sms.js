function Sms({ text, id, sms }) {
  let smsMe = sms.filter((i) => i.userId === 2);

  if (id === 2) {
    text = text + '(' + smsMe.length + ')';
  }

  let className = 'Sms';
  if (id === 2) {
    className = 'mySms';
  }

  return (
    <div>
      {/* {' '} */}
      <h3 className={className}>{text}</h3>
      <h3></h3>
    </div>
  );
}
export default Sms;
