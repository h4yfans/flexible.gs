import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

let LanguageAction = require('./action/LanguageAction');

import Homepage from './components/page/Homepage'
import Install from './components/page/Install'
import InstallScss from './components/page/InstallScss'
import InstallSass from './components/page/InstallSass'
import InstallLess from './components/page/InstallLess'
import InstallStylus from './components/page/InstallStylus'
import InstallScssPlus from './components/page/InstallScssPlus'
import InstallCSS from './components/page/InstallCSS'
import InstallBEM from './components/page/InstallBEM'
import Learn from './components/page/Learn'
import LearnWrap from './components/page/LearnWrap'
import LearnCol from './components/page/LearnCol'
import LearnColRow from './components/page/LearnColRow'
import LearnHidden from './components/page/LearnHidden'
import LearnNotHidden from './components/page/LearnNotHidden'
import LearnGutter from './components/page/LearnGutter'
import LearnOutside from './components/page/LearnOutside'
import LearnWrapCol from './components/page/LearnWrapCol'
import LearnAuto from './components/page/LearnAuto'
import LearnTable from './components/page/LearnTable'
import LearnWidth from './components/page/LearnWidth'
import LearnFlexbox from './components/page/LearnFlexbox'
import LearnNormal from './components/page/LearnNormal'
import LearnLeft from './components/page/LearnLeft'
import LearnCenter from './components/page/LearnCenter'
import LearnRight from './components/page/LearnRight'
import LearnTop from './components/page/LearnTop'
import LearnMiddle from './components/page/LearnMiddle'
import LearnBottom from './components/page/LearnBottom'
import LearnBetween from './components/page/LearnBetween'
import LearnAround from './components/page/LearnAround'
import LearnBaseline from './components/page/LearnBaseline'
import LearnFirst from './components/page/LearnFirst'
import LearnNotFirst from './components/page/LearnNotFirst'
import LearnLast from './components/page/LearnLast'
import LearnNotLast from './components/page/LearnNotLast'
import LearnReverse from './components/page/LearnReverse'
import LearnNotReverse from './components/page/LearnNotReverse'
import LearnMasonry from './components/page/LearnMasonry'
import LearnBreakpoint from './components/page/LearnBreakpoint'
import Compatibility from './components/page/Compatibility'
import Motivation from './components/page/Motivation'
import Future from './components/page/Future'
import PageNotFound from './components/page/PageNotFound'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}/>
    <Route path="/install" component={Install}/>
    <Route path="/install/scss" component={InstallScss}/>
    <Route path="/install/sass" component={InstallSass}/>
    <Route path="/install/less" component={InstallLess}/>
    <Route path="/install/stylus" component={InstallStylus}/>
    <Route path="/install/scss-plus" component={InstallScssPlus}/>
    <Route path="/install/css" component={InstallCSS}/>
    <Route path="/install/bem" component={InstallBEM}/>
    <Route path="/learn" component={Learn}/>
    <Route path="/learn/wrap" component={LearnWrap}/>
    <Route path="/learn/col" component={LearnCol}/>
    <Route path="/learn/col-row" component={LearnColRow}/>
    <Route path="/learn/hidden" component={LearnHidden}/>
    <Route path="/learn/not-hidden" component={LearnNotHidden}/>
    <Route path="/learn/gutter" component={LearnGutter}/>
    <Route path="/learn/outside" component={LearnOutside}/>
    <Route path="/learn/wrap-col" component={LearnWrapCol}/>
    <Route path="/learn/auto" component={LearnAuto}/>
    <Route path="/learn/table" component={LearnTable}/>
    <Route path="/learn/width" component={LearnWidth}/>
    <Route path="/learn/flexbox" component={LearnFlexbox}/>
    <Route path="/learn/normal" component={LearnNormal}/>
    <Route path="/learn/left" component={LearnLeft}/>
    <Route path="/learn/center" component={LearnCenter}/>
    <Route path="/learn/right" component={LearnRight}/>
    <Route path="/learn/top" component={LearnTop}/>
    <Route path="/learn/middle" component={LearnMiddle}/>
    <Route path="/learn/bottom" component={LearnBottom}/>
    <Route path="/learn/between" component={LearnBetween}/>
    <Route path="/learn/around" component={LearnAround}/>
    <Route path="/learn/baseline" component={LearnBaseline}/>
    <Route path="/learn/first" component={LearnFirst}/>
    <Route path="/learn/not-first" component={LearnNotFirst}/>
    <Route path="/learn/last" component={LearnLast}/>
    <Route path="/learn/not-last" component={LearnNotLast}/>
    <Route path="/learn/reverse" component={LearnReverse}/>
    <Route path="/learn/not-reverse" component={LearnNotReverse}/>
    <Route path="/learn/masonry" component={LearnMasonry}/>
    <Route path="/learn/breakpoint" component={LearnBreakpoint}/>
    <Route path="/compatibility" component={Compatibility}/>
    <Route path="/motivation" component={Motivation}/>
    <Route path="/future" component={Future}/>
    <Route path="*" component={PageNotFound}/>
  </Router>
)

LanguageAction.initApp();

ReactDOM.render(routes, document.getElementById('app'));
