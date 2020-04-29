import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*Pages*/
import Home from "../pages/Home";
import Portifolio from "../pages/Portifolio";
import Contact from "../pages/Contact";
import Notfound from "../pages/Notfound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portifolio" component={Portifolio} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={Notfound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
