"use strict";

import React from 'react';
import { Link } from 'react-router'

const queryString = require('query-string');

var Sidebar = React.createClass({

  render: function() {

    var inputEmailClass = "xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-brr0 xl-ffscp xl-pl16 lg-pl8 md-pl16 pl-co-gray-500";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-brl0 xl-ffscp";

    var mailchimpForm = '<form class="wrap" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id='+ this.props.mailchimp.id +'" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-7-12"><input type="email" name="EMAIL" class="'+ inputEmailClass +'" placeholder="'+ this.props.mailchimp.emailAddress +'" /><div style="position: absolute; left: -5000px;"><input type="text" name="'+ this.props.mailchimp.name +'" tabindex="-1"/></div></div><div class="col xl-5-12"><input type="submit" class="'+ inputSubmitClass +'" value="'+ this.props.mailchimp.subscribe +'" name="subscribe" /></div></form>';

    const parsed = queryString.parse(location.search);

    var linkWrap = "/learn/wrap?type=" + parsed.type + "#wrap";
    var linkCol = "/learn/col?type=" + parsed.type + "#col";
    var linkColRow = "/learn/col-row?type=" + parsed.type + "#col-row";
    var linkHidden = "/learn/hidden?type=" + parsed.type + "#hidden";
    var linkNotHidden = "/learn/not-hidden?type=" + parsed.type + "#not-hidden";
    var linkGutter = "/learn/gutter?type=" + parsed.type + "#gutter";
    var linkOutside = "/learn/outside?type=" + parsed.type + "#outside";
    var linkWrapCol = "/learn/wrap-col?type=" + parsed.type + "#wrap-col";
    var linkAuto = "/learn/auto?type=" + parsed.type + "#auto";
    var linkTable = "/learn/table?type=" + parsed.type + "#table";
    var linkWidth = "/learn/width?type=" + parsed.type + "#width";
    var linkFlexbox = "/learn/flexbox?type=" + parsed.type + "#flexbox";
    var linkNormal = "/learn/normal?type=" + parsed.type + "#normal";
    var linkLeft = "/learn/left?type=" + parsed.type + "#left";
    var linkCenter = "/learn/center?type=" + parsed.type + "#center";
    var linkRight = "/learn/right?type=" + parsed.type + "#right";
    var linkTop = "/learn/top?type=" + parsed.type + "#top";
    var linkMiddle = "/learn/middle?type=" + parsed.type + "#middle";
    var linkBottom = "/learn/bottom?type=" + parsed.type + "#bottom";
    var linkBetween = "/learn/between?type=" + parsed.type + "#between";
    var linkAround = "/learn/around?type=" + parsed.type + "#around";
    var linkBaseline = "/learn/baseline?type=" + parsed.type + "#baseline";
    var linkFirst = "/learn/first?type=" + parsed.type + "#first";
    var linkNotFirst = "/learn/not-first?type=" + parsed.type + "#not-first";
    var linkLast = "/learn/last?type=" + parsed.type + "#last";
    var linkNotLast = "/learn/not-last?type=" + parsed.type + "#not-last";
    var linkReverse = "/learn/reverse?type=" + parsed.type + "#reverse";
    var linkNotReverse = "/learn/not-reverse?type=" + parsed.type + "#not-reverse";
    var linkMasonry = "/learn/masonry?type=" + parsed.type + "#masonry";
    var linkBreakpoint = "/learn/breakpoint?type=" + parsed.type + "#breakpoint";

    var linkClass          = "xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-200 xl-ba-white xl-co-black-500 xl-bwb1 xl-bo-gray-200";
    var linkClassLastChild = "xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-100 xl-ba-white xl-co-black-500 xl-bwb1 xl-bo-white";
    var linkClassActive    = "xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-green-300 xl-co-white xl-bwb1 xl-bo-green-300";

    var pathArray = window.location.pathname.split( '/' );
    var path = pathArray[1] +"/"+ pathArray[2];

    return (
      <div>
        {!this.props.page &&
          <div>
            <Link to="/learn/wrap?type=css" className="xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb16 xl-tac">
              <em className="icon-rocket icon-sm xl-co-white"/>
              <span className="xl-di xl-vam xl-pl8">
                {this.props.common.quickStart} (CSS)
              </span>
            </Link>
            <a
              href="https://youtu.be/4306ejHx17Y"
              target="_target"
              className="flexiblegs-presentation xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb16 xl-br8 xl-oh">
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
                  className={path == "install/scss" ? linkClassActive : linkClass}>
                  Scss
                </Link>
                <Link
                  to="/install/sass"
                  className={path == "install/sass" ? linkClassActive : linkClass}>
                  Sass
                </Link>
                <Link
                  to="/install/less"
                  className={path == "install/less" ? linkClassActive : linkClass}>
                  Less
                </Link>
                <Link
                  to="/install/stylus"
                  className={path == "install/stylus" ? linkClassActive : linkClassLastChild}>
                  Stylus
                </Link>
              </div>
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.dynamicCompilationTool}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/scss-plus"
                  className={path == "install/scss-plus" ? linkClassActive : linkClass}>
                  Scss Plus
                </Link>
                <div
                  className="xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt">
                  Sass Plus
                </div>
                <div
                  className="xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt">
                  Less Plus
                </div>
                <div
                  className="xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-white xl-bwb1 xl-tdlt">
                  Stylus Plus
                </div>
              </div>
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.staticCompiled}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/css"
                  className={path == "install/css" ? linkClassActive : linkClass}>
                  CSS
                </Link>
                <Link
                  to="/install/bem"
                  className={path == "install/bem" ? linkClassActive : linkClassLastChild}>
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
            <div className="menu-scroll xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oa">
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
                  id="wrap"
                  className={path == "learn/wrap" ? linkClassActive : linkClass}>
                  wrap
                </Link>
                <Link
                  to={linkCol}
                  id="col"
                  className={path == "learn/col" ? linkClassActive : linkClass}>
                  col
                </Link>
                <Link
                  to={linkColRow}
                  id="col-row"
                  className={path == "learn/col-row" ? linkClassActive : linkClass}>
                  col(@col,@row)
                </Link>
                <Link
                  to={linkHidden}
                  id="hidden"
                  className={path == "learn/hidden" ? linkClassActive : linkClass}>
                  col(hidden)
                </Link>
                <Link
                  to={linkNotHidden}
                  id="not-hidden"
                  className={path == "learn/not-hidden" ? linkClassActive : linkClass}>
                  col(not-hidden)
                </Link>
                <Link
                  to={linkGutter}
                  id="gutter"
                  className={path == "learn/gutter" ? linkClassActive : linkClass}>
                  wrap(gutter,@width)
                </Link>
                <Link
                  to={linkOutside}
                  id="outside"
                  className={path == "learn/outside" ? linkClassActive : linkClass}>
                  wrap(outside,@width)
                </Link>
                <Link
                  to={linkWrapCol}
                  id="wrap-col"
                  className={path == "learn/wrap-col" ? linkClassActive : linkClass}>
                  wrap(@col)
                </Link>
                <Link
                  to={linkAuto}
                  id="auto"
                  className={path == "learn/auto" ? linkClassActive : linkClass}>
                  wrap(auto)
                </Link>
                <Link
                  to={linkTable}
                  id="table"
                  className={path == "learn/table" ? linkClassActive : linkClass}>
                  wrap(table)
                </Link>
                {/*<Link
                  to={linkWidth}
                  id="width"
                  className={path == "learn/width" ? linkClassActive : linkClass}>
                  col(@width)
                </Link>*/}
                <div className="xl-db xl-py8 xl-px16 xl-ba-white xl-co-gray-500 xl-bwb1 xl-bo-gray-200 xl-cn xl-tdlt">
                  col(@width)
                </div>
                <Link
                  to={linkFlexbox}
                  id="flexbox"
                  className={path == "learn/flexbox" ? linkClassActive : linkClass}>
                  wrap(flexbox)
                </Link>
                <Link
                  to={linkNormal}
                  id="normal"
                  className={path == "learn/normal" ? linkClassActive : linkClass}>
                  wrap(normal)
                </Link>
                <Link
                  to={linkLeft}
                  id="left"
                  className={path == "learn/left" ? linkClassActive : linkClass}>
                  wrap(left)
                </Link>
                <Link
                  to={linkCenter}
                  id="center"
                  className={path == "learn/center" ? linkClassActive : linkClass}>
                  wrap(center)
                </Link>
                <Link
                  to={linkRight}
                  id="right"
                  className={path == "learn/right" ? linkClassActive : linkClass}>
                  wrap(right)
                </Link>
                <Link
                  to={linkTop}
                  id="top"
                  className={path == "learn/top" ? linkClassActive : linkClass}>
                  wrap(top)
                </Link>
                <Link
                  to={linkMiddle}
                  id="middle"
                  className={path == "learn/middle" ? linkClassActive : linkClass}>
                  wrap(middle)
                </Link>
                <Link
                  to={linkBottom}
                  id="bottom"
                  className={path == "learn/bottom" ? linkClassActive : linkClass}>
                  wrap(bottom)
                </Link>
                <Link
                  to={linkBetween}
                  id="between"
                  className={path == "learn/between" ? linkClassActive : linkClass}>
                  wrap(between)
                </Link>
                <Link
                  to={linkAround}
                  id="around"
                  className={path == "learn/around" ? linkClassActive : linkClass}>
                  wrap(around)
                </Link>
                <Link
                  to={linkBaseline}
                  id="baseline"
                  className={path == "learn/baseline" ? linkClassActive : linkClass}>
                  wrap(baseline)
                </Link>
                <Link
                  to={linkFirst}
                  id="first"
                  className={path == "learn/first" ? linkClassActive : linkClass}>
                  col(first)
                </Link>
                <Link
                  to={linkNotFirst}
                  id="not-first"
                  className={path == "learn/not-first" ? linkClassActive : linkClass}>
                  col(not-first)
                </Link>
                <Link
                  to={linkLast}
                  id="last"
                  className={path == "learn/last" ? linkClassActive : linkClass}>
                  col(last)
                </Link>
                <Link
                  to={linkNotLast}
                  id="not-last"
                  className={path == "learn/not-last" ? linkClassActive : linkClass}>
                  col(not-last)
                </Link>
                <Link
                  to={linkReverse}
                  id="reverse"
                  className={path == "learn/reverse" ? linkClassActive : linkClass}>
                  wrap(reverse)
                </Link>
                <Link
                  to={linkNotReverse}
                  id="not-reverse"
                  className={path == "learn/not-reverse" ? linkClassActive : linkClass}>
                  wrap(not-reverse)
                </Link>
                <Link
                  to={linkMasonry}
                  id="masonry"
                  className={path == "learn/masonry" ? linkClassActive : linkClass}>
                  wrap(masonry,@col)
                </Link>
                <Link
                  to={linkBreakpoint}
                  id="breakpoint"
                  className={path == "learn/breakpoint" ? linkClassActive : linkClassLastChild}>
                  breakpoint
                </Link>
              </div>
            </div>
          </div>
        }
        <div className="xl-ffscp xl-fs14 xl-tac xl-co-gray-500 xl-mt16">v5.5.3</div>
      </div>
    );
  }
});

module.exports = Sidebar;
