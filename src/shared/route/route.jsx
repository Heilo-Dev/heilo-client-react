import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";
import { SubRoute } from "./sub-routes";
import Layouts from "shared/components/layouts/layouts";
import { Welcome } from "views/welcome";
import Login from '../../views/login/login';
import Register from "views/register/register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     {
        path: "/",
        element: <Layouts />,
        children: SubRoute,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login/>,
       
      },
      {
        path: "/register",
        element: <Register/>,
       
      },
     
      
    ],
  },
]);

export default route;
