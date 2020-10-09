import React from 'react';
import FindOrderBox from '../components/action/FindOrderBox';
import OrderBox from '../components/action/OrderBox';
import ContentBox from '../components/static/ContentBox';
import Slider from '../components/static/Slider';

function Landing() {
  return (<div className="page grid-0 landing">
    <div className="col col-desk-8"><Slider /></div>
    <div className="col col-desk-4"><OrderBox /></div>
    <div className="col col-desk-6"><FindOrderBox /></div >
    <div className="col col-desk-6"><ContentBox /></div >
  </div>)
}
export default Landing;