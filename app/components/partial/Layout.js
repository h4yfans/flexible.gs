"use strict";

import React from 'react';

import Header from '../partial/Header'
import Sidebar from '../partial/Sidebar'
import Footer from '../partial/Footer'

import Title from '../partial/Title'
import HomepageContent from '../content/HomepageContent'
import InstallContent from '../content/InstallContent'
import InstallScssContent from '../content/InstallScssContent'
import InstallSassContent from '../content/InstallSassContent'
import InstallLessContent from '../content/InstallLessContent'
import InstallStylusContent from '../content/InstallStylusContent'
import InstallScssPlusContent from '../content/InstallScssPlusContent'
import InstallCSSContent from '../content/InstallCSSContent'
import InstallBEMContent from '../content/InstallBEMContent'
import LearnContent from '../content/LearnContent'
import CompatibilityContent from '../content/CompatibilityContent'
import MotivationContent from '../content/MotivationContent'
import FutureContent from '../content/FutureContent'
import PageNotFoundContent from '../content/PageNotFoundContent'

import LanguageStore from '../../store/LanguageStore'

var Layout = React.createClass({

  getInitialState: function() {
    return {
      content: LanguageStore.getContent(),
    };
  },

  componentWillMount: function() {
    LanguageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LanguageStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ content: LanguageStore.getContent() });
  },

  installTitle: function(title) {
    return title + " " + this.state.content.header.install;
  },

  render: function() {
    var contentClass = "xl-lh36 xl-fs18 xl-fw300";
    return (
      <div>
        <Header lang={this.state.content.lang} content={this.state.content.header} />
        <div className="xl-m24">
          <div className="xl-maw1280 xl-ma">
            <div className="wrap xl-gutter-24 md-1">
              <div className="col xl-9-12 lg-5-7">
                <div className="xl-tal xl-px24 xl-py16 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200">
                  {this.props.page == "homepage" &&
                    <div>
                      <Title title={this.state.content.header.homepage} />
                      <div className={contentClass}>
                        <HomepageContent content={this.state.content.homepage} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && !this.props.type &&
                    <div>
                      <Title title={this.state.content.header.install} />
                      <div className={contentClass}>
                        <InstallContent content={this.state.content.install} common={this.state.content.common} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "scss" &&
                    <div>
                      <Title title={this.installTitle("Scss")} />
                      <div className={contentClass}>
                        <InstallScssContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "sass" &&
                    <div>
                      <Title title={this.installTitle("Sass")} />
                      <div className={contentClass}>
                        <InstallSassContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "less" &&
                    <div>
                      <Title title={this.installTitle("Less")} />
                      <div className={contentClass}>
                        <InstallLessContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "stylus" &&
                    <div>
                      <Title title={this.installTitle("Stylus")} />
                      <div className={contentClass}>
                        <InstallStylusContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "scss-plus" &&
                    <div>
                      <Title title={this.installTitle("Scss Plus")} />
                      <div className={contentClass}>
                        <InstallScssPlusContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "css" &&
                    <div>
                      <Title title={this.installTitle("CSS")} />
                      <div className={contentClass}>
                        <InstallCSSContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.type == "bem" &&
                    <div>
                      <Title title={this.installTitle("BEM")} />
                      <div className={contentClass}>
                        <InstallCSSContent />
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && !this.props.type &&
                    <div>
                      <Title title={this.state.content.header.learn} />
                      <div className={contentClass}>
                        <LearnContent content={this.state.content.learn} common={this.state.content.common} />
                      </div>
                    </div>
                  }
                  {this.props.page == "compatibility" &&
                    <div>
                      <Title title={this.state.content.header.compatibility} />
                      <div className={contentClass}>
                        <CompatibilityContent content={this.state.content.compatibility} common={this.state.content.common} />
                      </div>
                    </div>
                  }
                  {this.props.page == "motivation" &&
                    <div>
                      <Title title={this.state.content.header.motivation} />
                      <div className={contentClass}>
                        <MotivationContent content={this.state.content.motivation} />
                      </div>
                    </div>
                  }
                  {this.props.page == "future" &&
                    <div>
                      <Title title={this.state.content.header.future} />
                      <div className={contentClass}>
                        <FutureContent content={this.state.content.future} common={this.state.content.common}/>
                      </div>
                    </div>
                  }
                  {this.props.page == "pageNotFound" &&
                    <div>
                      <Title title="404" />
                      <div className={contentClass}>
                        <PageNotFoundContent content={this.state.content.pageNotFound} />
                      </div>
                    </div>
                  }
                </div>
                <Footer content={this.state.content.footer}/>
              </div>
              <div className="col xl-3-12 lg-2-7">
                <Sidebar
                  lang={this.state.content.lang}
                  content={this.state.content.header}
                  common={this.state.content.common}
                  mailchimp={this.state.content.mailchimp}
                  pageInstall={this.props.page == "install" && this.props.type ? true : false}
                  pageLearn={this.props.page == "learn" && this.props.type ? true : false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Layout;
