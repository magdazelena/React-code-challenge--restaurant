import React, { useEffect, useState } from 'react';
import GeneratorBox from '../components/action/GeneratorBox';
import NextStepBox from '../components/action/NextStepBox';
import { getOrderByEmail } from '../services/local';

function PickDish(props) {

  const [dish, setDish] = useState(null);
  const [data, setData] = useState({
    email: props.location.state ? props.location.state.email : false,
    dish: null
  })
  useEffect(() => {
    if (data.email) {
      getOrderByEmail(data.email)
        .then(res => {
          setData({
            ...res,
            existingOrder: true
          })
        })
        .catch(error => {
          console.error(error);
          props.history.push({
            pathname: '/mail-not-found',
            email: data.email
          });
        })
    } else {
      setData({
        ...data,
        dish: dish
      })
    }
  }, [dish, setDish, setData])

  return (<div >
    <h1>Pick a dish</h1>
    <div className="grid-0">
      <GeneratorBox savedOrder={data.dish} onGenerate={setDish} />
      <NextStepBox name="Anything to drink?" disabled={!data.dish} pathname="/pick-drink" data={{ ...data, dish: dish }} />
    </div>

  </div>)
}
export default PickDish;