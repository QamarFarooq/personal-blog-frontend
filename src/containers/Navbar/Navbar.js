import React from 'react'
import App from '../../App'
import './Navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
  } from 'react-router-dom';
  

const Navbar = ( props ) => (
    <div className="nav-bar">
        <Router>
            <nav>
                <Link to="/" className="nav-link">
                    Profile Page
                </Link>
                <Link to="/about" className="nav-link">
                    CreatePost
                </Link>
                <Link to="/posts" className="nav-link">
                    SignInOrSignOut
                </Link>
            </nav>
        </Router>
    </div>

);

export default Navbar