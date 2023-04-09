import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main/Main";
import Service from "../pages/Service/Service";
import Result from "../components/Result/Result";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "result",
        element: <Result></Result>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
