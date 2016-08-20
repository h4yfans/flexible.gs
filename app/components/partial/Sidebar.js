"use strict";

import React from 'react';

var Sidebar = React.createClass({
  render: function() {
    return (
      <div>
        <a href="https://youtu.be/4306ejHx17Y" target="_target" className="xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb24 xl-br8 xl-oh flexiblegs-presentation">
          <em className="xl-1-1 xl-tac xl-pa xl-t50p xl-tty-50p icon-youtube-play icon-xl" />
        </a>
        {this.props.lang == "en" &&
          <div>
            {/*
              <!-- Begin MailChimp Signup Form -->
              <div id="mc_embed_signup">
              <form action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id=1ddadb165c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">

              <div class="mc-field-group">
                <label for="mce-EMAIL">Email </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
              </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0cfb9d416ef45eba73b6368b6_1ddadb165c" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
              </form>
              </div>

              <!--End mc_embed_signup-->
            */}
          </div>
        }
        {this.props.lang == "tr" &&
          <div>
            {/*
              <!-- Begin MailChimp Signup Form -->
              <div id="mc_embed_signup">
              <form action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id=76e0132742" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">

              <div class="mc-field-group">
                <label for="mce-EMAIL">Email </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
              </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0cfb9d416ef45eba73b6368b6_76e0132742" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
              </form>
              </div>

              <!--End mc_embed_signup-->
            */}
          </div>
        }
      </div>
    );
  }
});

module.exports = Sidebar;
