"use strict";

import React from 'react';

var InstallScssPlusContent = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <div>
            <a
              href="https://raw.githubusercontent.com/flexiblegs/flexiblegs-scss-plus/master/flexiblegs-scss-plus.scss"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu xl-pr4">
              {this.props.content.downloadTheFile}
            </a>
            {this.props.content.andAddTheProjectAsFollows}
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="code__type code__type--bottom">.scss</div>
              <div className="code__content">{/*
                */}$flexiblegs-method: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"css",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"bem"</span><br/>{/*
                */});<br/>{/*
                */}$flexiblegs-breakpoint: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"xl" : "",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"lg" : "(max-width: 1024px)",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"md" : "(max-width: 768px)",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"sm" : "(max-width: 667px)"</span><br/>{/*
                */});<br/>{/*
                */}$wrap-col: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</span><br/>{/*
                */});<br/>{/*
                */}$wrap-prop: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"table",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"flexbox",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"normal",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"left",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"center",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"right",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"top",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"middle",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"bottom",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"between",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"around",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"baseline",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"reverse",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"not-reverse"</span><br/>{/*
                */});<br/>{/*
                */}$col-row: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</span><br/>{/*
                */});<br/>{/*
                */}$col-width: ();<br/>{/*
                */}$col-prop: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"hidden",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"not-hidden",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"first",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"not-first",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"last",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">"not-last"</span><br/>{/*
                */});<br/>{/*
                */}$wrap-gutter: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">0, 8, 16, 24, 40</span><br/>{/*
                */});<br/>{/*
                */}$wrap-outside: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">0, 8, 16, 24, 40</span><br/>{/*
                */});<br/>{/*
                */}$wrap-masonry: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-type">2, 3, 4, 5, 6</span><br/>{/*
                */});<br/><br/>{/*
                */}@import "flexiblegs-scss";<br/>{/*
                */}@import "<span className="code-type">flexiblegs-scss-plus</span>";{/*
              */}</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <a
              href="https://www.npmjs.com/package/flexiblegs-scss-plus"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu">
              npm
            </a>
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="code__type code__type--bottom">terminal</div>
              <div className="code__content">{/*
                */}$ npm install --save <span className="code-type">flexiblegs-scss-plus</span>{/*
              */}</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <a
              href="http://bower.io/search/?q=flexiblegs-scss-plus"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu">
              bower
            </a>
          </div>
          <div className="xl-mt8 xl-mb8">
            <div className="code code--install">
              <div className="code__type code__type--bottom">terminal</div>
              <div className="code__content">{/*
                */}$ bower install --save <span className="code-type">flexiblegs-scss-plus</span>{/*
              */}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InstallScssPlusContent;
