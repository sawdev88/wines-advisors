import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function WhatWeDo() {
  return (
    <div className="container text-center" id="whatWeDo">
      <h3 className="title">What We Do</h3>

      <div className="d-flex">
        <div className="flex-fill tile">
          <div className="text-center mb-4">
            <FontAwesomeIcon className="callout-icon" icon={ faStore } />
            <h5>Sellers</h5>
          </div>

          <p>
            Our business is selling your business.  We specialize in full service higher end business brokerage and lower middle market transactions of closely held private companies.  Our specialty lies in selling businesses, not specific industries.  We pride ourselves on our ability to maintain confidentiality while attracting the attention of serious buyers.
          </p>
        </div>
        <div className="flex-fill tile">
          <div className="text-center mb-4">
            <FontAwesomeIcon className="callout-icon" icon={ faShoppingCart } />
            <h4>Buyers</h4>
          </div>

          <p>
            We assist qualified business purchasers seeking acqusitions.  Our typical buyer search clients consist of private equity firms, family offices, high net worth individuals and strategic acquirers (existing businesses looking to grow through acqusition).  We specialize in roll ups.  We have access to many off market opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo;
