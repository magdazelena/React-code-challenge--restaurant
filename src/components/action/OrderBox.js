import React from 'react';
import { Link } from 'react-router-dom';
function OrderBox() {
  return (<div class="col col-desk-4 order-box">
    <p>Ready to eat something good?</p>
    <Link
      className="button"
      to={{
        pathname: '/pick-dish',
        state: {
          new: true
        }
      }}>Order</Link>
  </div>)
}
export default OrderBox;