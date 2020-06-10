import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
          <>
            <nav>
              <a href="/">Home</a>
              <a href="">Contact</a>
              <a href="/about">About</a>
              <a href="/users">Users</a>
            </nav>
            <h1>Welcome to NextJS</h1>
          </>
        );
    }
}
