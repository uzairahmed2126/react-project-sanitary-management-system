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
  { path: "accessories", element: <Accessories /> },
  { path: "product-order-form", element: <ProductOrderForm /> },
  { path: "view-produc", element: <ViewProduct /> },
]);
function App() {
  return (
    <>
      <DefaultLinks />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
