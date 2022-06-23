import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// firebase 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
// redux 
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authAction';
// components 
import InputForm from './Input';
// styles 
import '../styles/form.css'

const expresiones = {
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

export default function LoginForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate()
  const [ email, setEmail ] = useState({ campo: "", error: false });
  const [ password, setPassword ] = useState({ campo: "", error: false });



  const login = async(e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email.campo, password.campo);
      const objUser = {
          uid: user.uid,
          email: user.email,
          photo: null,
          isLoggedIn: true,
          checking: false,
      }
      dispatch(loginUser(objUser));
      navigate('/app')

    } catch (error) {
      alert('Email o contraseña invalido, intruduce uno valido');
    }
  }

  return (
    <form className='form' onSubmit={login}>
      <InputForm
        type="email"
        name="email"
        label="Correo Electrónico :"
        state={email}
        setState={setEmail}
        expresion={expresiones.email}
        error="El email es obligatorio y tiene que ser un email valido"
      />
      <InputForm
        type="password"
        name="password"
        label="Constraseña :"
        state={password}
        setState={setPassword}
        expresion={expresiones.password}
        error="La contraseña debe tener por lo menos 4 digitos"
      />
      <div className='form__container-button'>
        <button type='submit' className='form__submit'>
          Ingresar
        </button>
      </div>
    </form>
  )
}
