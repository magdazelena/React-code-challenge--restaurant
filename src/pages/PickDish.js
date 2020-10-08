import React, { useEffect, useState } from 'react';
import GeneratorBox from '../components/action/GeneratorBox';
import NextStepBox from '../components/action/NextStepBox';
import { getOrderByEmail } from '../services/local';

function PickDish(props) {
  const [dish, setDish] = useState(null);
  const [data, setData] = useState({
    email: false,
    dish: null,
  })
  let email = false;
  if (props.location.state) {
    email = props.location.state.email;
  }

  let order = getOrderByEmail(email);

  useEffect(() => {
    setData({
      email: email,
      dish: dish
    })
  }, [email, dish, setDish]);
  return (<div className="grid-0">
    <GeneratorBox savedOrder={order.dish} onGenerate={setDish} />
    <NextStepBox name="Anything to drink?" disabled={!data.dish} pathname="/pick-drink" data={order ? order : data} />
  </div>)
}
export default PickDish;