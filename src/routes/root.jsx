import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
} from "react-router-dom";
import { getProducts, createProduct } from "../forStorage";

export async function loader() {
  const products = await getProducts();
  // console.log(products);
  return { products };
}

export async function action() {
  const product = await createProduct();
  console.log(product);
  return redirect(`/products/${product.id}/edit`);
}

function Root() {
  const navigation = useNavigation();
  const { products } = useLoaderData();
  return (
    <div id="main">
      <div id="menu">
        <Form method="post">
          <button type="submit">add product</button>
        </Form>
        {products.length ? (
          <nav>
            {products.map((prod) => (
              <NavLink
                key={prod.id}
                to={`products/${prod.id}`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "loading" : ""
                }
              >
                {prod.id ? prod.id : <i>none none</i>}
              </NavLink>
            ))}
          </nav>
        ) : (
          <p>
            <i>empty page here</i>
          </p>
        )}
      </div>

      <div
        id="product"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
