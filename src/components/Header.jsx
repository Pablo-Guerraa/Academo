import React from 'react';
import { NavLink } from 'react-router-dom';
// firebase 
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
// redux 
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authAction';
// styles 
import '../styles/header.css';

export default function Header() {

  const dispatch = useDispatch();

  const logout = async() => {
    await signOut(auth);
    console.log('se cerró sesion');
    dispatch(logoutUser());
}
  return (
    <div className='header'>
      <h1 >Academo</h1>
      <nav className='header__nav'>
        <NavLink 
        to='/app/home' 
        className='header__nav__item'
        style={({ isActive }) => isActive ? {color: 'blue', fontWeight: 'bold'} : {color:'blue'}}
        >
          home 
        </NavLink>
        <NavLink 
        to='/login' 
        className='header__nav__item'
        style={({ isActive }) => isActive ? {color: 'blue', fontWeight: "bold"} : {color:'blue'}}
        onClick={logout}
        >
          Salir
        </NavLink>
      </nav>
    </div>
  )
}