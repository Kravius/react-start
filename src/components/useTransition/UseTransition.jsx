import { useTransition } from "react";
import { useState } from "react";
import ProductList from "./ProductList";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Watermelon" },
];

function filterProducts(term) {
  if (!term) return products;
  return products.filter((product) =>
    product.name.toLowerCase().includes(term.toLowerCase())
  );
}

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div>
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p>updating ...</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default UseTransition;
