import React from "react";

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg na">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="logo" src="/img/refreshme2-cropped.svg"></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Catálogo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
              </li>

             
            
            </ul>
          </div>
        </div>
      </nav>


    )

}

export default NavBar