import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FindOrderBox from '../components/action/FindOrderBox';
function ErrorMail(props) {
  if (!props.location.email) {
    return <Redirect to="/" />
  }
  return (<div className="col col-desk-12 ErrorMail">

    <h1>Something went wrong...</h1>
    <div className="grid-0 ">
      <div className="col col-desk-7">
        <h2>We do not have the email: <span className="strong">{props.location.email}</span></h2>
        <Link
          className="button"
          to={{
            pathname: '/'
          }}>Back to home page</Link>
      </div>
      <div className="col col-desk-7">
        <p>Or try again: </p>
        <FindOrderBox />
      </div>
    </div>


  </div >)
}
export default ErrorMail;