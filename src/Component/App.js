import React from "react";
import "./App.css";
import Home from "./Home";
import News from "./News";
import { Route, Switch } from "react-router-dom";
import Articlea from "./Articles/Article-a";
import Hercare from "./Hercare";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/page" component={Articlea} />
        <Route exact path="/hercare" component={Hercare} />
      </Switch>
    </>
  );
};

export default App;
