import React, { Component } from 'react'
import MainLayout from "../../components/layouts/MainLayout";
import MyStyle from "../../static/css/main.css";
import axios from 'axios';

export default class Profile extends Component {
    static async getInitialProps({ query }) {
        console.log(query)
        return {}
    }
    render() {
        return (
            <MainLayout>
              <h3 className={MyStyle.superAwesome}>Profile</h3>
            </MainLayout>
        );
    }
}
