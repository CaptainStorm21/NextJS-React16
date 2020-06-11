import React, { Component } from "react";
import Link from "next/link";

const Header = () => (
  <>
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link href="/">
            <a className="navbar-brand">NextJS App</a>
          </Link>
        </nav>

        <div className="collapase navbar-collapse">
          <div className="navbar-nav">
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
          </div>
        </div>
      </div>
    </header>
  
  </>
);

export default Header;
