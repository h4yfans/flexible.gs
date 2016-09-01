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
          <div className="wrap xl-middle md-1 md-my8">
            <div className="col xl-9-12 lg-5-7">
              <div className="wrap xl-gutter-8 xl-middle xl-auto md-1 md-center">
                <div className="col">
                  <Link
                    to="/"
                    className="icon-flexiblegs xl-vam xl-dib xl-p8 xl-co-white ho-co-gray-500"/>
                </div>
                <div className="col md-my8">
                  <Link
                    to="/install"
                    className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">
                    {this.props.content.install}
                  </Link>
                  <Link
                    to="/learn"
                    className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">
                    {this.props.content.learn}
                  </Link>
                  <Link
                    to="/compatibility"
                    className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">
                    {this.props.content.compatibility}
                  </Link>
                  {/*<Link
                    to="/responsive-test"
                    className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">
                    {this.props.content.responsiveTest}
                  </Link>*/}
                  <Link
                    to="/motivation"
                    className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">
                    {this.props.content.motivation}
                  </Link>
                  <Link
                    to="/future"
                    className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">
                    {this.props.content.future}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col xl-3-12 xl-tar lg-2-7 md-tac">
              <a
                href="https://github.com/flexiblegs/flexiblegs-scss-plus/stargazers"
                target="_blank"
                className="icon-github-alt icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr8"/>
              <a
                href="https://twitter.com/flexiblegs"
                target="_blank"
                className="icon-twitter icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr8"/>
              <a
                href="https://goo.gl/6n5oTO"
                target="_blank"
                className="icon-youtube-play icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr16"/>
              {this.props.lang == "en" &&
                <div
                  onClick={this.switchLanguage.bind(this,'tr')}
                  className="xl-cp xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500 ho-ba-gray-500">
                  Türkçe
                </div>
              }
              {this.props.lang == "tr" &&
                <div
                  onClick={this.switchLanguage.bind(this,'en')}
                  className="xl-cp xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500 ho-ba-gray-500">
                  English
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
