import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_transparent1 from "./logo_transparent1.jpg"
import {
    Route,
    NavLink,
    HashRouter,
    Brand
  } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";
  import Contact from "./Contact";
  import AppointmentButton from "./AppointmentButton"
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
        
          <a href="/">
          <img src={logo_transparent1} style={{width:120, marginTop: -3, marginRight:900}} />
          </a>
      
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Join Now</NavLink></li>
           
          </ul>
        <switch>
          <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/appointmentButton" component={AppointmentButton}/>
            </switch>
        </div>
        </HashRouter>
       
    );
  }
}
 
export default Main;