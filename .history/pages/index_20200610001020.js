import React, { Component } from "react";
import MainLayout from "../components/layouts/MainLayout";

export default class Home extends Component {
  static getInitialProps() {
    console.log('get initial props')
    return {
      user: {
        name: 'Francis',
        lastName: "Medici"
      }
    }
  }
  constructor() {
    super()
    console.log('constructor');
  }
  render() {
    console.log('render');
    console.log()
    return (
      <>
        <MainLayout>
          <h1>Welcome to NextJS</h1>
        </MainLayout>
      </>
    );
  }
}
