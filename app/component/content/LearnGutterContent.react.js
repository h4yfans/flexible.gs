"use strict";

import React from 'react';

var LearnGutterContent = React.createClass({
  render: function() {
    return (
      <div>

        <div className="preview preview--last-child">
          <div className="wrap xl-gutter-24 preview__item--wrap">
            <div className="col xl-3-12"><div className="preview__item--col">01</div></div>
            <div className="col xl-6-12"><div className="preview__item--col">02</div></div>
            <div className="col xl-3-12"><div className="preview__item--col">03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnGutterContent;
