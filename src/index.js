import React from 'react';
import ReactDOM from 'react-dom';
import InqStudio from './InqStudio';
import Inq001 from './Inq001';
import Inq002 from './Inq002';
import Inq003 from './Inq003';
import Visual from './Visual';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route path="/" exact component={InqStudio} />
            <Route path="/001/" component={Inq001} />
            <Route path="/002/" component={Inq002} />
            <Route path="/003/" component={Inq003} />
            <Route path="/visual/" component={Visual} />
            <Route path="/contact/" component={Contact} />
            </Switch>
        </Router>
    );
  }
  
  serviceWorker.unregister();
  ReactDOM.render(<AppRouter />, document.getElementById('root'));

  export default AppRouter;
