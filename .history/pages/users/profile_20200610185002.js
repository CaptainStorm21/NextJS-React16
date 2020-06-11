import React, { Component } from 'react'
import MainLayout from "../../components/layouts/MainLayout";

export default class Profile extends Component {
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
