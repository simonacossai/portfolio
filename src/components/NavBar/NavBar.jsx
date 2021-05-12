import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa'; 
import './NavBar.scss';

function Navbar() {
    
    const [click, setClick] = useState(false)
    const handleClick =()=> setClick(!click)
    const [button, setButton] = useState(true)
    const closeMobileMenu = () =>setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton);
    
    return (
        <div className="bar-container">
          <div className="navbar" id="navbar">
              <div className="navbar-container container">           
              <img src={logo} className="navbar-logo"/>
                  <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                          <Link  smooth={true} duration={900} to="about" className="nav-links " onClick={closeMobileMenu}>
                            About
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link  smooth={true} duration={900} to="skills" className="nav-links mx-lg-4" onClick={closeMobileMenu}>
                            Technologies
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="portfolio" smooth={true} duration={900} className="nav-links" onClick={closeMobileMenu}>
                            Portfolio
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>  
        </div>
    )
}

export default Navbar
