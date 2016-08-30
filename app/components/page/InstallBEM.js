"use strict";

import React from 'react';

import Layout from '../partial/Layout'

var InstallBEM = React.createClass({
  render: function() {
    return (
      <Layout page="install" type="bem" />
    )
  }
});

module.exports = InstallBEM;
