"use client";
import React, { useState } from "react";
import "./header.css";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const signoutHandler = async () => {
    signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <header style={{ marginBottom: "95px" }}>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <a className="logo" href="#">
            <h3 className="font-bold text-2xl">LOGO</h3>
          </a>
          <input type="checkbox" id="check" />

          <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event: any) =>
                    setSearchTerm(event.currentTarget.value)
                  }
                  onKeyPress={(e: any) => {
                    if (e.key === "Enter") {
                      if (searchTerm) {
                        router.push(`/search/${searchTerm}`);
                      }
                    }
                  }}
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Zavy"
                />
              </div>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/",
                }}
              >
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/about",
                }}
              >
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/contact",
                }}
              >
                Contact{" "}
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  onClick={signoutHandler}
                  type="submit"
                  className="w-full bg-red-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    router.push(`/login`);
                  }}
                  type="submit"
                  className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
              )}
            </li>

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            Menu
          </label>
        </ul>
      </nav>
    </header>
  );
}
