import Link from "next/link";

function CatNavBar({ className }: { className?: string }) {
  const pages = [
    { link: "/", label: "New" },
    { link: "/category/health-and-beauty", label: "Health & Beauty" },
    { link: "/category/women-fashion", label: `Women's Fashion` },
    { link: "/category/men-fashion", label: `Men's Fashion` },
    { link: "/category/luxury", label: "Luxury" },
    { link: "/category/electronics", label: "Electronics" },
    { link: "/category/sports", label: "Sports" },
    { link: "/category/other", label: "Other" },
  ];
  return (
    <nav className="hidden w-full h-24 justify-center items-center font-light text-black text-xl divide-x-2 xl:text-2xl lg:flex">
      {pages.map((page, i) => (
        <Link
          href={page.link}
          className={
            "px-5 cursor-pointer hover:underline hover:decoration-green-600"
          }
          key={i}
        >
          {page.label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}

export default CatNavBar;
