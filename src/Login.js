import React, { Component } from "react";
 
class Login extends Component {
    constructor(props){
        super(props);
            this.state={
                username:'',
                email:'',
                password:''
            }  
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    
  render() {
    return (
      <div className="container-fluid ">
        <div className="row Login">
        <div className="col-sm-12 col-md-3 col-lg-3"></div>
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="Form">

            <h3>LOGIN</h3>
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" method="POST" class="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" method="POST" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" name="remember"/> Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-default" onclick = {this.handlesubmit} >SUBMIT</button>
                </form>
            </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3"></div>
        </div>
        
      </div>
    );
  }
}
 
export default Login;