import React, { Component } from "react";
import Nav from "./Header";

export default class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <h1>Welcome to NextJS</h1>
      </>
    );
  }
}
