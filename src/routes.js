import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './layouts/HomeLayout';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// components
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
// redux 
import { useSelector } from 'react-redux';


// ----------------------------------------------------------------------

export default function Router() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  
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
