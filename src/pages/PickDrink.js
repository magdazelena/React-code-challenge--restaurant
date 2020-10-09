import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NextStepBox from '../components/action/NextStepBox';
import DrinkPickerBox from '../components/action/DrinkPickerBox';

function PickDrink(props) {
  const [pickedDrinks, setPickedDrinks] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    if (props.location.data) {
      setPickedDrinks(props.location.data.drinks);
      setData(props.location.data);
    }
  }, [props.location.data]);

  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      drinks: pickedDrinks
    }))
  }, [pickedDrinks, setData])
  if (props.location.data === undefined) {
    return <Redirect to="/pick-dish" />
  }

  return (<div>
    <h1>Anything to drink?</h1>
    <div className="grid-0">
      <DrinkPickerBox savedOrder={pickedDrinks} onSelect={setPickedDrinks} />
      <NextStepBox
        data={data}
        disabled={pickedDrinks && pickedDrinks.length === 0}
        name="Pick a date and number of guests"
        label="Choose at least one drink"
        pathname="/order"
      />
    </div>
  </div>)
}
export default PickDrink;