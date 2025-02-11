import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurants";

const Menu = () => {
  // STEP 03: Use loader data
  const data = useLoaderData();

  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

// STEP 01:
export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
