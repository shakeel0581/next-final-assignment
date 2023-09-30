import ProductDetail from "../../../components/Product/productDetail";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Product(props: any) {
  const idProduct = props.params.slug;

  const product = await prisma.product.findMany({
    where: { id: idProduct },
  });
  return <ProductDetail item={product[0]} />;
}

export default Product;
