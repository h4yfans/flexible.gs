import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

let LanguageActions = require('./actions/LanguageActions');

import Homepage from './components/pages/Homepage'
import Install from './components/pages/Install'
import Learn from './components/pages/Learn'
import Compatibility from './components/pages/Compatibility'
import ResponsiveTest from './components/pages/ResponsiveTest'
import Motivation from './components/pages/Motivation'
import Future from './components/pages/Future'
import NotFound from './components/pages/NotFound'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}/>
    <Route path="/install" component={Install}/>
    <Route path="/learn" component={Learn}/>
    <Route path="/compatibility" component={Compatibility}/>
    <Route path="/responsive-test" component={ResponsiveTest}/>
    <Route path="/motivation" component={Motivation}/>
    <Route path="/future" component={Future}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

LanguageActions.initApp();

ReactDOM.render(routes, document.getElementById('app'));
