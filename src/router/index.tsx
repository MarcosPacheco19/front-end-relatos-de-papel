import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../features/Layout";
import { HomePage } from "../features/Home";
import BookDetailsPage from "../features/BookDetails/components/BookDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
