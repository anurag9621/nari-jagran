import React from "react";
import "./App.css";
import Home from "./Home";
import News from "./News";
import { Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
      </Switch>
    </>
  );
};

export default App;
