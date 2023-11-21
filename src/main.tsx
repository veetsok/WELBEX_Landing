import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import mainRouter from "./user.InterfaceLayer/router";
import "./user.InterfaceLayer/shared/assets/styles/styled.css";
import "./user.InterfaceLayer/shared/assets/styles/default.style.css";
import "./user.InterfaceLayer/shared/assets/styles/fonts.style.css";

const routers = createBrowserRouter(mainRouter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
