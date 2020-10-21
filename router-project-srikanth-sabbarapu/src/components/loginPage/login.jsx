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
      <div>
        <div className={`container  ${styles.loginform}`}>
            <h3 className=" font-weight-bold">Login Page</h3>
            <form onSubmit={this.submitHandle}>
              {/* *********** User Name ************** */}
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control text-center border border-info"
                  placeholder="User Name - admin"
                  value={this.state.name}
                  name="name"
                  autoComplete='off'
                  onChange={this.handleChange}
                />
              </div>

              {/* *********** Password ************** */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control text-center border border-info"
                  placeholder="password - admin"
                  name="password"
                  autoComplete='off'
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
    );
  }
}

export default Login;
