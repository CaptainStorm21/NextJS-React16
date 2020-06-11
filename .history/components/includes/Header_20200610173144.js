import React, { Component } from "react";
import Link from "next/link";

const Header = () => (
  <>
  <Header
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </nav>
  </>
);

export default Header;
