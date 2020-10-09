import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function FindOrderBox() {
  const [email, setEmail] = useState('');
  return (<div className="find-order-box">
    <h2>Find your order</h2>
    <label>
      <p className="label">Enter email</p>
      <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </label>
    <Link
      disabled={email === ''}
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