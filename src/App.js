//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>Chest X-Ray Image Captioning</h1>
          <ul className="header">
           <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
                 <Route path="/" element={<Home/>}></Route>
                 <Route path="/about" element={<About/>} exact />
          </Routes>
          </div>
        </div>
         </HashRouter>
    );
  }
}



export default App;




