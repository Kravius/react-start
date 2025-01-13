import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage404 from "./ErrorPage404";
import { Products, loader as productLoader } from "./routes/products";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Edit, {
  loader as editProductLoader,
  action as editAction,
} from "./routes/edit";
import { action as deleteAction } from "./routes/delete";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage404 />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        errorElement: <ErrorPage404 />,
        path: "products/:productId",
        element: <Products />,
        loader: productLoader,
        // action: productAction,
      },
      {
        path: "products/:productId/edit",
        element: <Edit />,
        loader: editProductLoader,
        action: editAction,
      },
      {
        path: "products/:productId/delete",
        action: deleteAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
