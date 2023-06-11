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
import PrivateRoute from "./PrivateRoute";
// import DashBoard from "../Pages/DashBoard/Profile";
import Instructors from "../Pages/Instructor/Instructors";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/DashBoard/Profile/Profile";
import AllUsers from "../Pages/DashBoard/Users/AllUsers";
import AllClass from "../Pages/Home/AllClass/AllClass";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import ManageClass from "../Pages/DashBoard/ManageClass/ManageClass";
import ManageInstructor from "../Layout/ManageInstructor/ManageInstructor";

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
          element: <AllClass></AllClass>,
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
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'profile',
          element: <Profile></Profile>,
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>,
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>,
        },
        {
          path: 'manageClass',
          element: <ManageClass></ManageClass>,
        },
        {
          path: 'manageInstructor',
          element: <ManageInstructor></ManageInstructor>,
        },
      ]
    }
  ]);