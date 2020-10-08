import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NextStepBox from '../components/action/NextStepBox';
import DrinkPickerBox from '../components/action/DrinkPickerBox';

function PickDrink(props) {
  const [pickedDrinks, setPickedDrinks] = useState([]);
  if (props.location.data === undefined) {
    return <Redirect to="/pick-dish" />
  }
  return (<div>
    <h1>Pick a drink</h1>
    <div className="grid-0">
      <DrinkPickerBox onSelect={setPickedDrinks} />
      <NextStepBox
        data={{
          email: props.location.data.email,
          dish: props.location.data.dish,
          drinks: pickedDrinks
        }}
        disabled={pickedDrinks && pickedDrinks.length === 0}
        name="Pick a date and number of guests"
        label="Choose at least one drink"
        pathname="/order"
      />
    </div>
  </div>)
}
export default PickDrink;