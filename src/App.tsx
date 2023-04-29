import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import React from "react";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/new",
      element: <div>New!</div>,
    },
    {
      path: "/data/:id",
      element: <div>ID</div>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
