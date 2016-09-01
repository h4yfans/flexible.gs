"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallScss = React.createClass({
  render: function() {
    return (
      <Layout page="install" type="scss" />
    )
  }
});

module.exports = InstallScss;
