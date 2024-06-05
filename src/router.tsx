import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EditModule from "./components/EditModule/EditModule";
import AddModule from "./components/AddModule/AddModule";
import AdminCourses from "./pages/AdminCourses/AdminCourses";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import EnrolledUsers from "./components/EnrolledUsers/EnrolledUsers";
import UnEnrolledUsers from "./components/UnEnrolledUsers/UnEnrolledUsers";
import CertifiedUsers from "./components/CertifiedUsers/CertifiedUsers";
import Header from "./components/Header/HeaderFooterContainer";
import Button from "./components/UI components/Button/Button";
import User from "./pages/User/User";
import { ReactNode } from "react";

const Logout = () => <Button type="submit" text="Log Out" bgColor="blue" handleClick={() => console.log('Log Out')} />

const ProtectedRoutes = () => {
  const localStorageToken = localStorage.getItem("token");
  return localStorageToken ? <Outlet /> : <Navigate to="/" replace />;
};

const USER_TYPES = {
  ADMIN: 'admin',
  USER: 'user',
}

const CURRENT_USER_TYPE = USER_TYPES.ADMIN;

const AdminElement = (children: ReactNode) => {
  if (CURRENT_USER_TYPE === 'admin') {
    return <div>{children}</div>
  } else {
    return <ErrorPage/>
  }
}

const UserElement = (children: ReactNode) => {
  if (CURRENT_USER_TYPE === 'user') {
    return <div>{children}</div>
  } else {
    return <ErrorPage/>
  }
}
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/admin/*",
    element: <Header logoutBtn={Logout} />,
    children: [
      {
        path: 'courses',
        element: <AdminCourses type="admin"/>,
        errorElement: <ErrorPage />
      },
      {
        path: 'users/*',
        element: <AdminUsers/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'enrolled',
            element: <EnrolledUsers/>
          },
          {
            path: 'unenrolled',
            element: <UnEnrolledUsers/>
          },
          {
            path: 'certified',
            element: <CertifiedUsers/>
          },
        ]
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "/user/*",
    element: <Header logoutBtn={Logout}/>,
    children: [
      {
        path: 'id/*',
        element: <AdminCourses type="user"/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "profile",
            element: <AdminCourses type="user"/>
          }
        ]
      }
    ]
  }
]);
