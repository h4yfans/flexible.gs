"use strict";

import React from 'react';
import { Link } from 'react-router'

const queryString = require('query-string');

var Sidebar = React.createClass({

  getInitialState: function() {
    return {
      type: "css",
      menuType: "CSS",
      menuDescription: this.props.common.staticCompiled
    };
  },

  componentWillMount: function() {
    const parsed = queryString.parse(location.search);

    if(parsed.type == "scss" || parsed.type == "sass" || parsed.type == "less" || parsed.type == "stylus") {
      this.setState({ menuDescription: this.props.common.dynamicCore });
    }
    else if (parsed.type == "css" || parsed.type == "bem") {
      this.setState({ menuDescription: this.props.common.staticCompiled });
    }

    if (parsed.type == "scss") {
      this.setState({
        type: parsed.type,
        menuType: "Scss"
      });
    }
    else if (parsed.type == "sass") {
      this.setState({
        type: parsed.type,
        menuType: "Sass"
      });
    }
    else if (parsed.type == "less") {
      this.setState({
        type: parsed.type,
        menuType: "Less"
      });
    }
    else if (parsed.type == "stylus") {
      this.setState({
        type: parsed.type,
        menuType: "Stylus"
      });
    }
    else if(parsed.type == "css") {
      this.setState({
        type: parsed.type,
        menuType: "CSS"
      });
    }
    else if (parsed.type == "bem") {
      this.setState({
        type: parsed.type,
        menuType: "BEM"
      });
    }
  },

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
            <div className="xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
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
            <div className="xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                <div className="wrap xl-flexbox xl-between xl-auto">
                  <div className="col xl-fs14">
                    {this.state.menuDescription}
                  </div>
                  <div className="col xl-fs14 xl-fw600">
                    {this.state.menuType}
                  </div>
                </div>
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/learn/wrap"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  wrap
                </Link>
                <Link
                  to="/learn/col"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  col
                </Link>
                <Link
                  to="/learn/col-row"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  col-row
                </Link>
                <Link
                  to="/learn/hidden"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  hidden
                </Link>
                <Link
                  to="/learn/not-hidden"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-hidden
                </Link>
                <Link
                  to="/learn/gutter"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  gutter
                </Link>
                <Link
                  to="/learn/outside"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  outside
                </Link>
                <Link
                  to="/learn/wrap-col"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  wrap-col
                </Link>
                <Link
                  to="/learn/auto"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  auto
                </Link>
                <Link
                  to="/learn/table"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  table
                </Link>
                <Link
                  to="/learn/width"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  width
                </Link>
                <Link
                  to="/learn/flexbox"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  flexbox
                </Link>
                <Link
                  to="/learn/normal"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  normal
                </Link>
                <Link
                  to="/learn/left"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  left
                </Link>
                <Link
                  to="/learn/center"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  center
                </Link>
                <Link
                  to="/learn/right"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  right
                </Link>
                <Link
                  to="/learn/top"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  top
                </Link>
                <Link
                  to="/learn/middle"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  middle
                </Link>
                <Link
                  to="/learn/bottom"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  bottom
                </Link>
                <Link
                  to="/learn/between"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  between
                </Link>
                <Link
                  to="/learn/around"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  around
                </Link>
                <Link
                  to="/learn/baseline"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  baseline
                </Link>
                <Link
                  to="/learn/first"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  first
                </Link>
                <Link
                  to="/learn/not-first"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-first
                </Link>
                <Link
                  to="/learn/last"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  last
                </Link>
                <Link
                  to="/learn/not-last"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-last
                </Link>
                <Link
                  to="/learn/reverse"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  reverse
                </Link>
                <Link
                  to="/learn/not-reverse"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-reverse
                </Link>
                <Link
                  to="/learn/masonry"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  masonry
                </Link>
                <Link
                  to="/learn/breakpoint"
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-white xl-bwb1">
                  breakpoint
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
});

module.exports = Sidebar;
