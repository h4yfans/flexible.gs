"use strict";

import React from 'react';
import { Link } from 'react-router'

let LanguageAction = require('../../action/LanguageAction');

var Header = React.createClass({

  switchLanguage: function(key, event) {
    LanguageAction.switchLanguage(key);
  },

  render: function() {
    return (
      <div className="xl-tal xl-py8 xl-px24 xl-ba-black-500 xl-co-white">
        <div className="xl-maw1280 xl-ma">
          <div className="wrap xl-gutter-24 xl-middle">
            <div className="col xl-9-12">
              <Link className="icon-flexiblegs xl-vam xl-dib xl-p8 xl-mr8 xl-co-white ho-co-gray-500" to="/"></Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/">{this.props.content.homepage}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/install">{this.props.content.install}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/learn">{this.props.content.learn}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/compatibility">{this.props.content.compatibility}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/responsive-test">{this.props.content.responsiveTest}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/motivation">{this.props.content.motivation}</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/future">{this.props.content.future}</Link>
            </div>
            <div className="col xl-3-12 xl-tar">
              <a href="https://github.com/flexiblegs/flexiblegs-scss-plus/stargazers" target="_blank" className="icon-github-alt icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr8"></a>
              <a href="https://twitter.com/flexiblegs" target="_blank" className="icon-twitter icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr8"></a>
              <a href="https://goo.gl/6n5oTO" target="_blank" className="icon-youtube-play icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr16"></a>
              {this.props.lang == "en" &&
                <a
                  href="#"
                  data-target="#"
                  className="xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500 ho-ba-gray-500"
                  onClick={this.switchLanguage.bind(this,'tr')}>
                  Türkçe
                </a>
              }
              {this.props.lang == "tr" &&
                <a
                  href="#"
                  data-target="#"
                  className="xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500 ho-ba-gray-500"
                  onClick={this.switchLanguage.bind(this,'en')}>
                  English
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
