import ListProduct from "../../../components/Product/productList";

export default function Home(props: any) {
  const idProduct = props.params.slug;

  return <ListProduct byeCateGoryId={idProduct} />;
}
