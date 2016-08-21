"use strict";

import React from 'react';

var InstallContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div className="wrap xl-2 xl-gutter-16 xl-top xl-mt8 sm-1">
          <div className="col xl-fs18">
            <div className="xl-fw600">{this.props.common.static}</div>
            <div dangerouslySetInnerHTML={{__html:this.props.content.line003}}></div>
          </div>
          <div className="col xl-fs18 sm-mt8">
            <div className="xl-fw600">{this.props.common.dynamic}</div>
            <div dangerouslySetInnerHTML={{__html:this.props.content.line004}}></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InstallContent;
