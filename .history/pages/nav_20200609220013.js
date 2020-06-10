import React, { Component } from 'react'

export default class nav extends Component {
    render() {
        return (
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/Linkbout">
              <a>About</a>
            </Link>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </nav>
        );
    }
}
