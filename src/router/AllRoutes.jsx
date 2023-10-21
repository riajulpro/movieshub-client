import { createBrowserRouter } from "react-router-dom";
import Template from "../layout/Template";
import ErrorPage from "../layout/ErrorPage";
import Home from "../pages/Public/Home";
import Login from "../pages/Public/Login";
import Register from "../pages/Public/Register";
import AddProduct from "../pages/Private/AddProduct";
import MyCart from "../pages/Private/MyCart";
import UpdateProduct from "../pages/Private/UpdateProduct";
import BrandProducts from "../pages/Public/BrandProducts";
import ViewDetails from "../pages/Private/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "/add_product",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my_cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update_product/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://riajulpro-assingment-10-hvg430qx7-riajul-pros-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/brand_products",
        element: <BrandProducts />,
      },
      {
        path: "/product_details/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://riajulpro-assingment-10-hvg430qx7-riajul-pros-projects.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
