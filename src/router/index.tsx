import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../features/Layout";
import { HomePage } from "../features/Home";
import { CartPage } from "../features/Cart";

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
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
