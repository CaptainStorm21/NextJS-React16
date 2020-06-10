import React, { Component } from 'react'
import Link from 'next/link';

export default class Home extends Component {
    render() {
        return (
          <>
            <nav>
              <Link href="/">Home</Link>
              <a href="/contact">Contact</Link>
              <a href="/Linkbout">About</Link>
              <a href="/users">Users</Link>
            </nav>
            <h1>Welcome to NextJS</h1>
          </>
        );
    }
}
