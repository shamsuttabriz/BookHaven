import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import Root from "./components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "listed-books",
        element: <ListedBooks />,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
