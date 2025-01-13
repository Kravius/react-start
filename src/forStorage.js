import localforage from "localforage";
import { nanoid } from "nanoid";

export async function createProduct() {
  await someNetwork();
  let id = nanoid(4);
  let product = { id };
  console.log(product);
  let products = await getProducts();
  products.unshift(product);
  await setProducts(products);
  return product;
}

export async function updateProduct(id, updates) {
  await someNetwork();
  const products = await getProducts();
  const product = products.find((prod) => prod.id === id);
  if (!product) throw new Error("No product found for this", id);
  // const productToSet = products.map((prod) => {
  //   if (prod.id === id) {
  //     return updates;
  //   }
  //   return prod;
  // });
  // await setProducts(productToSet);

  Object.assign(product, updates);
  await setProducts(products);
  return product;
}

function setProducts(products) {
  return localforage.setItem("products", products);
}

export async function getProducts() {
  await someNetwork();
  let products = await localforage.getItem("products");

  if (!products) products = [];
  return products;
}

export async function getProduct(id) {
  await someNetwork(`product:${id}`);
  let products = await localforage.getItem("products");
  let product = products.find((prod) => prod.id === id);
  return product ?? null;
}

export async function deleteProduct(id) {
  const products = await getProducts();
  let newProducts = products.filter((prod) => prod.id !== id);
  await setProducts(newProducts);
  return true;
}

// export async function deleteProduct(id) {
// 	let products = await localforage.getItem('products');
// 	let index = products.findIndex((product) => product.id === id);
// 	if (index > -1) {
// 		products.splice(index, 1);
// 		await setProducts(products);
// 		return true;
// 	}
// 	return false;
// }

let someCache = {};

async function someNetwork(key) {
  if (!key) {
    someCache = {};
  }

  if (someCache[key]) {
    return;
  }

  someCache[key] = true;

  return new Promise((res) => {
    setTimeout(res, Math.random() * 700);
  });
}
