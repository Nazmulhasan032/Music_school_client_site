import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Layout/ErrorPage/Errorpage";
// import Instructor from "../Pages/Instructor/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Home/Home/Classes/Classes";
// import PrivateRoute from "./PrivateRoute";
// import DashBoard from "../Pages/DashBoard/Profile";
import Instructors from "../Pages/Instructor/Instructors";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/DashBoard/Profile/Profile";

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
          element: <Instructors></Instructors>,
        },
        {
          path: '/classes',
          element: <Classes></Classes>,
        },
        // {
        //   path: '/dashboard',
        //   element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        // },
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
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'profile',
          element: <Profile></Profile>,
        },
      ]
    }
  ]);