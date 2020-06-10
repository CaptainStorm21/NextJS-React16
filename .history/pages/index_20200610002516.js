import React, { Component } from "react";
import axios from 'axios';
import MainLayout from "../components/layouts/MainLayout";

export default class Home extends Component {
  static async getInitialProps() {

    const request = axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then(response => {
                                console.log(response.data)
                              })

    console.log('get initial props')
    return {
      user: {
        name: 'Francis',
        lastName: "Medici"
      }
    }
  }
  constructor(props) {
    super(props)
    console.log('constructor');
    console.log(this.props.user);
    this.state = {
      user: this.props.user
    }
  }
  render() {
    console.log(this.props.user)
    console.log(this.state);
    return (
      <>
        <MainLayout>
          <h1>Welcome to NextJS</h1>
        </MainLayout>
      </>
    );
  }
}
