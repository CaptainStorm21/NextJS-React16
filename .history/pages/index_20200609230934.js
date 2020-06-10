import React, { Component } from "react";
import MainLayout from "../components/layouts/MainLayout";

export default class Home extends Component {
  constructor(){}
  render() {
    return (
      <>
        <MainLayout>
          <h1>Welcome to NextJS</h1>
        </MainLayout>
      </>
    );
  }
}
