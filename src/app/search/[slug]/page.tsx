import ListProduct from "../../../components/Product/productList";
import { fetchCategory, fetchProduct } from "../../util/server/prismaQuery";

export default async function Home(props: any) {
  const searchKey = props.params.slug;
  const category = await fetchCategory();
  const products = await fetchProduct(null, searchKey);
  return <ListProduct category={category} products={products} />;
}
