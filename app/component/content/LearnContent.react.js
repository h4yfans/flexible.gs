"use strict";

import React from 'react';
import { Link } from 'react-router'

var LearnContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div className="xl-fw600 xl-fs18 xl-mt8">
          {this.props.common.responsiveMeta}
        </div>
        <div className="xl-py8">
          <pre>{/*
            */}&lt;head&gt;<br/>{/*
            */}&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;<br/>{/*
            */}&lt;/head&gt;{/*
          */}</pre>
        </div>
        <div className="xl-fw600 xl-fs18 xl-mt8">
          {this.props.common.compiledView}
        </div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line003}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line004}}></div>
        <div className="wrap xl-3 xl-gutter-24 lg-1 xl-mt24 xl-mb8">
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.dynamicCore}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8">
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?type=scss"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Scss
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?type=sass"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Sass
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?type=less"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Less
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?type=stylus"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Stylus
                </Link>
              </div>
            </div>
          </div>
          <div className="col xl-fs18 lg-my24">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.dynamicCompilationTool}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8">
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/scss-plus">Scss Plus
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt">Sass Plus</div>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt">Less Plus</div>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt">Stylus Plus</div>
              </div>
            </div>
          </div>
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.staticCompiled}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8">
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?type=css"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  CSS
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?type=bem"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  BEM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnContent;