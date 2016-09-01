"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallCSS = React.createClass({
  render: function() {
    return (
      <Layout page="install" type="css" />
    )
  }
});

module.exports = InstallCSS;
