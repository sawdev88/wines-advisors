import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function handleScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function Footer() {
  return (
    <footer className="d-flex p-4">
      <div onClick={() => handleScrollToTop()} className="mr-auto pointer">
        <FontAwesomeIcon icon={ faChevronUp } />  back to top
      </div>

      <div className="flex-2 text-right">
        copyright 2020
      </div>
    </footer>
  )
}

export default Footer;
