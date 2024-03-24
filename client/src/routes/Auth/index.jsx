import Login from "../../pages/Auth/Login/";
import Register from "../../pages/Auth/Register/";

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

export default Auth; 