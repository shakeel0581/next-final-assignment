import ListProduct from "../../../components/Product/productList";

export default function Home(props: any) {
  const searchKey = props.params.slug;

  return <ListProduct bySearchKey={searchKey} />;
}
