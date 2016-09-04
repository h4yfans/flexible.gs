"use strict";

import React from 'react';

var LearnNotLastContent = React.createClass({
  render: function() {
    return (
      <div>

        <div className="preview preview--last-child">
          <div className="tag tag--middle">flexbox</div>
          <div className="wrap xl-flexbox xl-gutter-24 xl-3 preview__item--wrap">
            <div className="col xl-not-last"><div className="preview__item--col">01</div></div>
            <div className="col"><div className="preview__item--col">02</div></div>
            <div className="col"><div className="preview__item--col">03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnNotLastContent;
