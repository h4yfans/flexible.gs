"use strict";

import React from 'react';

var Sidebar = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.content.lang == "en" &&
          <div id="mc_embed_signup">
            <form action="//dnomak.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id=1ddadb165c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <div id="mc_embed_signup_scroll">
                <div className="wrap">
                  <div className="col xl-8-12">
                    <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Email address" required className="mc-input-text"/>
                    <div style={{position: 'absolute', left: '-5000px'}}><input type="text" name="b_0cfb9d416ef45eba73b6368b6_1ddadb165c" value=""/></div>
                  </div>
                  <div className="col xl-4-12">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mc-input-button"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
});

module.exports = Sidebar;
