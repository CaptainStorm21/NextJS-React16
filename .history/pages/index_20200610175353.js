import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/MainLayout";
// import '../styles/main.css'
import MyStyle from '../static/css';

export default class Home extends Component {
  static async getInitialProps({ pathname, query, asPath, req, res }) {
    let userData;

    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users/1"
      );
      userData = response.data;
      // console.log('getting loaded first')
      // console.log(userData)
    } catch {
      console.log("error");
    }
    // const request = axios.get('http://jsonplaceholder.typicode.com/users/1')
    //   .then(response => {
    //                             console.log(response.data)
    //                           })
    // console.log(context);

    console.log(pathname);
    console.log(res);
    console.log(req);

    return {
      user: {
        name: "Francis",
        lastName: "Medici",
      },
      userData,
    };
  }
  constructor(props) {
    super(props);
    // console.log("constructor");
    console.log(this.props.user);
    this.state = {
      user: this.props.user,
      userData: this.props.userData,
    };
  }
  render() {
    console.log(this.props.user);
    console.log(this.state);
    return (
      <>
        <MainLayout>
          <h1 className={MyStyle.superAwesome}>Welcome to NextJS</h1>
        </MainLayout>
      </>
    );
  }
}
