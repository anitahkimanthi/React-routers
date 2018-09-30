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
        
        <div className="row main">
          <div class=" col-sm-12 col-md-12 col-lg-12 header">
            <div class="row header">
                <ul class="col-sm-12 col-md-9 col-lg-9">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/stuff">Stuff</NavLink></li>
                  <li><NavLink to="/Testimonials">Testimonials</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>  
                </ul>

                <div class="col-sm-12 col-md-3 col-lg-3">
                  <a className="bt"> <NavLink to="/Signup">sign up</NavLink></a>
                  <a className="bt"><NavLink to="/Login">Login</NavLink></a> 
                </div>
              </div> 
            </div>
            <br clear="all"/>
            
              
              <div className="col-sm-12 col-md-12 col-lg-12">
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