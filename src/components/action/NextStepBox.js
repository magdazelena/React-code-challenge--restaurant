import React from 'react';
import { Link } from 'react-router-dom';
function NextStepBox(props) {
  return (<div className="col col-desk-4 order-box">
    <p>Anything to drink?</p>
    <Link
      className="button"
      disabled={props.disabled}
      to={{
        pathname: props.pathname
      }}>Next</Link>
  </div>)
}
export default NextStepBox;