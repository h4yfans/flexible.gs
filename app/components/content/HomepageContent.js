"use strict";

import React from 'react';

var HomepageContent = React.createClass({
  render: function() {
    return (
      <div>
        <div>{this.props.content.line001}</div>
        <div>{this.props.content.line002}</div>
      </div>
    )
  }
});

module.exports = HomepageContent;
