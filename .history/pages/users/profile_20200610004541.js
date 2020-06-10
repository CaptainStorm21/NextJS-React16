import React from 'react'

const Profile = (props) => {
    console.log(props);
    return (
        <>
            <h1>Profile</h1>
        </>
    )
}

Profile.getInitialProps = ({ req }) => {
    return { value : 'This is from the functional component Profiles' }
}
export default Profile;