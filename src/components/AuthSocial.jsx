import React from 'react'; 
import { useNavigate } from 'react-router-dom';
// firebase 
import { auth, facebookAuthProvider, googleAuthProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
// redux 
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authAction';
// styles 
import '../styles/authSocial.css';

export default function AuthSocial() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleLogin = async() => {
    try {
      const user = await signInWithPopup(auth, googleAuthProvider);
      
      const objUser = {
        uid: user.user.uid,
        email: user.user.email,
        photo: user.user.photoURL,
        isLoggedIn: true,
        checking: false,
      };
      dispatch(loginUser(objUser));
      navigate('/app/home')
    } catch (error) {
      alert('no pudiste ingresar con Google, intenta acceder con correo y contraseña o con Facebook')
    };
  };

  const facebookLogin = async() => {
    try {
      const user = await signInWithPopup(auth, facebookAuthProvider);
      
      const objUser = {
        uid: user.user.uid,
        email: user.user.email,
        photo: null,
        isLoggedIn: true,
        checking: false,
      };
      dispatch(loginUser(objUser));
      navigate('/app/home')
    } catch (error) {
      alert('no pudiste ingresar con Facebook, intenta acceder con correo y contraseña o con Google')
    };
  };

  return (
    <div className='social'>
        <button className='social__auth social__auth-google' onClick={googleLogin}>
          Login con Google
        </button>

        <button className='social__auth social__auth-facebook' onClick={facebookLogin}>
          Login con Facebook          
        </button>
    </div>
  )
}
