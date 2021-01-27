import React from 'react';
import ReactDOM from 'react-dom';
import Inq000 from './Inq000';
import Inq001 from './Inq001';
import Inq002 from './Inq002';
import Inq003 from './Inq003';
import Inq004 from './Inq004';
import Production from './Production';
import Profile from './Profile';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Production} />
                <Route path="/research/000" component={Inq000} />
                <Route path="/research/001/" component={Inq001} />
                <Route path="/research/002/" component={Inq002} />
                <Route path="/research/003/" component={Inq003} />
                <Route path="/research/004/" component={Inq004} />
                <Route path="/profile/" component={Profile} />
            </Switch>
        </Router>
    );
  }
  
  serviceWorker.unregister();
  ReactDOM.render(<AppRouter />, document.getElementById('root'));

  export default AppRouter;
