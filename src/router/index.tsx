import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../features/Layout";
import { HomePage } from "../features/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
