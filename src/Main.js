import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Testimonials from './Testimonials';
import Signup from "./Signup";
import Login from "./Login";
 

// let isChrome = !!window.chrome && !!window.chrome.webstore; 

class Main extends Component {


  // content(){
  //   if(isChrome){
  //       return (
  //           <div>Chrome</div>
  //       )
  //   } else {
  //       return (
  //           <div>Not Chrome</div>
  //       )
  //   }
  // }

  render() {
    return (
        <HashRouter>
        
        <div className="row main">
          <div className=" col-sm-12 col-md-12 col-lg-12 header">
            <div className="row header">
            <div className="col-sm-12 col-md-10 col-lg-10">
                <ul>
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/stuff">Stuff</NavLink></li>
                  <li><NavLink to="/Testimonials">Testimonials</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>  
                </ul>
            </div>
                

                <div className="col-sm-12 col-md-2 col-lg-2">
                  <span className="bt"> <NavLink to="/Signup">SIGNUP</NavLink></span>
                  <span className="bt"><NavLink to="/Login">LOGIN</NavLink></span> 
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