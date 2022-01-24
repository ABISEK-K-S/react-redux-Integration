import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Abisek from "./../views/body/bodyComponent";

function RouteComponent() {
  return (
    <Switch>
      <Route exact path="/" component={Abisek} />
      <Route exact path="/users" component={Abisek} />
    </Switch>
  );
}

export default withRouter(RouteComponent);
