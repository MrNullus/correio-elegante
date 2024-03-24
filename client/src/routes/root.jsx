import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

import Dashboard from "../pages/Admin/Dashboard";

import LettersShow from "../pages/Admin/Letters/Show/";
import LettersPayOff from "../pages/Admin/Letters/PayOff/";

import TypeLetterCreate from "../pages/Admin/TypeLetter/Create/";


const Router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
  },
  
  // ~@> AUTH
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },  
  
  // ~@> ADMIN
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  },
  {
    path: '/admin/type-letter/create', 
    element: <TypeLetterCreate />
  },
  
  {
    path: "/admin/letters/show/:uid",
    element: <LettersShow/>,
  },
  {
    path: "/admin/letters/payoff/:uid",
    element: <LettersPayOff/>,
  }
]);

export default Router;
