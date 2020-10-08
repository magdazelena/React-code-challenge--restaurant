import React from 'react';
import { Link } from 'react-router-dom';
function NextStepBox(props) {

  return (<div className="col col-desk-4 next-box">
    <p>{props.name}</p>
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