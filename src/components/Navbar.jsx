import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ authenticatedUser }) => {
    const navigate = useNavigate();

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self")
        console.log("User logged out successfully");
    }

    return (
        <div className='navbar'>
            <span>
                <Link className='link' to="/">YourTutor</Link>
            </span>

            {
                Object.keys(authenticatedUser).length ? (
                    <ul className='list'>
                        <li className='listItem'>
                            <img src={authenticatedUser.photos[0].value} alt='' className='avatar' />
                        </li>
                        <li className='listItem'>{authenticatedUser.displayName || authenticatedUser.username}</li>
                        <li className='listItem'>
                            <button onClick={logout} className='logout_btn'>Logout</button>
                        </li>
                    </ul>
                ) : (
                    <button className='login_btn' onClick={() => navigate("/login")}>Login</button>
                )
            }
        </div>
    )
}

export default Navbar