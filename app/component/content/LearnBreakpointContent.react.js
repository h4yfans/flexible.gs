"use strict";

import React from 'react';

const queryString = require('query-string');

var LearnBreakpointContent = React.createClass({
  render: function() {

    const parsed = queryString.parse(location.search);

    return (
      <div>
        {parsed.type == "scss" &&
          <div>breakpoint scss</div>
        }

        {parsed.type == "sass" &&
          <div>breakpoint sass</div>
        }

        {parsed.type == "less" &&
          <div>breakpoint less</div>
        }

        {parsed.type == "stylus" &&
          <div>breakpoint stylus</div>
        }

        {parsed.type == "css" &&
          <div>breakpoint css</div>
        }

        {parsed.type == "bem" &&
          <div>breakpoint bem</div>
        }
      </div>
    )
  }
});

module.exports = LearnBreakpointContent;
