import React, { useState, useEffect } from 'react';
import { getRandomDish } from '../../services/external';

function GeneratorBox() {
  const [appState, setAppState] = useState({
    loading: false,
    dish: null,
    error: false
  })
  useEffect(() => {
    generateDish();
  }, [setAppState]);

  const generateDish = () => {
    setAppState({ loading: true });
    getRandomDish()
      .then(data => {
        let dish = data.data.meals[0];
        console.log(dish)
        setAppState({
          loading: false,
          dish: dish
        })
      })
      .catch(error => {
        console.error(error);
        setAppState({
          loading: false,
          error: true
        })
      })
  }
  return (<div className="col col-desk-8 generator-box">
    <p>How about...</p>
    {appState.dish && (
      <div className="dish">
        <p>...something {appState.dish.strArea}?</p>
        <h2>{appState.dish.strMeal} <span className="dish-category">{appState.dish.strCategory}</span></h2>
        <img src={appState.dish.strMealThumb} alt={appState.dish.strMeal} />
      </div>
    )}
    {appState.error && (<h2>Something went wrong, try again please.</h2>)}
    <button className="button" onClick={generateDish}>Generate a dish</button>
  </div>)
}

export default GeneratorBox;