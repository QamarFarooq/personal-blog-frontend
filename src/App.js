import React, { useState } from 'react';
import PostList from './components/PostList/PostList.js';
import Title from './containers/Title/Title.js';
import Pagination from './components/Pagination/Pagination.js';
import Navbar from './containers/Navbar/Navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';


const App = props => {

    useState();

    return (
      <div className="app-container">
        <button>testinghh</button>
        <Title />
        <Navbar />
        <PostList />
        <Pagination />
      </div>
    );
}

export default App;
