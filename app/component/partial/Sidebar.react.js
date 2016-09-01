"use strict";

import React from 'react';
import { Link } from 'react-router'

var Sidebar = React.createClass({
  render: function() {

    var inputEmailClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-ffscp xl-pl16 lg-pl8 md-pl16";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-brr8";

    var mailchimpForm = '<form class="wrap" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id='+ this.props.mailchimp.id +'" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-8-12"><input type="email" name="EMAIL" class="'+ inputEmailClass +'" placeholder="'+ this.props.mailchimp.emailAddress +'" /><div style="position: absolute; left: -5000px;"><input type="text" name="'+ this.props.mailchimp.name +'" tabindex="-1"/></div></div><div class="col xl-4-12"><input type="submit" class="'+ inputSubmitClass +'" value="'+ this.props.mailchimp.subscribe +'" name="subscribe" /></div></form>';

    return (
      <div>
        {!this.props.page &&
          <div>
            <a
              href="https://youtu.be/4306ejHx17Y"
              target="_target"
              className="flexiblegs-presentation xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb24 xl-br8 xl-oh">
              <em className="icon-youtube-play icon-xl xl-1-1 xl-tac xl-pa xl-t50p xl-tty-50p" />
            </a>
            <div dangerouslySetInnerHTML={{__html:mailchimpForm}}/>
          </div>
        }
        {this.props.page == "install" &&
          <div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18">
              {this.props.content.install}
            </div>
            <div className="xl-mb24 xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.dynamicCore}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/scss"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  Scss
                </Link>
                <Link
                  to="/install/sass"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  Sass
                </Link>
                <Link
                  to="/install/less"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  Less
                </Link>
                <Link
                  to="/install/stylus"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1">
                  Stylus
                </Link>
              </div>
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.dynamicCompilationTool}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/scss-plus"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  Scss Plus
                </Link>
                <div
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt">
                  Sass Plus
                </div>
                <div
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt">
                  Less Plus
                </div>
                <div
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-gray-500 xl-bo-white xl-bwb1 xl-tdlt">
                  Stylus Plus
                </div>
              </div>
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.staticCompiled}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/css"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  CSS
                </Link>
                <Link
                  to="/install/bem"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1">
                  BEM
                </Link>
              </div>
            </div>
          </div>
        }
        {this.props.page == "learn" &&
          <div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18">
              {this.props.content.learn}
            </div>
            <div className="xl-mb24 xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                <div className="wrap xl-flexbox xl-between xl-auto">
                  <div className="col xl-fs14">Static (Compiled)</div>
                  <div className="col xl-fs14 xl-fw600">CSS</div>
                </div>
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/wrap">wrap</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/col">col</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/col-row">col-row</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/hidden">hidden</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-hidden">not-hidden</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/gutter">gutter</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/outside">outside</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/wrap-col">wrap-col</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/auto">auto</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/table">table</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/width">width</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/flexbox">flexbox</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/normal">normal</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/left">left</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/center">center</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/right">right</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/top">top</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/middle">middle</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/bottom">bottom</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/between">between</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/around">around</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/baseline">baseline</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/first">first</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-first">not-first</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/last">last</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-last">not-last</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/reverse">reverse</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/not-reverse">not-reverse</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1" to="/learn/masonry">masonry</Link>
                <Link className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1" to="/learn/breakpoint">breakpoint</Link>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
});

module.exports = Sidebar;
