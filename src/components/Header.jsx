import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'

export default function Header() {
  return (
    <div className='header'>
      <h1 >Academo</h1>
      <nav className='header__nav'>
        <NavLink 
        to='/app/home' 
        className='header__nav__item'
        style={({ isActive }) => isActive ? {color: 'red', fontWeight: "bold"} : {color:'blue'}}
        >
          home 
        </NavLink>
        <NavLink 
        to='/login' 
        className='header__nav__item'
        style={({ isActive }) => isActive ? {color: 'red', fontWeight: "bold"} : {color:'blue'}}
        onClick={()=> console.log('salir')}
        >
          Salir
        </NavLink>
      </nav>
    </div>
  )
}
