"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function CategoryList(props: any) {
  const { category } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left  bg-blue-700 hover:bg-blue-800 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <button
        className="text-gray-700 hover:text-gray-900 focus:outline-none text-white"
        onClick={toggleDropdown}
      >
        Select Category
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl">
          {category.map((item: any) => (
            <Link
              key={item.id}
              className="w-full px-4 py-2 text-left hover:bg-gray-200 block px-4 py-2 text-gray-800 hover:bg-gray-200"
              href={{
                pathname: `/ctaegory/${item.id}`,
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
