import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import DatePickerBox from '../components/action/DatePickerBox';
import { getMonthName, getWeekday, getFullMinutes, getMaxVisitHour } from '../helpers/dateFormats';
import { saveOrder } from '../services/local';
function Order(props) {

  const [date, setDate] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [email, setEmail] = useState(props.location.data ? props.location.data.email : '');

  if (props.location.data === undefined) {
    return <Redirect to="/pick-dish" />
  }
  const confirmOrder = () => {
    let data = {
      date: date,
      numOfPeople: numOfPeople,
      email: email,
      dish: props.location.data.dish,
      drinks: props.location.data.drinks
    }
    saveOrder(data, email);
  }
  return (<div className="order grid-0">
    <h1 className="col col-desk-12">Complete your order</h1>
    <div className="col col-desk-12 grid-0 order-details">
      <div className="col col-desk-8">
        <DatePickerBox onSelect={setDate} />
      </div>
      <div className="col col-desk-4">
        <label>
          <p className="label">Select number of people</p>
          <input type="number" min="1" max="10" value={numOfPeople} onChange={e => setNumOfPeople(e.target.value)} />
        </label>
      </div>
    </div>
    <div className="col col-desk-8">
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
      {props.location.data.dish && (
        <p>You are ordering tasty {props.location.data.dish.strMeal} </p>)
      }
      {props.location.data.drinks && (
        <div><p> You will be drinking:</p>
          <ol>
            {props.location.data.drinks.map((item, key) => {
              return <li key={key}>{item}</li>
            })}
          </ol>
        </div>
      )}
      <label>
        <p className="label">Enter email</p>
        <input name="email" type="email" value={email ? email : ''} onChange={e => setEmail(e.target.value)} />
      </label>
      <button className="button" onClick={confirmOrder} disabled={!email}>Order</button>
    </div>
  </div>)
}
export default Order;