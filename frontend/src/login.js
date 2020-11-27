import React, { Component } from "react";
import axiosInstance from "./axiosApi";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      const response = axiosInstance
        .post("/token/obtain/", {
          email: this.state.email,
          password: this.state.password,
        })
        .then(
          (result) => {
            console.log("response", result.data);
            axiosInstance.defaults.headers["Authorization"] =
              "JWT " + result.data.access;
            localStorage.setItem("access_token", result.data.access);
            localStorage.setItem("refresh_token", result.data.refresh);
            localStorage.setItem("user", "user");
          }
          //   return data;
        );
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <div>
        Login
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail:
            <input
              name="email"
              type="email"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Login;
