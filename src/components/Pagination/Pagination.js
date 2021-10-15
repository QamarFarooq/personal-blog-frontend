import React from 'react';
import App from '../../App';
import './Pagination.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
  } from 'react-router-dom';

const Pagination = ( props ) => (
    <div className="pagination-container">
        <Router>
            <Link className="pagination-element">Page 1</Link>
            <Link className="pagination-element">Page 2</Link>
            <Link className="pagination-element">Page 3</Link>
            <Link className="pagination-element">Last</Link>
        </Router>
    </div>

);

export default Pagination