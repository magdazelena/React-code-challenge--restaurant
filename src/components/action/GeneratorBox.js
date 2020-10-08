import React, { useState, useEffect } from 'react';
import { getRandomDish } from '../../services/external';

function GeneratorBox(props) {
  const [appState, setAppState] = useState({
    loading: false,
    dish: null,
    error: false,
    savedOrder: props.savedOrder
  })
  useEffect(() => {
    generateDish();
  }, [setAppState]);

  const generateDish = () => {
    setAppState({ ...appState, loading: true });
    console.log(appState.savedOrder)
    if (appState.savedOrder) {
      setAppState({
        loading: false,
        dish: props.savedOrder,
        savedOrder: false
      })
      props.onGenerate(appState.dish)
    } else {
      getRandomDish()
        .then(data => {
          let dish = data.data.meals[0];
          setAppState({
            loading: false,
            dish: dish
          })
          props.onGenerate(dish)
        })
        .catch(error => {
          console.error(error);
          setAppState({
            loading: false,
            error: true
          })
        })
    }

  }

  return (<div className="col col-desk-8 generator-box">

    {appState.dish && (
      <div className="dish">
        <p>How about... something <span className="strong">{appState.dish.strArea}</span>?</p>
        <h2>{appState.dish.strMeal} <span className="dish-category">{appState.dish.strCategory}</span></h2>
        <img src={appState.dish.strMealThumb} alt={appState.dish.strMeal} />
      </div>
    )}
    {appState.error && (<h2>Something went wrong, try again please.</h2>)}
    <button className="button" disabled={!appState.dish} onClick={generateDish}>Generate a dish</button>
  </div>)
}

export default GeneratorBox;