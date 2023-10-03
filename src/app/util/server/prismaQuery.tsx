import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const fetchCategory = async () => {
  const cat = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return cat;
};

export const fetchProduct = async (
  byeCateGoryId: number | null,
  searchKey: string | null
) => {
  let result;
  if (byeCateGoryId) {
    result = await prisma.product.findMany({
      where: {
        category: {
          every: {
            id: +byeCateGoryId,
          },
        },
      },
    });
  } else if (searchKey) {
    result = await prisma.product.findMany({
      where: {
        title: {
          search: searchKey,
        },
      },
      select: {
        id: true,
        priceInCents: true,
        title: true,
        image: true,
        description: true,
        category: true,
      },
    });
  } else {
    result = await prisma.product.findMany();
  }
  return result;
};
