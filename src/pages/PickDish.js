import React, { useState, useEffect } from 'react';
import { getRandomDish } from '../services/external';
function PickDish(props) {
  const { newOrder, email } = props.location.state;
  const [appState, setAppState] = useState({
    loading: false,
    dish: null
  })
  useEffect(() => {
    setAppState({ loading: true });
    getRandomDish()
      .then(data => {
        let dish = data.data.meals[0];
        setAppState({
          loading: false,
          dish: dish
        })
      })
      .catch(error => {
        console.error(error);
        setAppState({
          loading: false,
          dish: 'Something went wrong. Generate again!'
        })
      })
  }, [setAppState]);
  return (<div>PickDish
    {appState.dish && (<p>{appState.dish.strMeal}</p>)}
  </div>)
}
export default PickDish;