import { useState } from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateProduct, getProduct } from "../forStorage";

export async function loader({ params }) {
  console.log(params);
  const product = await getProduct(params.productId);
  return { product };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateProduct(params.productId, updates);
  console.log(params.productId, "url");
  return redirect(`/products/${params.productId}`);
}

function Edit() {
  const { product } = useLoaderData();

  return (
    <Form method="post" id="product-form">
      <div>
        <span>Name:</span>
        <input
          placeholder="id"
          type="text"
          name="id"
          defaultValue={product.id}
        />
      </div>
      <div>
        <span>Name:</span>
        <input
          placeholder="name"
          type="text"
          name="name"
          defaultValue={product.name}
        />
      </div>
      <div>
        <span>Cost:</span>
        <input
          placeholder="cost"
          type="text"
          name="cost"
          defaultValue={product.cost}
        />
      </div>
      <div>
        <span>Amount:</span>
        <input
          placeholder="amount"
          type="text"
          name="amount"
          defaultValue={product.amount}
        />
      </div>
      <p>
        <button type="submit">save</button>
      </p>
    </Form>
  );

  // const [valueProduct, setValueProduct] = useState(product);

  // const handleInput = (ev, object) => {
  //   setValueProduct((prev) => {
  //     return { ...prev, [object]: ev.target.value };
  //   });
  // };
  // return (
  //   <div>
  //     <Form method="post">
  //       <input
  //         value={valueProduct.id ?? ""}
  //         onChange={(ev) => handleInput(ev, "id")}
  //         name="id"
  //         // defaultValue={product.id}
  //       ></input>
  //       <div>
  //         <button type="submit">Save</button>
  //       </div>
  //     </Form>
  //   </div>
  // );
}

export default Edit;
