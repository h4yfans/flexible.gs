"use strict";

import React from 'react';

var HeaderContent = React.createClass({
  render: function() {
    return (
      <div className="xl-lh40 xl-fs24 xl-fw600 xl-mb8">{this.props.content}</div>
    );
  }
});

module.exports = HeaderContent;
