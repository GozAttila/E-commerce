import React, { Component } from "react";
import axiosInstance from "./axiosApi";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/user/create/", {
        email: this.state.email,
        password: this.state.password,
      });
      return response;
    } catch (error) {
      console.log(error.stack);
      this.setState({
        errors: error.response.data,
      });
    }
  }

  render() {
    return (
      <div>
        Signup
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email ? this.state.errors.email : null}
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password ? this.state.errors.password : null}
          </label>
          <label>
            Password again:
            <input
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.handleChange}
            />
            {this.state.errors.password2 ? this.state.errors.password2 : null}
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Signup;
