import ProductDetail from "../../../components/Product/productDetail";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchProduct = async (idProduct: string) => {
  try {
    return await prisma.product.findMany({
      where: { id: idProduct },
    });
  } catch (error) {
    return [];
  }
};

async function Product(props: any) {
  const idProduct = props.params.slug;

  const product = await fetchProduct(idProduct);

  return <ProductDetail item={product[0]} />;
}

export default Product;
