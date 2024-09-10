import Link from "next/link";
import React from "react";

const links = [
  { href: "/client", label: "Client" },
  { href: "/drinks", label: "Drinks" },
  { href: "/tasks", label: "Tasks" },
  { href: "/query", label: "Query" },
];
const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4 ">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-neutral text-white font-bold font-serif   ">
          N E X T . J S
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize text-black-500 px-7 mx-3">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
