// import styles from "./Products.module.css";

function Products() {
  const product = {
    name: "Product",
    cost: 400,
    amount: 5,
  };

  return (
    <div>
      <h2>Product page</h2>
      <p>Name: {product.name}</p>
      <p>Cost: {product.cost}</p>
      <p>Amount: {product.amount}</p>
    </div>
  );
}

function Students() {
  const product = {
    name: "Olek",
    salary: 4000,
    age: 25,
  };

  return (
    <div>
      <h2>Product page</h2>
      <p>Name: {product.name}</p>
      <p>Cost: {product.cost}</p>
      <p>Amount: {product.amount}</p>
    </div>
  );
}

export { Products, Students };
