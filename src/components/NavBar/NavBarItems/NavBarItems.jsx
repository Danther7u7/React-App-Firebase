import React from "react";
import { Link } from "react-router-dom";

const NavBarItems = () => {
  return (
    <>
      <ul className="navbar-nav mx-auto">
        <Link className='nav-link' to='/'>
        <li className="nav-item">
          <a className="nav-link">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        </Link>

        <Link className='nav-link' to='/productos/Gamer'>
        <li className="nav-item">
          <a className="nav-link">Zona Gamer</a>
        </li>
        </Link>

        <Link className='nav-link' to='/productos/Trabajo'>
        <li className="nav-item">
          <a className="nav-link">Para Trabajo</a>
        </li>
        </Link>

        <Link className='nav-link' to='/productos/Diseño'>
        <li className="nav-item">
          <a className="nav-link">Para Diseño</a>
        </li>
        </Link>
      </ul>
    </>
  )
}

export default NavBarItems;