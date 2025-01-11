import { useDeferredValue } from "react";

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);

  return (
    <ul>
      {deferredProducts.map((product, ind) => (
        <li key={ind}>{product.name}</li>
      ))}
    </ul>
  );
}
export default ProductList;
