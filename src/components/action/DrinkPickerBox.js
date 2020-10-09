import React, { useState, useEffect } from 'react';
import { getDrinkList } from '../../services/external';
import { usePrevious } from '../../helpers/hooks';

function DrinkPickerBox(props) {
  const [appState, setAppState] = useState({
    loading: false,
    drinkList: null,
    selectedDrinks: [],
    error: false
  })
  const updatePickingPage = props.onSelect;
  const savedOrder = props.savedOrder;
  const prevSavedOrder = usePrevious(savedOrder);

  useEffect(() => {
    if (appState.drinkList == null)
      loadList();
  }, [setAppState]);

  const loadList = () => {
    setAppState({ ...appState, loading: true });
    getDrinkList()
      .then(res => {
        setAppState({
          ...appState,
          loading: false,
          drinkList: res.data
        })
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

  const selectDrink = (e, drinkItem) => {
    let drinkName = e.target.getAttribute('id');
    if (drinkItem.isSelected) {
      drinkItem.isSelected = false
    } else {
      drinkItem.isSelected = true
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
  const updateSelectionFromSave = (saved) => {
    getDrinkList().then(res => {
      res.data.forEach(item => {
        if (saved.indexOf(item.name) !== -1) {
          item.isSelected = true;
        }
      })
      setAppState({
        ...appState,
        drinkList: res.data
      })
    });
  }
  useEffect(() => {
    if (savedOrder !== prevSavedOrder && savedOrder) {
      if (savedOrder.length) {
        setAppState({
          ...appState,
          selectedDrinks: savedOrder,
        });
        updateSelectionFromSave(savedOrder);
      }
    } else {
      updatePickingPage(appState.selectedDrinks);
    }
  }, [
    savedOrder, appState.selectedDrinks
  ]);


  return (<div className="col col-desk-8  picker-box">
    {appState.drinkList && (
      <div className="drink-list grid-0">
        {appState.drinkList.map((item, key) => {
          return (
            <div className={`drink-item col-desk-5 ${item.isSelected ? 'selected' : ''}`} onClick={(e) => selectDrink(e, item)} key={key} id={item.name}>
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