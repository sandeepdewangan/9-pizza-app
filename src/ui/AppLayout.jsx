import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      {/* Header section */}
      <Header />
      {/* Main content section */}
      <main>
        <Outlet />
      </main>

      {/* Cart overview section */}
      <CartOverview />
    </div>
  );
};

export default AppLayout;
