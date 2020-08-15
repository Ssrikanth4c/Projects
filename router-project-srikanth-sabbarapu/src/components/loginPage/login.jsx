import React from "react";
import styles from "./login.module.css";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandle = e => {
    e.preventDefault();
    const { app } = this.props;
    console.log(this.state);
    app.userValidation(this.state);
  };
  render() {
    const { app } = this.props;
    if (app.isAuthenticate()) return <Redirect to="/" />;
    return (
      <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh' }}>
        <div className="container">
          <div className="container my-5">
            <h3 className="text-danger font-weight-bold">Login Page</h3>
            <form onSubmit={this.submitHandle}>
              {/* *********** User Name ************** */}
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control text-center border border-info"
                  placeholder="User Name"
                  value={this.state.name}
                  name="name"
                  autocomplete='off'
                  onChange={this.handleChange}
                />
              </div>

              {/* *********** Password ************** */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control text-center border border-info"
                  placeholder="Password"
                  name="password"
                  autocomplete='off'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              {/* *********** Login button ************** */}
              <button className="btn btn-primary btn-block font-weight-bold">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
