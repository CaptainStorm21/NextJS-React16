import React, { Component } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import MyStyle from "../../static/css/main.css";
import axios from "axios";

export default class Profile extends Component {
  static async getInitialProps({ query }) {
    let user;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${query.userId}`
      );
      user = response.data;
    } catch (error) {
      console.error(error);
    }
    return { user };
  }

  // static async getInitialProps({ query }) {
  //     console.log(query)
  //     return {}
  // }

  showUser = (user) => {
    <div>
        <p>Name: {user.name}</p>
        <p>Last Name: {user.lastName}</p>
      <p>Email:</p>
    </div>;
  };

  render() {
    console.log(this.props);
    return (
      <MainLayout>
        <h3 className={MyStyle.superAwesome}>Profile</h3>
        {this.showUser(this.props.user)}
      </MainLayout>
    );
  }
}
