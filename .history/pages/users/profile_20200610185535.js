import React, { Component } from 'react'
import MainLayout from "../../components/layouts/MainLayout";
import MyStyle from "../../static/css/main.css";

export default class Profile extends Component {
    static async getInitialProps( {query}) {
        return {}
    }
    render() {
        return (
          <>
            <MainLayout>
              <h3 className={MyStyle.superAwesome}>Profile</h3>
            </MainLayout>
          </>
        );
    }
}
