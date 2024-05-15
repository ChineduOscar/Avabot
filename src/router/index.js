import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/register',
    Component: Register
  },
  {
    path: '/login',
    Component: Login
  }
]);

export default router;
