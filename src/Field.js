import { useState } from 'react';
import Sms from './Sms';

function Field({ person, sms, jokes }) {
  const filterdSms = sms.filter((s) => s.person === person._id);
  const filterdSms2 = jokes.filter((j) => j.person === person._id);
  // filterdSms2.map((j) => j.message);
  const filterdSms3 = filterdSms.concat(filterdSms2);

  return (
    <div className="field">
      {filterdSms3.map((s, i) => (
        <Sms key={i} text={s.message} id={s.userId} sms={sms} />
      ))}
    </div>
  );
}

export default Field;
