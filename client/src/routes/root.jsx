import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

import Dashboard from "../pages/Admin/Dashboard";

import { Letter } from "./Letter/";

import TypeLetterCreate from "../pages/Admin/TypeLetter/Create/";


const TypeLetter = [
  {
    path: '/admin/type-letter/create', 
    element: <TypeLetterCreate />
  },
];

const Auth = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },  
];


const Router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
  },
  
  // ~@> AUTH
  ...Auth,
  
  // ~@> ADMIN
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  },
  ...TypeLetter,
  ...Letter,
]);

export default Router;
