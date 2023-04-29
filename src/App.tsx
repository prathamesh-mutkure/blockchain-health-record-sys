import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import React from "react";
import HomePage from "./pages/home-page";
import NewRecordPage from "./pages/new-record-page";
import ViewRecordPage from "./pages/view-record-page";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/new",
      element: <NewRecordPage />,
    },
    {
      path: "/data/:id",
      element: <ViewRecordPage />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
