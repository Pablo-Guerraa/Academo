import { useNavigate, Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './layouts/HomeLayout';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// components
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
// redux 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// firebase 
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { loginUser } from './redux/actions/authAction';


// ----------------------------------------------------------------------

export default function Router() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);

  const userState = () => {
    onAuthStateChanged(auth, (user) => {
      const objUser = {
        uid: user.uid,
        email: user.email,
        photo: user.photoURL, 
        isLoggedIn: true,
        checking: false,
      };
      dispatch(loginUser(objUser));
      navigate('/app');
    })
  }
  
  useEffect(() => {
    userState();
  }, [])

  return useRoutes([
    {
      path: '/app',
      // El true da el acceso a las rutas privadas 
      element: isLoggedIn ? <HomeLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'home', element: <Home /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { 
      path: '*', 
      element: <Navigate 
      to="/404" 
      replace />
    },
  ]);
}
