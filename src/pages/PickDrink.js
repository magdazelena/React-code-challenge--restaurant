import React, { useState } from 'react';
import NextStepBox from '../components/action/NextStepBox';
import PickerBox from '../components/action/PickerBox';

function PickDrink() {
  const [pickedDrinks, setPickedDrinks] = useState([]);

  return (<div>
    <PickerBox onSelect={setPickedDrinks} />
    <NextStepBox disabled={pickedDrinks && pickedDrinks.length === 0} pathname="/order" />
  </div>)
}
export default PickDrink;