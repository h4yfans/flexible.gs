"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallBEM = React.createClass({
  render: function() {
    return (
      <Layout page="install" type="bem" />
    )
  }
});

module.exports = InstallBEM;
