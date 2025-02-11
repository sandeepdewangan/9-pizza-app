import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import User from "./features/user/User";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";

function App() {
  // Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/order/new",
      element: <CreateOrder />,
    },
    {
      path: "/order:orderId",
      element: <Order />,
    },
    {
      path: "/user",
      element: <User />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
