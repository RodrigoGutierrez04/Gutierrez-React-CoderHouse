import { buildQueries } from "@testing-library/react";
import React from "react";
import CartWidget from "../CartWidget";
import './navbar.css'

const navbarbg = {
  backgroundColor: '#3E6BDD'
}

const logo = {
  width: '120px',
  height: '40px',
  transform: 'translateX(20px)'

}


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg na" style={navbarbg}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="img/refreshme2-cropped.svg" style={logo}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><CartWidget/></a>
              </li>
              <li className="nav-item">
              </li>     
            
            </ul>
          </div>
        </div>
      </nav>


    )

}

export default NavBar