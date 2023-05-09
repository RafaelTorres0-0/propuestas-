import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Propuesta1 from './propuesta1';
import Propuesta2 from './propuesta2';
import Propuesta3 from './propuesta3';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Propuesta1} />
        <Route exact path="/p2" component={Propuesta2} />
        <Route exact path="/p3" component={Propuesta3} />
      </Switch>
    </Router>
  );
}

export default Routes;
