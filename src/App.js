import React, { useState, useReducer, createContext, useContext } from 'react';
import PostList from './components/PostList/PostList.js';
import Title from './containers/Title/Title.js';
import Pagination from './components/Pagination/Pagination.js';
import Navbar from './containers/Navbar/Navbar.js';
import Button from './components/Button/Button.js';
import Store from './store/Store.js';
import MatrixRain from './containers/MatrixRain/MatrixRain'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';


const App = () => {

    return (
        <div>
          <Store>
            <MatrixRain/>
              <Button className='something'/>
              <Title className='something'/>
              <Navbar className='something'/>
              <PostList className='something'/>
              <Pagination className='something'/>
          </Store>
        </div>
    );
}

export default App;
