import React, { useState, useEffect } from 'react';
import { getDrinkList } from '../../services/external';

function DrinkPickerBox(props) {
  const [appState, setAppState] = useState({
    loading: false,
    drinkList: null,
    selectedDrinks: [],
    error: false
  })
  const updatePickingPage = props.onSelect;
  useEffect(() => {
    loadList();
  }, [setAppState]);

  const loadList = () => {
    setAppState({ loading: true });
    getDrinkList()
      .then(res => {
        setAppState({
          loading: false,
          drinkList: res.data,
          selectedDrinks: []
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

  const selectDrink = (e) => {
    let drink = e.target;
    let drinkName = e.target.getAttribute('id');
    if (drink.classList.contains('selected')) {
      drink.classList.remove('selected')
    } else {
      drink.classList.add('selected');
    }
    let index = appState.selectedDrinks.indexOf(drinkName);
    if (index === -1) {
      setAppState({
        ...appState,
        selectedDrinks: [...appState.selectedDrinks, drinkName]
      })
    } else {
      setAppState({
        ...appState,
        selectedDrinks: appState.selectedDrinks.filter((_, i) => i !== index)
      })
    }
  }

  useEffect(() => {
    updatePickingPage(appState.selectedDrinks);
  }, [updatePickingPage, appState.selectedDrinks]);

  return (<div className="col col-desk-8  picker-box">
    {appState.drinkList && (
      <div className="drink-list grid-0">
        {appState.drinkList.map((item, key) => {
          return (
            <div className="drink-item col-desk-5" onClick={selectDrink} key={key} id={item.name}>
              <div className="drink-description">
                <p className="drink-tagline">{item.tagline}</p>
                <p className="drink-name">{item.name}</p>
              </div>
              <img src={item.image_url} alt={item.name} />
            </div>)
        })}
      </div>
    )}
    {appState.error && (<h2>Something went wrong, try again please.</h2>)}
  </div>)
}

export default DrinkPickerBox;