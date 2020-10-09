import React from 'react';
import { Link } from 'react-router-dom';

function NextStepBox(props) {

  return (<div className="col col-desk-4 col-tab-12 next-box">

    {props.data.existingOrder && (<div>
      <p className="strong">Hello, {props.data.email}</p>
      <p>You are currently <span className="strong">editing your order</span></p>
    </div>)}

    <p className="next-text"><span className="label">Next: </span>{props.name}</p>
    <p className="label">{props.label}</p>

    <Link
      className="button"
      disabled={props.disabled}
      to={{
        pathname: props.pathname,
        data: props.data
      }}>Next</Link>
  </div>)
}
export default NextStepBox;