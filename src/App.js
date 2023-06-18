import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      try {
        console.log("jaaa", process.env.REACT_APP_SERVER_URL)
        const response = await ((await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login-success`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        })).json())

        if (response.status === 200) {
          setAuthenticatedUser(response.user);
        }



      } catch (err) {
        console.log(err);
      }
    }

    getAuthenticatedUser()
  }, [])

  const checkIfUserExist = () => {
    if (Object.keys(authenticatedUser).length) {
      return true
    }
    return false;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar authenticatedUser={authenticatedUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={checkIfUserExist() ? <Navigate to="/" /> : <Login />} />
          <Route path='/post/:id' element={checkIfUserExist() ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
