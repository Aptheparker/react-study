import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as postLoader } from "./routes/Posts";
import "./index.css";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  // from react version v6.4.x ~
  {
    path: "/", // root layout loaded at first
    element: <RootLayout />,
    children: [
      {
        path: "/", // loaded in the RootLayout.
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost /> }, // child of the Posts
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
