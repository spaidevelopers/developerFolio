import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import BlogsParent from "./containers/BlogsParent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "blogs",
    element: <BlogsParent />,
  },
  {
    path: "blogs/:blogKey",
    element: <BlogsParent />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
