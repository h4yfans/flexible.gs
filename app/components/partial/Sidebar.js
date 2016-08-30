"use strict";

import React from 'react';
import { Link } from 'react-router'

var Sidebar = React.createClass({
  render: function() {

    var inputEmailClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-ffscp xl-pl16 lg-pl8 md-pl16";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-brr8";
    var mailchimp = '<form class="wrap xl-top" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id='+ this.props.mailchimp.id +'" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-8-12"><input type="email" name="EMAIL" class="'+ inputEmailClass +'" placeholder="'+ this.props.mailchimp.emailAddress +'" /><div style="position: absolute; left: -5000px;"><input type="text" name="'+ this.props.mailchimp.name +'" tabindex="-1"/></div></div><div class="col xl-4-12"><input type="submit" class="'+ inputSubmitClass +'" value="'+ this.props.mailchimp.subscribe +'" name="subscribe" /></div></form>';

    return (
      <div>

        {/*<div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18">Install</div>
        <div className="xl-mb24 xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
          <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">{this.props.common.dynamic}</div>
          <div className="xl-pl8 xl-ba-gray-100">
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/install/scss">Scss</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/install/sass">Sass</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/install/less">Less</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1" to="/install/stylus">Stylus</Link>
          </div>
          <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">{this.props.common.compilationTool}</div>
          <div className="xl-pl8 xl-ba-gray-100">
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/install/scss-plus">Scss Plus</Link>
            <a className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt" href="#">Sass Plus</a>
            <a className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt" href="#">Less Plus</a>
            <a className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-gray-500 xl-bo-white xl-bwb1 xl-tdlt" href="#">Stylus Plus</a>
          </div>
          <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">{this.props.common.static}</div>
          <div className="xl-pl8 xl-ba-gray-100">
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/install/css">CSS</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1" to="/install/bem">BEM</Link>
          </div>
        </div>

        <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18">Learn</div>
        <div className="xl-mb24 xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
          <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
            <span className="xl-fw600 xl-pr4">CSS</span>{this.props.common.static}
          </div>
          <div className="xl-pl8 xl-ba-gray-100">
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/wrap">wrap (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/col">col (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/col-row">col-row (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/hidden">hidden (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-hidden">not-hidden (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/gutter">gutter (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/outside">outside (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/wrap-col">wrap-col (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/auto">auto (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/table">table (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/width">width (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/flexbox">flexbox (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/normal">normal (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/left">left (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/center">center (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/right">right (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/top">top (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/middle">middle (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/bottom">bottom (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/between">between (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/around">around (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/baseline">baseline (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/first">first (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-first">not-first (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/last">last (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-last">not-last (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/reverse">reverse (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-reverse">not-reverse (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/masonry">masonry (css)</Link>
            <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1" to="/learn/breakpoint">breakpoint (css)</Link>
          </div>
        </div>*/}

        <a href="https://youtu.be/4306ejHx17Y" target="_target" className="xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb24 xl-br8 xl-oh flexiblegs-presentation">
          <em className="xl-1-1 xl-tac xl-pa xl-t50p xl-tty-50p icon-youtube-play icon-xl" />
        </a>
        <div dangerouslySetInnerHTML={{__html:mailchimp}}/>
      </div>
    );
  }
});

module.exports = Sidebar;
