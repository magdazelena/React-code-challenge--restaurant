import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function FindOrderBox() {
  const [email, setEmail] = useState('');
  return (<div class="col col-desk-6 find-order-box">
    <h2>Find your order</h2>
    <label for="email">Enter email</label>
    <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
    <Link
      className="button"
      to={{
        pathname: '/pick-dish',
        state: {
          new: false,
          email: email
        }
      }}>Find</Link>
  </div>)
}
export default FindOrderBox;