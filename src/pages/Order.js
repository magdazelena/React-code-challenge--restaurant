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
      {props.location.data.dish && (
        <p>You are ordering tasty {props.location.data.dish.strMeal} </p>)
      }
      {props.location.data.drinks && (
        <p> You will be drinking:
          {props.location.data.drinks.map((item, key) => {
            return <span key={key}>{item}</span>
          })}
        </p>
      )}
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
      <input name="email" type="email" value={email ? email : ''} onChange={e => setEmail(e.target.value)} />
      </label>
      <button className="button" onClick={confirmOrder}>Order</button>
    </div>
  </div>)
}
export default Order;