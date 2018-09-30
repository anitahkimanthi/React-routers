import React, { Component } from "react";
 
class Signup extends Component {

  constructor(props){
    super(props);
        this.state={
            username:'',
            email:'',
            Organisation:'',
            password:''
        }  
    this.handlesubmit=this.handlesubmit.bind(this)
}
handlesubmit(){
    // event.preventDefault();
    this.setState={
        username:'',
        email:'',
        Organisation:'',
        password:''
    }
}

handleInputChange = (event)=>{
    this.setState={
        [event.target.id]:event.target.value
    }
}
  render() {
    return (
      <div className="container-fluid ">
      <div className="row register">
      <div className="col-sm-12 col-md-6 col-lg-6 offset-lg-3">
          <div className="Form">

          <h3>LOGIN</h3>
              <form action="/action_page.php" onChange={this.handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="email">Username:</label>
                      <input onChange={this.handleInputChange} type="email" method="POST" className="form-control" id="username" placeholder="Enter Userename" name="email"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input onChange={this.handleInputChange} type="email" method="POST" className="form-control" id="email" placeholder="Enter email" name="email"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Organisation:</label>
                      <input onChange={this.handleInputChange} type="email" method="POST" className="form-control" id="Organisation" placeholder="Enter  Organisation" name="email"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input onChange={this.handleInputChange} type="password" method="POST" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                  </div>
                  <div className="checkbox">
                      <label><input onChange={this.handleInputChange} type="checkbox" name="remember"/> Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-default">SUBMIT</button>
              </form>
          </div>
      </div>
      </div>
      </div>
    );
  }
}
 
export default Signup;