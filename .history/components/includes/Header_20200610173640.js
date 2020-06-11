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
              <a className="nav-item nav-link">Home</a>
            </Link>
            <Link href="/contact">
              <a className="nav-item nav-link">Contact</a>
            </Link>
            <Link href="/about">
              <a className="nav-item nav-link">About</a>
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
