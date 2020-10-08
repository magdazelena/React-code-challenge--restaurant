import React from 'react';
import FindOrderBox from '../components/action/FindOrderBox';
import OrderBox from '../components/action/OrderBox';
import ContentBox from '../components/static/ContentBox';
import Slider from '../components/static/Slider';

function Landing() {
  return (<div className="page grid-0 landing">
    <Slider />
    <OrderBox />
    <FindOrderBox />
    <ContentBox />
  </div>)
}
export default Landing;