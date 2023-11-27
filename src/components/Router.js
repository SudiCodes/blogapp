import { createBrowserRouter } from "react-router-dom";
import Coverpage from "./Coverpage";
import BlogWall from "./BlogWall";
import Login from "./Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Coverpage />,
  },
  {
    path: "/home",
    element: <BlogWall />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
