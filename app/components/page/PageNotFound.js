"use strict";

import React from 'react';

import Layout from '../partial/Layout'

var PageNotFound = React.createClass({
  render: function() {
    return (
      <Layout page="pageNotFound" />
    )
  }
});

module.exports = PageNotFound;
