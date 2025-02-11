import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* Header section */}
      <Header />
      {/* Main content section */}
      <main>{isLoading ? <p>Loading...</p> : <Outlet />}</main>

      {/* Cart overview section */}
      <CartOverview />
    </div>
  );
};

export default AppLayout;
