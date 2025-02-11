import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurants";
import MenuItem from "./MenuItem";

const Menu = () => {
  // STEP 03: Use loader data
  const data = useLoaderData();

  return (
    <div>
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

// STEP 01:
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
