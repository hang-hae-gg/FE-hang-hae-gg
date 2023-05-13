import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from 'js-cookie';

function Google() {
    const responseGoogle = (response) => {
        try {
            const token = response.credential
            Cookies.set('token', token, { expires: 1 / 24 });
            console.log(response)
            console.log(token)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`}>
            <GoogleLogin
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className='mt-6 w-[300px]  mb-[20px] ' />
        </GoogleOAuthProvider>
    )
}

export default Google