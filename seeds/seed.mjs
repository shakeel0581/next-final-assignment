import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.createMany({
    data: [
      { name: "Health & Beauty" },
      { name: `Women's Fashion` },
      { name: `Men's Fashion` },
      { name: "Luxury" },
      { name: "Electronics" },
      { name: "Sports" },
      { name: "Other" },
    ],
  });

  const brand = await prisma.user.upsert({
    where: { username: "brand" },

    update: {},

    create: {
      username: "brand",
      name: "brand",
      password:
        "$argon2id$v=19$m=65536,t=3,p=4$uVDjpuMv7g3wC6CNgDBy+Q$6HD+S6GGRI3Dp1YQlwwEGuMFWmwuPMMEtiC44YlDzHA",
      seller: {
        create: {
          storeEmail: "",
          storeName: `brand's Store`,
          products: {
            create: [
              {
                priceInCents: "1000",
                title: "Mesh Panel Ruched Glitter Top",
                image: "1668320696/brand/naqzoqkkf5ieby7pyros",
                description: "Slim fit regular sleeve mesh panel",
                category: {
                  connect: {
                    id: 2,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Men Cut And Sew Tee ",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfBk0A9Cot3ek1-2cgfSmBnHHkgh3_8omUg&usqp=CAU",
                description: "Round neck with long sleeve",
                category: {
                  connect: {
                    id: 3,
                  },
                },
              },
              {
                priceInCents: "2700",
                title: "Men Flap Pocket Corduroy Shirt",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEN70palJopDK6cKeNj5kTO4M1LtPUR1zpQ&usqp=CAU",
                description: "Regular fit fabric with slight stretch",
                category: {
                  connect: {
                    id: 3,
                  },
                },
              },
              {
                priceInCents: "2500",
                title: "Men V Neck Cable Knit Sweater",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkw1RUB2JUi-QJG-JLE4asB4yNthqb-XM0Q&usqp=CAU",
                description: "Cable-knit and regular fit",
                category: {
                  connect: {
                    id: 3,
                  },
                },
              },
              {
                priceInCents: "800",
                title: "Mesh Lantern Sleeve Scoop Neck Top",
                image:
                  "https://mendeez.com/cdn/shop/products/marine-blue-half-sleeve-t-shirtt-shirtsmendeez-pk-0009401-297649.png?v=1686225271",
                description: "Contrast mesh lantern with high stretch",
                category: {
                  connect: {
                    id: 2,
                  },
                },
              },
              {
                priceInCents: "1000",
                title: "Mesh Panel Flounce Sleeve Blouse",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsTm-T9Xp4NszdEXKfZombe5LNgYUvBiuEw&usqp=CAU",
                description: "Ruffle contrast mesh with flounce sleeves",
                category: {
                  connect: {
                    id: 2,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Neckline Flounce Sleeve Blouse",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpKmdwtgwHonEiPf4oYfPYIZNvcweHnr6nA&usqp=CAU",
                description: "Notched neckline and non-stretch",
                category: {
                  connect: {
                    id: 2,
                  },
                },
              },
              {
                priceInCents: "14600",
                title: "N°5 Eau de Parfum Spray",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYRBthimULiYLKZcMpuv-WD7AknAw3R3gUg&usqp=CAU",
                description:
                  "Since its creation in 1921, N°5 has exuded the very essence of femininity. The abstract, mysterious scent—alive with countless subtle facets—radiates an extravagant floral richness.",
                category: {
                  connect: {
                    id: 4,
                  },
                },
              },
            ],
          },
        },
      },
      buyer: {
        create: {
          addresses: {
            create: {
              addressLine1: "76 North Road",
              city: "London",
              country: "United Kingdom",
              region: "England",
              isDefault: true,
              postalCode: "NW1",
            },
          },
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
