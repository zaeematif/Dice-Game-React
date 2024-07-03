import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./components/GamePage.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>404 Not Found</h1>
  },
  {
    path: '/play-game',
    element: <GamePage/>
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
