import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Testimonials from './Testimonials';
import Signup from "./Signup";
import Login from "./Login";
 
class Main extends Component {
  render() {
      
    return (
        <HashRouter>
        <div className="header">
        <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/stuff">Stuff</NavLink></li>
        <li><NavLink to="/Testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <button className="bt"><NavLink to="/Signup">sign up</NavLink></button>
        <button className="bt"><NavLink to="/Login">Login</NavLink></button>
        </ul>
        
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/testimonials" component={Testimonials}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          
        </div>
      </div>
        </HashRouter>
    );
  }
}
 
export default Main;