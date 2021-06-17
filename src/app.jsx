import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Index from "./pages/index";
import Order from "./pages/order/order";
import Contact from "./pages/contact/contact";
import Menu from "./pages/menu/menu";

const renderTarget = document.querySelector("#target");

const App = () => {
  return (
    <Router basename={BASENAME}>
      <Header />

      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, renderTarget);
