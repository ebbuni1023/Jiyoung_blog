import React from 'react';
import {
    Button,
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import "./component/navbar.css";
import NavBar from "./navbar";
import Main from "./main";
import "../component/home.css";

const Home = (props) => {
    return(
        <div style ={{ width: "100%", height: "100%" }}>
        <NavBar></NavBar>
            <div className="gallery-container">
                <div className ="introduction">
                    <h1>This is a Jiyoung's Coding blog</h1>
                </div>
                <div className="container">
                    <h1>Let's study for Programming Language</h1>
                </div>
                <div className="container">
                    <h1>Web development</h1>
                </div>
                <div className="container">
                    <h1>App development</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
