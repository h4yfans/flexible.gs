"use strict";

import React from 'react';

var Sidebar = React.createClass({
  render: function() {

    var inputEmailClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-ffscp xl-pl16 lg-pl8 md-pl16";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-brr8";
    var mailchimp = '<form class="wrap xl-top" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id='+ this.props.mailchimp.id +'" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-8-12"><input type="email" name="EMAIL" class="'+ inputEmailClass +'" placeholder="'+ this.props.mailchimp.emailAddress +'" /><div style="position: absolute; left: -5000px;"><input type="text" name="'+ this.props.mailchimp.name +'" tabindex="-1"/></div></div><div class="col xl-4-12"><input type="submit" class="'+ inputSubmitClass +'" value="'+ this.props.mailchimp.subscribe +'" name="subscribe" /></div></form>';

    return (
      <div>
        <a href="https://youtu.be/4306ejHx17Y" target="_target" className="xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb24 xl-br8 xl-oh flexiblegs-presentation">
          <em className="xl-1-1 xl-tac xl-pa xl-t50p xl-tty-50p icon-youtube-play icon-xl" />
        </a>
        <div dangerouslySetInnerHTML={{__html:mailchimp}}/>
      </div>
    );
  }
});

module.exports = Sidebar;
