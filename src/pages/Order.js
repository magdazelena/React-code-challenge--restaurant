import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePickerBox from '../components/action/DatePickerBox';
import { getMonthName, getWeekday, getFullMinutes, getMaxVisitHour } from '../helpers/dateFormats';
function Order() {
  const [date, setDate] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [email, setEmail] = useState('');
  return (<div className="order grid-0">
    <h2 className="col col-desk-12">Final details</h2>
    <div className="col col-desk-6">
      <label>
        Select number of people
        <input type="number" min="1" max="10" value={numOfPeople} onChange={e => setNumOfPeople(e.target.value)} />
      </label>
      <DatePickerBox onSelect={setDate} />

    </div>
    <div className="col col-desk-6">
      <h2>Check details and confirm</h2>
      {date && (
        <div>
          <p>You are booking a visit on</p>
          <p className="order-date">
            {getWeekday(date.getDay())}, {getMonthName(date.getMonth())} {date.getDate()}, {date.getFullYear()}
          </p>
          <p className="order-hours">
            You reserve time from {date.getHours()}:{getFullMinutes(date.getMinutes())} till {getMaxVisitHour(date.getHours(), date.getMinutes())}
          </p>
          <p className="order-people">
            You need a table for {numOfPeople} {numOfPeople > 1 ? 'people' : 'person'}.
          </p>
        </div>
      )}
      <label> Enter email
      <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <Link
        className="button"
        to={{
          pathname: '/confirmation',
          state: {
            email: email
          }
        }}>Order</Link>
    </div>
  </div>)
}
export default Order;