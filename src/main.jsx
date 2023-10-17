import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/AllRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
