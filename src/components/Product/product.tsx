import Link from "next/link";

export default function product(props: any) {
  const { product } = props;
  const linkPath = `/products/${product.id}`;

  return (
    <Link
      href={{
        pathname: linkPath,
      }}
    >
      <div className="block h-64 rounded-lg shadow-lg bg-white">
        <img src={product.image} className="h-64 w-full" height="" alt="" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <a href="#" className="font-medium">
            {product.title}
          </a>
          <a className="flex items-center" href="#">
            <span className="text-xs font-medium text-gray-600">
              {product.description}
            </span>
          </a>
        </div>
        <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
          ${product.priceInCents}
        </span>
      </div>
    </Link>
  );
}
