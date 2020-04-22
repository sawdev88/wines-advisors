import React from 'react';
import placeholder from '../images/placeholder.jpg';

function About() {
  return(
    <div className="container" id='about'>
      <h2 className="title">About</h2>

      <div className="d-flex mt-4">
        <div className="flex-1 mt-4 content">
          <p>Wines Advisors was formed in 2020 to bring best in class Business Brokerage and Mergers and Acquisitions services to the Sacramento Regional Area.  Our principals have completed over 100 successful business transactions, within the business sales and commercial real estate fields, with total consideration of several hundred million dollars.  Our clients have ranged from local privately held businesses to globally recognized private equity firms.  We are solely focused on business sales and our aim is to sell your businesses quickly, confidentially, and for top dollar.</p>

          <p>Many of our opportunities are not openly marketed due to confidentiality concerns.  If you would like to preview our deal flow, please fill out the contact form below.</p>
        </div>
        <div className="flex-1 position-relative">
          <div className="img-border"></div>
          <img className="about-img" src={placeholder} alt="placeholder" />
        </div>
      </div>
    </div>
  )
}

export default About
