import React, { Component } from 'react'
import  Link from ''
export default class Home extends Component {
    render() {
        return (
          <>
            <nav>
              <a href="/">Home</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
              <a href="/users">Users</a>
            </nav>
            <h1>Welcome to NextJS</h1>
          </>
        );
    }
}
