import { useRef } from "react";
import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getProducts, createProduct } from "../forStorage";

export async function loader() {
  const products = await getProducts();
  console.log(products);
  return { products };
}

export async function action() {
  const product = createProduct();
  return { product };
}

function Root() {
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
              <Link key={prod.id} to={`products/${prod.id}`}>
                {prod.name ? prod.name : <i>none none</i>}
              </Link>
            ))}
          </nav>
        ) : (
          <p>
            <i>empty page here</i>
          </p>
        )}
      </div>

      <div id="product">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
