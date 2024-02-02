import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddsonPage from "./pages/AddsonPage";
import PlanPage from "./pages/PlanPage";
import SummaryPage from "./pages/SummaryPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <HomePage /> },
    { path: "/add_on", element: <AddsonPage /> },
    { path: "/plan", element: <PlanPage /> },
    { path: "/summary", element: <SummaryPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
