import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
