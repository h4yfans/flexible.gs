"use strict";

import React from 'react';

import Header from '../partials/Header'
import Sidebar from '../partials/Sidebar'
import Footer from '../partials/Footer'

import LanguageStore from '../../store/LanguageStore'

var Layout = React.createClass({

  getInitialState: function() {
    return {
      content: LanguageStore.getContent()
    };
  },

  componentWillMount: function() {
    LanguageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LanguageStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ content: LanguageStore.getContent() });
  },

  render: function() {
    return (
      <div>
        <Header content={this.state.content} />
        <div className="xl-m24">
          <div className="xl-maw1280 xl-ma">
            <div className="wrap xl-table xl-gutter-24 xl-top">
              <div className="col">
                <div className="xl-tal xl-px24 xl-py16 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200">

                  <div className="xl-lh40 xl-fs24 xl-fw600 xl-mb8">{this.props.name}</div>
                  <div className="xl-lh36 xl-fs18 xl-fw300">
                    Flexible Grid System is a <span className="xl-fw600">Responsive CSS Framework.</span><br/>
                    This framework will let you create your web applications in a flexible way that you've never experienced before.
                  </div>

                </div>
                <Footer content={this.state.content}/>
              </div>
              <div className="col xl-width-360">
                <Sidebar content={this.state.content}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Layout;
