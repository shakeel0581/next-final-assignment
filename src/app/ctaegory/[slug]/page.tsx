import ListProduct from "../../../components/Product/productList";
import { fetchCategory, fetchProduct } from "../../util/server/prismaQuery";

export default async function ProductByCat(props: any) {
  const idProduct = props.params.slug;
  const category = await fetchCategory();
  const products = await fetchProduct(idProduct, null);

  return <ListProduct category={category} products={products} />;
}
