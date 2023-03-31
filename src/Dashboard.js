import React from "react";
import { Outlet } from "react-router-dom";

const navigate = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Customer Redux Saga", href: "saga", current: false },
  { name: "Sign Up", href: "signup", current: false },
  { name: "Sign In", href: "signin", current: false },
];
export default function Dashboard() {
  return (
    <div>
      {navigate.map((item) => {
        return (
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              {item.name}
            </a>
          </div>
        );
      })}
      <header>
        <h1>{navigate.name}</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
