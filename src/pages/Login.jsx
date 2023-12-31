import React from 'react'

import Google from '../img/google.png';
import Github from '../img/github.png';


const Login = () => {

    const googleSignInHandler = () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self")
    }

    const githubSignInHandler = () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/github`, "_self")
    }

    console.log("hm")

    return (
        <div className='login'>
            <h1 className='loginTitle'>Choose a login method</h1>
            <div className='wrapper'>
                <div className="left">
                    <div className="loginButton google" onClick={googleSignInHandler}>
                        <img src={Google} alt="" className='icon' />
                        Google
                    </div>
                    {/* <div className="loginButton facebook">
                        <img src={Facebook} alt="" className='icon' />
                        Facebook
                    </div> */}
                    <div className="loginButton github" onClick={githubSignInHandler}>
                        <img src={Github} alt="" className='icon' />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className='line' />
                    <div className='or'>OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login