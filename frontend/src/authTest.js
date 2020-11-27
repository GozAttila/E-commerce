import React, { Component } from "react";
import axiosInstance from "./axiosApi";

class AuthTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      user: null,
    };

    this.getMessage = this.getMessage.bind(this);
  }

  async getMessage() {
    try {
      let response = await axiosInstance.get("/auth_test/");
      const message = await response.data.message;
      console.log("response", response.data);
      this.setState({
        message: message,
        user: response.data.user.email,
      });
      return message;
    } catch (error) {
      console.log("Error: ", JSON.stringify(error, null, 4));
      console.log("Error plain: ", error);
      // throw error;
      return error;
    }
  }

  componentDidMount() {
    const messageData = this.getMessage();
    console.log("messageData: ", JSON.stringify(messageData, null, 4));
  }

  render() {
    return (
      <div>
        <p>Is this getting thru?</p>
        <p>Welcome {this.state.user ? this.state.user : "Guest"}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default AuthTest;
