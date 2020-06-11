import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/MainLayout";
// import '../styles/main.css'
import MyStyle from "../static/css/main.css";
import Link from 'next/link';

export default class Home extends Component {
  static async getInitialProps({ pathname, query, asPath, req, res }) {
    let userData;

    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users/"
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
    // this.state = {
    //   user: this.props.user,
    //   userData: this.props.userData,
    // };
  }

  renderUserList = (users) => (
    users.map((user, i) => (
      <ol className = "list-group-item" key = {i}>
        {/* <Link href={`/users/profile?userId=${user.id}`}> */}
                  <Link href={`/users/profile?userId=${user.id}`}>
          <a>
            {user.name}
          </a>
        </Link>
        </ol>
       ))
    )

  render() {
    console.log(this.props.user);
    console.log(this.state);
    return (
      <>
        <MainLayout>
          <div className ="container">
          <h3 className={MyStyle.superAwesome}>Pick Up A User</h3>
          <ul className="list-group">
              {this.renderUserList(this.props.userData)}
            </ul>
          </div>
        </MainLayout>
      </>
    );
  }
}
