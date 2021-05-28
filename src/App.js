// import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import './App.css';
import NavBar from './component/navbar';
import Home from './component/home';
import Main from './component/main'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function App() {
  
  return (
    <Router>
    <div className ="App">
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/" component={Main} /> */}
      < NavBar/>
    </div>
    </Router>
  );
}

export default App;
