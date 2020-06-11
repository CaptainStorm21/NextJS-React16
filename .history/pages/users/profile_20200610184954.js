import React, { Component } from 'react'
import MainLayout from "../../components/layouts/MainLayout";

export default class Profile extends Component {
    render() {
        return (
          <>
            <MainLayout>
              <h3 className={MyStyle.superAwesome}>Pick Up A User</h3>
            </MainLayout>
          </>
        );
    }
}
