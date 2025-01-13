import { redirect } from "react-router-dom";
import { deleteProduct } from "../forStorage";

export async function action({ params }) {
  await deleteProduct(params.productId);
  return redirect("/");
}
