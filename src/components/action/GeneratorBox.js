import React, { useState, useEffect } from 'react';
import { getRandomDish } from '../../services/external';
import { usePrevious } from '../../helpers/hooks';

function GeneratorBox(props) {
  const [appState, setAppState] = useState({
    loading: false,
    dish: null,
    error: false,
    beenPreloaded: false
  })
  const savedOrder = props.savedOrder;
  const prevSavedOrder = usePrevious(savedOrder);
  useEffect(() => {
    if (!appState.beenPreloaded) {
      if (savedOrder !== prevSavedOrder && savedOrder !== null) {
        setAppState({
          ...appState,
          dish: savedOrder,
          beenPreloaded: true
        })
      } else {
        generateDish();
      }
    }
  }, [savedOrder, setAppState]);


  const generateDish = () => {
    setAppState({ ...appState, loading: true });
    getRandomDish()
      .then(data => {
        let dish = data.data.meals[0];
        setAppState({
          ...appState,
          loading: false,
          dish: dish
        })
        props.onGenerate(dish)
      })
      .catch(error => {
        console.error(error);
        setAppState({
          ...appState,
          loading: false,
          error: true
        })
      })


  }

  return (<div className="col col-desk-8 generator-box">

    {appState.dish && (
      <div className="dish">
        <p>How about... something <span className="strong">{appState.dish.strArea}</span>?</p>
        <h2>{appState.dish.strMeal} <span className="dish-category">{appState.dish.strCategory}</span></h2>
        <img src={appState.dish.strMealThumb} alt={appState.dish.strMeal} className="dish-image" />

      </div>
    )}
    {appState.error && (<h2>Something went wrong, try again please.</h2>)}
    <button className="button" disabled={!appState.dish} onClick={generateDish}>Generate a dish</button>
  </div>)
}

export default GeneratorBox;