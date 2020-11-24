import React from "react";
import "./App.css";
import Home from "./Home";
import News from "./News";
import { Route, Switch } from "react-router-dom";
import Articlea from "./Articles/Article-a";
import Hercare from "./Hercare";
import Herright from "./Herright"
import Form from "./Form"
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/page" component={Articlea} />
        <Route exact path="/hercare" component={Hercare} />
        <Route exact path="/herright" component={Herright} />
        <Route exact path="/contact" component={Form} />

      </Switch>
    </>
  );
};

export default App;
