import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/MainLayout";
// import '../styles/main.css'
import MyStyle from "../static/css/main.css";
import Link from "next/link";

export default class Home extends Component {
  static async getInitialProps({ pathname, query, asPath, req, res }) {
    let userData;

    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users/"
      );
      userData = response.data;
    } catch {
      console.log("error");
    }
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
  }

  renderUserList = (users) =>
    users.map((user, i) => (
      <li className="list-group-item" key={i}>
        <Link href={ }
          <a> {user.name}</a>
        </Link>
      </li>
    ));

  render() {
    // console.log(this.props.user);
    console.log(this.state);
    return (
      <>
        <MainLayout>
          <div className="container">
            <h3 className={MyStyle.superAwesome}>Pick Up A User</h3>
            <ul className="list-group">
              {this.renderUserList(this.props.userData)};
            </ul>
          </div>
        </MainLayout>
      </>
    );
  }
}
