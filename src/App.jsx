import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Form,
  Accessories,
  ProductOrderForm,
  ViewProduct,
  DefaultLinks,
} from "./components/index";

const router = createBrowserRouter([
  { path: "/", element: <Form /> },
  // { path: "/nav", element: <DefaultLinks /> },
  {
    path: "accessories",
    element: (
      <div>
        <DefaultLinks />
        <Accessories />
      </div>
    ),
  },
  {
    path: "product-order-form",
    element: (
      <div>
        <DefaultLinks />
        <ProductOrderForm />
      </div>
    ),
  },
  {
    path: "view-product",
    element: (
      <div>
        <DefaultLinks />
        <ViewProduct />
      </div>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
