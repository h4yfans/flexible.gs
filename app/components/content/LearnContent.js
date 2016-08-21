"use strict";

import React from 'react';

var LearnContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div className="xl-fw600 xl-fs18 xl-mt8">{this.props.common.responsiveMeta}</div>
        <div className="xl-fw600 xl-fs18 xl-mt8">{this.props.common.compiledView}</div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line003}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line004}}></div>
        <div className="wrap xl-2 xl-gutter-16 xl-mt8 sm-1">
          <div className="col xl-fs18">
            <div className="xl-fw600">{this.props.common.static}</div>
          </div>
          <div className="col xl-fs18 sm-mt8">
            <div className="xl-fw600">{this.props.common.dynamic}</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnContent;
