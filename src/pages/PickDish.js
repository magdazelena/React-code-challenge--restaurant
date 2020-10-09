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
  useEffect(() => {
    if (email) {
      getOrderByEmail(email)
        .then(res => {
          setData({
            ...res
          })
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      setData({
        email: email,
        dish: dish
      })
    }
  }, [email, dish, setDish, setData])

  return (<div >
    <h1>Pick a dish</h1>
    <div className="grid-0">
      <GeneratorBox savedOrder={data.dish} onGenerate={setDish} />
      <NextStepBox name="Anything to drink?" disabled={!data.dish} pathname="/pick-drink" data={data} />
    </div>

  </div>)
}
export default PickDish;