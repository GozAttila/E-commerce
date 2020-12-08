import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axiosInstance from "./axiosApi";

import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
// import Order from "./Pages/Order/Order";
import Checkout from "./Pages/Checkout/Checkout";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import CardDetail from "./components/CardDetail/CardDetail";

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

  // const handleLogout = async () => {
  //   try {
  //     const response = await axiosInstance.post("/blacklist/", {
  //       refresh_token: localStorage.getItem("refresh_token"),
  //     });
  //     localStorage.removeItem("access_token");
  //     localStorage.removeItem("refresh_token");
  //     axiosInstance.defaults.headers["Authorization"] = null;
  //     return response;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>


        <Route path="/cardDetail">
          <CardDetail />
        </Route>

        {/* <Route path="/order">
          <Order />
        </Route> */}

        {/* <Route path="/login">
            <Login />
          </Route> */}

        <Route path="/checkout">
          <Checkout />
        </Route>

        {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}

        <Route path="/login">
          <Checkout />
        </Route>

        <Route path="/logout">
          <Checkout />
        </Route>

        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
