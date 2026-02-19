import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../features/Layout";
import { HomePage } from "../features/Home";
import BookDetailsPage from "../features/BookDetails/BookDetailsPage";
import Login from "../features/Auth/Login";
import Register from "../features/Auth/Register";
import Checkout from "../features/Chekout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "book/:id",
        element: <BookDetailsPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
