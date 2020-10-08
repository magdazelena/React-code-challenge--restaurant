import React, { useState } from 'react';
import NextStepBox from '../components/action/NextStepBox';
import DrinkPickerBox from '../components/action/DrinkPickerBox';

function PickDrink() {
  const [pickedDrinks, setPickedDrinks] = useState([]);

  return (<div className="grid-0">
    <DrinkPickerBox onSelect={setPickedDrinks} />
    <NextStepBox disabled={pickedDrinks && pickedDrinks.length === 0} pathname="/order" />
  </div>)
}
export default PickDrink;