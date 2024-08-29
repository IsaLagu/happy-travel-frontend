import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import CreateDestination from "../pages/CreateDestination";
import EditDestination from "../pages/EditDestination";
import LogIn from "../pages/LogIn";
import DestinationDetails from "../pages/DestinationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      { path: "/create-destination", element: <CreateDestination /> },
      { path: "/edit-destination", element: <EditDestination /> },
      { path: "/destinations/:id", element: <DestinationDetails /> },
    ],
  },
]);

export default router;
