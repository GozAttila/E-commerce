import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import axiosInstance from "./axiosApi";

import Login from "./login";
import Signup from "./signup";
import AuthTest from "./authTest";

function App() {
  useEffect(() => {
    getLocalUser();
  }, []);

  const getLocalUser = async () => {
    if (localStorage.getItem("user") === null) {
      try {
        const response = await axiosInstance.get("/user/getlocaluser/");
        console.log("localuser response:", response);
        const localUser = response.data.localuser;
        localStorage.setItem("user", localUser);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="site">
      <main>
        <nav>
          <Link className={"nav-link"} to={"/"}>
            Home
          </Link>
          <Link className={"nav-link"} to={"/login/"}>
            Login
          </Link>
          <Link className={"nav-link"} to={"/signup/"}>
            Signup
          </Link>
          <Link className={"nav-link"} to={"/auth_test/"}>
            Auth-test
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <h1>Current time, just to check yourself ;-)</h1>
        <h1>2020.11.24 8:23</h1>
        <Switch>
          <Route exact path={"/login/"} component={Login} />
          <Route exact path={"/signup/"} component={Signup} />
          <Route exact path={"/auth_test/"} component={AuthTest} />
          {/* <Route path={"/"} render={() => <div>Home again</div>} /> */}
          <Route path={"/"} component={AuthTest} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
