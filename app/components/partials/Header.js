"use strict";

import React from 'react';
import { Link } from 'react-router'

let LanguageActions = require('../../actions/LanguageActions');

var Header = React.createClass({

  switchLanguage: function(key, event) {
    LanguageActions.switchLanguage(key);
  },

  render: function() {
    return (
      <div className="xl-tal xl-py8 xl-px24 xl-ba-black-500 xl-co-white">
        <div className="xl-maw1280 xl-ma">
          <div className="wrap xl-flexbox xl-between">
            <div className="col">
              <Link className="icon-flexiblegs xl-vam xl-dib xl-p8 xl-mr8 xl-co-white ho-co-gray-500" to="/"></Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/">{this.props.content.general.homepage}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/install">{this.props.content.general.install}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/learn">{this.props.content.general.learn}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/compatibility">{this.props.content.general.compatibility}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/responsive-test">{this.props.content.general.responsive_test}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/motivation">{this.props.content.general.motivation}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/future">{this.props.content.general.future}</Link>
            </div>
            <div className="col">
              <a href="https://github.com/flexiblegs" target="_blank" className="icon-github-alt icon-sm xl-vam xl-dib xl-co-black-100 ho-co-white xl-p8 xl-mr8"></a>
              <a href="https://twitter.com/flexiblegs" target="_blank" className="icon-twitter icon-sm xl-vam xl-dib xl-co-black-100 ho-co-white xl-p8 xl-mr8"></a>
              <a href="https://www.youtube.com/channel/UCik0QP2GXULQfQTl7VGzDWA" target="_blank" className="icon-youtube-play icon-sm xl-vam xl-dib xl-co-black-100 ho-co-white xl-p8 xl-mr16"></a>
              <a
                href="#"
                data-target="#"
                className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white"
                onClick={this.switchLanguage.bind(this,'en')}>
                English
              </a>
              <a
                href="#"
                data-target="#"
                className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white"
                onClick={this.switchLanguage.bind(this,'tr')}>
                Turkish
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
