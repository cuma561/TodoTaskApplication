import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainTodo } from "./components/MainTodo/MainTodo";
import { MainCategory } from "./components/MainCategory/MainCategory";

const router = createBrowserRouter([
  {
    path: "/todos",
    element: <MainTodo />,
  },
  {
    path: "/category",
    element: <MainCategory />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
