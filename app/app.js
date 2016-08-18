import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

let LanguageAction = require('./action/LanguageAction');

import Homepage from './components/page/Homepage'
import Install from './components/page/Install'
import Learn from './components/page/Learn'
import Compatibility from './components/page/Compatibility'
import Motivation from './components/page/Motivation'
import Future from './components/page/Future'
import PageNotFound from './components/page/PageNotFound'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}/>
    <Route path="/install" component={Install}/>
    <Route path="/learn" component={Learn}/>
    <Route path="/compatibility" component={Compatibility}/>
    <Route path="/motivation" component={Motivation}/>
    <Route path="/future" component={Future}/>
    <Route path="*" component={PageNotFound}/>
  </Router>
)

LanguageAction.initApp();

ReactDOM.render(routes, document.getElementById('app'));
