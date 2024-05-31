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

const ProtectedRoutes = () => {
	const localStorageToken = localStorage.getItem("token");
	return localStorageToken ? <Outlet /> : <Navigate to="/"  replace />;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/",
        element: <div>Admin</div>,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
