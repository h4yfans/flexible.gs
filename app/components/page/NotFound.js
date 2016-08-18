"use strict";

import React from 'react';

import Layout from '../partial/Layout'

var NotFound = React.createClass({
  render: function() {
    return (
      <Layout page="pageNotFound" />
    )
  }
});

module.exports = NotFound;
