import { Form, useLoaderData } from "react-router-dom";
import { getProduct } from "../forStorage";

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  return { product };
}

function Products() {
  const { product } = useLoaderData();
  return (
    <div>
      <h2>Product page</h2>
      <p>{product.id}</p>
      <p>Name: {product.name ? product.name : <i>unnamed</i>}</p>
      <p>Cost: {product.cost ? product.cost : <i>unknown</i>}</p>
      <p>Amount: {product.amount ? product.amount : <i>unknown</i>}</p>
      <div id="control">
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            if (!confirm("Do you want to delete this product?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">delete</button>
        </Form>
      </div>
    </div>
  );
}

export { Products };
