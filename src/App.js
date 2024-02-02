import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddsonPage from "./pages/AddsonPage";
import PlanPage from "./pages/PlanPage";
import SummaryPage from "./pages/SummaryPage";
import "bootstrap/dist/css/bootstrap.min.css";
import FinalPage from "./pages/FinalPage";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <HomePage /> },
    { path: "/add_on", element: <AddsonPage /> },
    { path: "/plan", element: <PlanPage /> },
    { path: "/summary", element: <SummaryPage /> },
    { path: "/final", element: <FinalPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
