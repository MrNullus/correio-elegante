import { RouterProvider } from "react-router-dom";
import Router from "./routes/root";

import "./assets/styles/main.scss";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
