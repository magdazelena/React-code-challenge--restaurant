import React from 'react';
import { Link } from 'react-router-dom';
function OrderBox() {
  return (<div className="col col-desk-4 order-box">
    <h2>Create new order</h2>
    <p>Ready to eat something good?</p>
    <Link
      className="button"
      to={{
        pathname: '/pick-dish'
      }}>Order</Link>
  </div>)
}
export default OrderBox;