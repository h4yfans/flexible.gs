"use strict";

import React from 'react';
import { Link } from 'react-router'

const queryString = require('query-string');

var Sidebar = React.createClass({

  render: function() {

    var inputEmailClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-ffscp xl-pl16 lg-pl8 md-pl16";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-brr8";

    var mailchimpForm = '<form class="wrap" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id='+ this.props.mailchimp.id +'" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-8-12"><input type="email" name="EMAIL" class="'+ inputEmailClass +'" placeholder="'+ this.props.mailchimp.emailAddress +'" /><div style="position: absolute; left: -5000px;"><input type="text" name="'+ this.props.mailchimp.name +'" tabindex="-1"/></div></div><div class="col xl-4-12"><input type="submit" class="'+ inputSubmitClass +'" value="'+ this.props.mailchimp.subscribe +'" name="subscribe" /></div></form>';

    const parsed = queryString.parse(location.search);

    var linkWrap = "/learn/wrap?type=" + parsed.type;
    var linkCol = "/learn/col?type=" + parsed.type;
    var linkColRow = "/learn/col-row?type=" + parsed.type;
    var linkHidden = "/learn/hidden?type=" + parsed.type;
    var linkNotHidden = "/learn/not-hidden?type=" + parsed.type;
    var linkGutter = "/learn/gutter?type=" + parsed.type;
    var linkOutside = "/learn/outside?type=" + parsed.type;
    var linkWrapCol = "/learn/wrap-col?type=" + parsed.type;
    var linkAuto = "/learn/auto?type=" + parsed.type;
    var linkTable = "/learn/table?type=" + parsed.type;
    var linkWidth = "/learn/width?type=" + parsed.type;
    var linkFlexbox = "/learn/flexbox?type=" + parsed.type;
    var linkNormal = "/learn/normal?type=" + parsed.type;
    var linkLeft = "/learn/left?type=" + parsed.type;
    var linkCenter = "/learn/center?type=" + parsed.type;
    var linkRight = "/learn/right?type=" + parsed.type;
    var linkTop = "/learn/top?type=" + parsed.type;
    var linkMiddle = "/learn/middle?type=" + parsed.type;
    var linkBottom = "/learn/bottom?type=" + parsed.type;
    var linkBetween = "/learn/between?type=" + parsed.type;
    var linkAround = "/learn/around?type=" + parsed.type;
    var linkBaseline = "/learn/baseline?type=" + parsed.type;
    var linkFirst = "/learn/first?type=" + parsed.type;
    var linkNotFirst = "/learn/not-first?type=" + parsed.type;
    var linkLast = "/learn/last?type=" + parsed.type;
    var linkNotLast = "/learn/not-last?type=" + parsed.type;
    var linkReverse = "/learn/reverse?type=" + parsed.type;
    var linkNotReverse = "/learn/not-reverse?type=" + parsed.type;
    var linkMasonry = "/learn/masonry?type=" + parsed.type;
    var linkBreakpoint = "/learn/breakpoint?type=" + parsed.type;

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
                    {(() => {
                      switch (parsed.type) {
                        case "scss": return this.props.common.dynamicCore;
                        case "sass": return this.props.common.dynamicCore;
                        case "less": return this.props.common.dynamicCore;
                        case "stylus": return this.props.common.dynamicCore;
                        case "css": return this.props.common.staticCompiled;
                        case "bem": return this.props.common.staticCompiled;
                        default: return this.props.common.staticCompiled;
                      }
                    })()}
                  </div>
                  <div className="col xl-fs14 xl-fw600">
                    {(() => {
                      switch (parsed.type) {
                        case "scss": return "Scss";
                        case "sass": return "Sass";
                        case "less": return "Less";
                        case "stylus": return "Stylus";
                        case "css": return "CSS";
                        case "bem": return "BEM";
                        default: return "CSS";
                      }
                    })()}
                  </div>
                </div>
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to={linkWrap}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  wrap
                </Link>
                <Link
                  to={linkCol}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  col
                </Link>
                <Link
                  to={linkColRow}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  col-row
                </Link>
                <Link
                  to={linkHidden}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  hidden
                </Link>
                <Link
                  to={linkNotHidden}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-hidden
                </Link>
                <Link
                  to={linkGutter}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  gutter
                </Link>
                <Link
                  to={linkOutside}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  outside
                </Link>
                <Link
                  to={linkWrapCol}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  wrap-col
                </Link>
                <Link
                  to={linkAuto}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  auto
                </Link>
                <Link
                  to={linkTable}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  table
                </Link>
                <Link
                  to={linkWidth}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  width
                </Link>
                <Link
                  to={linkFlexbox}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  flexbox
                </Link>
                <Link
                  to={linkNormal}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  normal
                </Link>
                <Link
                  to={linkLeft}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  left
                </Link>
                <Link
                  to={linkCenter}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  center
                </Link>
                <Link
                  to={linkRight}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  right
                </Link>
                <Link
                  to={linkTop}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  top
                </Link>
                <Link
                  to={linkMiddle}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  middle
                </Link>
                <Link
                  to={linkBottom}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  bottom
                </Link>
                <Link
                  to={linkBetween}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  between
                </Link>
                <Link
                  to={linkAround}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  around
                </Link>
                <Link
                  to={linkBaseline}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  baseline
                </Link>
                <Link
                  to={linkFirst}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  first
                </Link>
                <Link
                  to={linkNotFirst}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-first
                </Link>
                <Link
                  to={linkLast}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  last
                </Link>
                <Link
                  to={linkNotLast}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-last
                </Link>
                <Link
                  to={linkReverse}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  reverse
                </Link>
                <Link
                  to={linkNotReverse}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  not-reverse
                </Link>
                <Link
                  to={linkMasonry}
                  className="xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-white xl-co-black-500 xl-bo-gray-200 xl-bwb1">
                  masonry
                </Link>
                <Link
                  to={linkBreakpoint}
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
