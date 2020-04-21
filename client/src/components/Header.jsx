import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/aw_logo.png';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Header() {
  return(
    <header className="d-flex header-padding header bg-white">
      <div  className="mr-auto">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div  className="flex-2 text-right">
        <nav className="nav">
          <Link to='#about'>About</Link>
          <Link to='#whatWeDo'>What We Do</Link>
          <Link to='#contact'>CONTACT</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
