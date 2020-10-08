import React from 'react';
import GeneratorBox from '../components/action/GeneratorBox';
import NextStepBox from '../components/action/NextStepBox';

function PickDish(props) {
  let email = false;
  if (props.location.state) {
    email = props.location.state.email;
  }

  return (<div className="grid-0">
    <GeneratorBox findByEmail={email} />
    <NextStepBox pathname="/pick-drink" />
  </div>)
}
export default PickDish;