import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Layout/ErrorPage/Errorpage";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
          path: '/instructor',
          element: <Instructor></Instructor>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>,
        },
      ]
    },
  ]);