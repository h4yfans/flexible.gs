"use strict";

import React from 'react';
import { Link } from 'react-router'

var InstallContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div className="wrap xl-3 xl-gutter-24 lg-1 xl-mt24 xl-mb8">
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">{this.props.common.dynamic}</div>
            <div className="xl-bo-gray-200 xl-bw2 xl-px16 xl-py8">
              <div className="wrap xl-1 xl-gutter-24">
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/scss">Scss</Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/sass">Sass</Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/less">Less</Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/stylus">Stylus</Link>
                </div>
              </div>
            </div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8" dangerouslySetInnerHTML={{__html:this.props.content.line003}}></div>
          </div>
          <div className="col xl-fs18 lg-my24">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">{this.props.common.compilationTool}</div>
            <div className="xl-bo-gray-200 xl-bw2 xl-px16 xl-py8">
              <div className="wrap xl-1 xl-gutter-24">
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/scss-plus">Scss Plus</Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <a className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt" href="#">Sass Plus</a>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <a className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt" href="#">Less Plus</a>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <a className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt" href="#">Stylus Plus</a>
                </div>
              </div>
            </div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8" dangerouslySetInnerHTML={{__html:this.props.content.line004}}></div>
          </div>
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">{this.props.common.static}</div>
            <div className="xl-bo-gray-200 xl-bw2 xl-px16 xl-py8">
              <div className="wrap xl-1 xl-gutter-24">
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/css">CSS</Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/bem">BEM</Link>
                </div>
              </div>
            </div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8" dangerouslySetInnerHTML={{__html:this.props.content.line005}}></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InstallContent;
