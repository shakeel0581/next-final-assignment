import ListProduct from "../components/Product/productList";
import { fetchCategory, fetchProduct } from "./util/server/prismaQuery";

export default async function Home() {
  const category = await fetchCategory();
  const products = await fetchProduct(null, null);

  return <ListProduct category={category} products={products} />;
}
