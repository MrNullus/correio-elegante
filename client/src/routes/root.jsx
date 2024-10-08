import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Guest/Home";
import UserCreateMyLetter from "../pages/User/CreateMyLetter";

import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

import Dashboard from "../pages/Admin/Dashboard";

import LettersShow from "../pages/Admin/Letters/Show/";
import LettersPayOff from "../pages/Admin/Letters/PayOff/";

import TypeLetterCreate from "../pages/Admin/TypeLetter/Create/";
import TypeLetterUpdate from "../pages/Admin/TypeLetter/Update/";
import TypeLetterShow from "../pages/Admin/TypeLetter/Show/";


const Router = createBrowserRouter([
  // ~@> Guest
  {
    path: "/",
    element: <Home />,
  },

  // ~@> User
  {
    path: "/user/create-my-letter",
    element: <UserCreateMyLetter />,
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
    path: '/admin/type-letter/show/:uid',
    element: <TypeLetterShow />
  },
  {
    path: '/admin/type-letter/update/:uid',
    element: <TypeLetterUpdate />
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
