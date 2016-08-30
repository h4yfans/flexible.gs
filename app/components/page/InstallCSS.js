"use strict";

import React from 'react';

import Layout from '../partial/Layout'

var InstallCSS = React.createClass({
  render: function() {
    return (
      <Layout page="install" type="css" />
    )
  }
});

module.exports = InstallCSS;
