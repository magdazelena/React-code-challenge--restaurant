import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isEmailValid } from '../../helpers/validator';
function FindOrderBox() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  useEffect(() => {
    setEmailValid(isEmailValid(email));
  }, [email])
  return (<div className="find-order-box">
    <h2>Find your order</h2>
    <label>
      <p className="label">Enter valid email</p>
      <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </label>
    <Link
      disabled={!emailValid}
      className="button"
      to={{
        pathname: '/pick-dish',
        state: {
          email: email
        }
      }}>Find</Link>
  </div>)
}
export default FindOrderBox;