import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return( 
      // change dark to light for light version
      <nav style={{position:"sticky", top: 0}} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Color Theme
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item" onClick={props.toggleDark}>Dark</li>
                  <li className="dropdown-item" onClick={props.toggleLight}>Light</li>
                  <li><hr className="dropdown-divider"/></li>
                  <li className="dropdown-item" onClick={props.toggleRed}>Red</li>
                  <li className="dropdown-item" onClick={props.toggleGreen}>Green</li>
                  <li className="dropdown-item" onClick={props.toggleYellow}>Yellow</li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <a href="/" className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>


              {/* success - green
              danger - red
              primary - blue */}

            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-outline-${props.mode==='light' ? 'dark':'light'}`} type="submit">Search</button>
            </form> */}


            {/* <div className="theme">
              <span onClick={props.toggleRed} className="palette redP"></span>
              <span onClick={props.toggleGreen} className="palette greenP"></span>
              <span onClick={props.toggleYellow} className="palette yellowP"></span>
              
            </div> */}

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className={`form-check-label mx-1 text-${props.mode==='light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

          </div>
        </div>
      </nav>
  );
}


// defines the type of the props
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
};


// gives default values to the props
Navbar.defaultProps = {
    // title: "Varn",
    aboutText: "About"
};