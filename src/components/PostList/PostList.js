import React from 'react';
import App from '../../App';
import './PostList.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
  } from 'react-router-dom';

const PostList = ( props ) => (
    <div className="blog-list-container">
        <Router>
                <Link to={'/posts/${}'} className="blog-element">element 1</Link>
                <Link to={'/posts/${}'} className="blog-element">element 2</Link>
                <Link to={'/posts/${}'} className="blog-element">element 3</Link>
        </Router>
    </div>
);

export default PostList