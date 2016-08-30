"use strict";

import React from 'react';

import Layout from '../partial/Layout'

var LearnNotHidden = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="not-hidden" />
    )
  }
});

module.exports = LearnNotHidden;
