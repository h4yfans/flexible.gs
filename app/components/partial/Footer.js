"use strict";

import React from 'react';

var Footer = React.createClass({
  render: function() {
    return (
      <div className="wrap xl-2 xl-ffscp xl-mb24 xl-co-gray-500 xl-mt24">
        <div className="col xl-fs14 xl-tal">
          {this.props.content.keyboardShortcuts}
        </div>
        <div className="col xl-fs14 xl-tar">
          {this.props.content.iLoveFlexibleGridSystem}
        </div>
      </div>
    );
  }
});

module.exports = Footer;
