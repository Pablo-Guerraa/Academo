import React from 'react';
import AuthSocial from '../components/AuthSocial';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';

export default function Login() {
  return (
    <div className='login'>
      <section className='login__section-one'>
        <h1>Hola, bienvenido a Academo</h1>
        <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1655932700/mobile-login-concept-illustration_114360-83_imlfed.webp" alt="logo" className='login__img' />
      </section>
      <section className='login__section-two'>
        <div className='login__container-form'>
          <h3>Inicia Sesión</h3>
          <LoginForm />
          <AuthSocial />
        </div>
      </section>
    </div>
  )
}
