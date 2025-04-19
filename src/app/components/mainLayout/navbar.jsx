import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-14 bg-purple-400 text-gray-50 flex justify-between gap-5 items-center px-5">
      <h2 className="text-2xl">Amazing Cart</h2>
      <nav className="hidden md:flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/about"}>About</Link>
      </nav>
      <nav className="flex gap-5">
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
      </nav>
    </header>
  );
};

export default Navbar;