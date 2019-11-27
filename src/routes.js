import React from "react";
import { Switch, Route } from "react-router-dom";

import Browse from "./app/browse";
import Call from "./app/call";
import Live from "./app/live";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Browse} />
      <Route path="/call/:id" component={Call} />
      <Route path="/live" component={Live} />
    </Switch>
  );
}
