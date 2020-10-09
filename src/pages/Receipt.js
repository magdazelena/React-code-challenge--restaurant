import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getMonthName, getWeekday, getFullMinutes, getMaxVisitHour } from '../helpers/dateFormats';
function Receipt(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    if (props.location.data) {
      setData(props.location.data);
    }
  }, [props.location.data]);

  if (props.location.data === undefined) {
    return <Redirect to="/" />
  }

  return (<div className="col col-desk-8 receipt">

    <h1>Your order confirmation</h1>
    {data && (
      <div className="receipt-content">
        <div className="receipt-item grid-0">
          <div className="receipt-item--name col col-desk-4">
            Date of reservation
          </div>
          <div className="receipt-item--content col col-desk-8">
            {getWeekday(new Date(data.date).getDay())}, {getMonthName(new Date(data.date).getMonth())} {new Date(data.date).getDate()}, {new Date(data.date).getFullYear()}
          </div>
        </div>
        <div className="receipt-item grid-0">
          <div className="receipt-item--name col col-desk-4">
            Time of reservation
            </div>
          <div className="receipt-item--content col col-desk-8">
            {new Date(data.date).getHours()}:{getFullMinutes(new Date(data.date).getMinutes())} till {getMaxVisitHour(new Date(data.date).getHours(), new Date(data.date).getMinutes())}
          </div>
        </div>
        <div className="receipt-item grid-0">
          <div className="receipt-item--name col col-desk-4">
            Number of guests
            </div>
          <div className="receipt-item--content col col-desk-8">
            {data.numOfPeople}
          </div>
        </div>
        <div className="receipt-item grid-0">
          <div className="receipt-item--name col col-desk-4">
            Dish of choice
            </div>
          <div className="receipt-item--content col col-desk-8">
            {data.dish && (
              <div>{data.dish.strMeal} ({data.dish.strCategory})</div>
            )}
          </div>
        </div>
        <div className="receipt-item grid-0">
          <div className="receipt-item--name col col-desk-4">
            Drinks of choice
            </div>
          <div className="receipt-item--content col col-desk-8">
            {data.drinks && (<div>
              <ol>
                {data.drinks.map((item, key) => {
                  return <li key={key}>{item}</li>
                })}
              </ol>
            </div>)}

          </div>
        </div>
      </div>
    )
    }
    <Link
      className="button"
      to={{
        pathname: '/'
      }}>Back to home page</Link>
  </div >)
}
export default Receipt;