import Home from "./HomePage";
import Cocktail from "./Cocktail";
import ErrorPage from "./errorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page1",
    element: <Cocktail />,
    errorElement: <ErrorPage />,
  },
]);
