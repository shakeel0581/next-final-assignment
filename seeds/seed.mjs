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
                title: "L'Oreal Paris",
                image:
                  "https://media.naheed.pk/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/1/2/1261594-2.jpg",
                description:
                  "L'Oreal Paris Innovation Revitalift Hyaluronic Acid 1.5% Hyaluron Serum, 30ml",
                category: {
                  connect: {
                    id: 1,
                  },
                },
              },
              {
                priceInCents: "620",
                title: "Issey Miyake",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1260791-2.jpg",
                description:
                  "Issey Miyake L'Eau D'Issey Set, For Women, Eau De Toilette 100 + Eau De Toilette 10ml + Body Lotion 50ml",
                category: {
                  connect: {
                    id: 1,
                  },
                },
              },
              {
                priceInCents: "400",
                title: "Burberry ",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1260665-1.jpg",
                description:
                  "Burberry Brit Splash For Him Eau De Toilette, For Men, 100ml",
                category: {
                  connect: {
                    id: 1,
                  },
                },
              },
              {
                priceInCents: "900",
                title: "Asgharali",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1260956-1.jpg",
                description: "Asghar Ali Eclipse Eau De Parfum, For Men, 100ml",
                category: {
                  connect: {
                    id: 1,
                  },
                },
              },
              {
                priceInCents: "150",
                title: "L'Oreal Paris",
                image:
                  "https://media.naheed.pk/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/1/2/1261594-2.jpg",
                description:
                  "L'Oreal Paris Innovation Revitalift Hyaluronic Acid 1.5% Hyaluron Serum, 30ml",
                category: {
                  connect: {
                    id: 1,
                  },
                },
              },
              {
                priceInCents: "1000",
                title: "L'Oreal Paris",
                image:
                  "https://media.naheed.pk/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/1/2/1261594-2.jpg",
                description:
                  "L'Oreal Paris Innovation Revitalift Hyaluronic Acid 1.5% Hyaluron Serum, 30ml",
                category: {
                  connect: {
                    id: 1,
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
                title: "Nespresso",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1261516-1.jpg",
                description:
                  "Nespresso Creatista Pro Machine, CP-PK-Aluminum-IL-NE (SNE900)",
                category: {
                  connect: {
                    id: 5,
                  },
                },
              },
              {
                priceInCents: "110",
                title: "Cofee machine",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpKmdwtgwHonEiPf4oYfPYIZNvcweHnr6nA&usqp=CAU",
                description: "Nespresso Zenius Pro Machine, Matt Black, 9737",
                category: {
                  connect: {
                    id: 5,
                  },
                },
              },
              {
                priceInCents: "150",
                title: "Sayona",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1260775-1.jpg",
                description:
                  "Sayona Hand Mixer With Rotating Bowl, 4 Liters, 250-300W, SHM-4358",
                category: {
                  connect: {
                    id: 5,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Nespresso",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1261513-1.jpg",
                description: "Nespresso Gran Lattissima Machine, F531-ME-WH-NE",
                category: {
                  connect: {
                    id: 5,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Apollo Sports",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1245667.jpg",
                description:
                  "Wish Alumtec 780 Badminton Racket, Green/White, 022474",
                category: {
                  connect: {
                    id: 6,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Apollo Sports",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1245669.jpg",
                description:
                  "Wish Alumtec 550 Badminton Racket, Orange/White, 019813",
                category: {
                  connect: {
                    id: 6,
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
                priceInCents: "1100",
                title: "MCD Leather Skipping Rope",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpKmdwtgwHonEiPf4oYfPYIZNvcweHnr6nA&usqp=CAU",
                description:
                  "tock: In Stock Ships In: 1-3 Days Delivery Area: Nationwide Country of Origin: Pakistan Shipped By: Naheed",
                category: {
                  connect: {
                    id: 6,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Freshly",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1222778-1.jpg",
                description: "Freshly Butter Microwave Popcorn, 297g",
                category: {
                  connect: {
                    id: 7,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Clean & Clear",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1237180-1.jpg",
                description:
                  "Clean & Clear Maximum Strength Fragrance-Free Persa-Gel 10, 28g",
                category: {
                  connect: {
                    id: 7,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Samsung",
                image:
                  "https://media.naheed.pk/catalog/product/cache/a05e171a5a1348658a0feb46a8ffae67/1/2/1232140-1.jpg",
                description:
                  "Samsung Galaxy S22 Ultra 12/256GB Smart Phone, Burgundy",
                category: {
                  connect: {
                    id: 7,
                  },
                },
              },
              {
                priceInCents: "1100",
                title: "Samsung Galaxy Z Flip 4 8GB/256GB Smartphone, Purple ",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpKmdwtgwHonEiPf4oYfPYIZNvcweHnr6nA&usqp=CAU",
                description:
                  "Side-mounted fingerprint reader Android 11 operating system- highly compatible with the latest software Battery capacity is around 3700 mAh- long-lasting power and support Fast battery charging and wireless charging Accelerometer, a barometer, a compass, a gyroscope, and a proximity sensor",
                category: {
                  connect: {
                    id: 7,
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
