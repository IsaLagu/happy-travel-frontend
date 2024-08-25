import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import CreateDestination from "../pages/CreateDestination";
import EditDestination from "../pages/EditDestination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <SignUp /> },
      { path: "/create", element: <CreateDestination /> },
      { path:"/edit", element:<EditDestination/>},
    ],
  },
]);

export default router;
