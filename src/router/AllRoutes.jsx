import { createBrowserRouter } from "react-router-dom";
import Template from "../layout/Template";
import ErrorPage from "../layout/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
