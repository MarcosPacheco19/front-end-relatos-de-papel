import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../features/Layout";
import { HomePage } from "../features/Home";
import BookDetailsPage from "../features/BookDetails/components/BookDetailsPage";
import Login from "../features/Layout/components/Login";
import Checkout from "../features/Chekout/components/Checkout";

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
