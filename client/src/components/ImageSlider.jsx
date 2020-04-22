import React from 'react';
import { Link } from "react-router-dom";

function ImageSlider() {
  return(
    <div>
      <div className="banner"></div>
      <div className="callout">
        <h1>Selling Sacramento Businesses</h1>
        <h3>Business Brokerage - Mergers and Acquisitions</h3>
      </div>

      <Link to='#about'>
        <div id="arrow-wrapper">
          <div className="arrow-border">
            <div className="arrow down"></div>
            <div className='pulse'></div>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default ImageSlider;
