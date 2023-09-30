"use client";

import { useRouter } from "next/navigation";
export default function ProductDetail(props: any) {
  const router = useRouter();
  const { item } = props;

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">Product Name</h2>
            <p className="text-gray-600 text-sm mb-4">{item.title}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600"> {item.priceInCents}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">{item.stock} In Stock</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
