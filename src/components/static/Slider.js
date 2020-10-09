import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (<div className="slider">
    <Carousel autoPlay dynamicHeight={false} showThumbs={false} infiniteLoop>
      <div>
        <img src="./images/slides/table.jpg" />
      </div>
      <div>
        <img src="./images/slides/meat.jpg" />
      </div>
      <div>
        <img src="./images/slides/sushi.jpg" />
      </div>
      <div>
        <img src="./images/slides/fries.jpg" />
      </div>
    </Carousel>
  </div>)
}
export default Slider;