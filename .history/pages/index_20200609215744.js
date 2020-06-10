import React, { Component } from 'react'
import Link from 'next/link';

export default class Home extends Component {
    render() {
        return (
          <>
            <nav>
              <Link href="/"><a>Home</a></Link>
              <Link href="/contact"><a>Contact</Link>
              <Link href="/Linkbout">About</Link>
              <Link href="/users">Users</Link>
            </nav>
            <h1>Welcome to NextJS</h1>
          </>
        );
    }
}
