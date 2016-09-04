(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Dispatcher = require('../dispatcher/Dispatcher');
var ACTION_TYPES = require('../constant/LanguageConstant');

var LanguageAction = {
  switchLanguage: function switchLanguage(language) {
    Dispatcher.dispatch({
      actionType: ACTION_TYPES.SWITCH_LANGUAGE,
      language: language
    });
  },
  initApp: function initApp() {
    Dispatcher.dispatch({
      actionType: ACTION_TYPES.INIT_APP
    });
  }
};

module.exports = LanguageAction;

},{"../constant/LanguageConstant":98,"../dispatcher/Dispatcher":99}],2:[function(require,module,exports){
"use strict";

var content = require('../../data/language.json');

var LanguageApi = {
	getContent: function getContent() {
		var language = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];

		return content.filter(function (obj) {
			return obj.lang === language;
		})[0];
	}
};

module.exports = LanguageApi;

},{"../../data/language.json":101}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _componentPageHomepageReact = require('./component/page/Homepage.react');

var _componentPageHomepageReact2 = _interopRequireDefault(_componentPageHomepageReact);

var _componentPageInstallReact = require('./component/page/Install.react');

var _componentPageInstallReact2 = _interopRequireDefault(_componentPageInstallReact);

var _componentPageInstallScssReact = require('./component/page/InstallScss.react');

var _componentPageInstallScssReact2 = _interopRequireDefault(_componentPageInstallScssReact);

var _componentPageInstallSassReact = require('./component/page/InstallSass.react');

var _componentPageInstallSassReact2 = _interopRequireDefault(_componentPageInstallSassReact);

var _componentPageInstallLessReact = require('./component/page/InstallLess.react');

var _componentPageInstallLessReact2 = _interopRequireDefault(_componentPageInstallLessReact);

var _componentPageInstallStylusReact = require('./component/page/InstallStylus.react');

var _componentPageInstallStylusReact2 = _interopRequireDefault(_componentPageInstallStylusReact);

var _componentPageInstallScssPlusReact = require('./component/page/InstallScssPlus.react');

var _componentPageInstallScssPlusReact2 = _interopRequireDefault(_componentPageInstallScssPlusReact);

var _componentPageInstallCSSReact = require('./component/page/InstallCSS.react');

var _componentPageInstallCSSReact2 = _interopRequireDefault(_componentPageInstallCSSReact);

var _componentPageInstallBEMReact = require('./component/page/InstallBEM.react');

var _componentPageInstallBEMReact2 = _interopRequireDefault(_componentPageInstallBEMReact);

var _componentPageLearnReact = require('./component/page/Learn.react');

var _componentPageLearnReact2 = _interopRequireDefault(_componentPageLearnReact);

var _componentPageLearnWrapReact = require('./component/page/LearnWrap.react');

var _componentPageLearnWrapReact2 = _interopRequireDefault(_componentPageLearnWrapReact);

var _componentPageLearnColReact = require('./component/page/LearnCol.react');

var _componentPageLearnColReact2 = _interopRequireDefault(_componentPageLearnColReact);

var _componentPageLearnColRowReact = require('./component/page/LearnColRow.react');

var _componentPageLearnColRowReact2 = _interopRequireDefault(_componentPageLearnColRowReact);

var _componentPageLearnHiddenReact = require('./component/page/LearnHidden.react');

var _componentPageLearnHiddenReact2 = _interopRequireDefault(_componentPageLearnHiddenReact);

var _componentPageLearnNotHiddenReact = require('./component/page/LearnNotHidden.react');

var _componentPageLearnNotHiddenReact2 = _interopRequireDefault(_componentPageLearnNotHiddenReact);

var _componentPageLearnGutterReact = require('./component/page/LearnGutter.react');

var _componentPageLearnGutterReact2 = _interopRequireDefault(_componentPageLearnGutterReact);

var _componentPageLearnOutsideReact = require('./component/page/LearnOutside.react');

var _componentPageLearnOutsideReact2 = _interopRequireDefault(_componentPageLearnOutsideReact);

var _componentPageLearnWrapColReact = require('./component/page/LearnWrapCol.react');

var _componentPageLearnWrapColReact2 = _interopRequireDefault(_componentPageLearnWrapColReact);

var _componentPageLearnAutoReact = require('./component/page/LearnAuto.react');

var _componentPageLearnAutoReact2 = _interopRequireDefault(_componentPageLearnAutoReact);

var _componentPageLearnTableReact = require('./component/page/LearnTable.react');

var _componentPageLearnTableReact2 = _interopRequireDefault(_componentPageLearnTableReact);

var _componentPageLearnWidthReact = require('./component/page/LearnWidth.react');

var _componentPageLearnWidthReact2 = _interopRequireDefault(_componentPageLearnWidthReact);

var _componentPageLearnFlexboxReact = require('./component/page/LearnFlexbox.react');

var _componentPageLearnFlexboxReact2 = _interopRequireDefault(_componentPageLearnFlexboxReact);

var _componentPageLearnNormalReact = require('./component/page/LearnNormal.react');

var _componentPageLearnNormalReact2 = _interopRequireDefault(_componentPageLearnNormalReact);

var _componentPageLearnLeftReact = require('./component/page/LearnLeft.react');

var _componentPageLearnLeftReact2 = _interopRequireDefault(_componentPageLearnLeftReact);

var _componentPageLearnCenterReact = require('./component/page/LearnCenter.react');

var _componentPageLearnCenterReact2 = _interopRequireDefault(_componentPageLearnCenterReact);

var _componentPageLearnRightReact = require('./component/page/LearnRight.react');

var _componentPageLearnRightReact2 = _interopRequireDefault(_componentPageLearnRightReact);

var _componentPageLearnTopReact = require('./component/page/LearnTop.react');

var _componentPageLearnTopReact2 = _interopRequireDefault(_componentPageLearnTopReact);

var _componentPageLearnMiddleReact = require('./component/page/LearnMiddle.react');

var _componentPageLearnMiddleReact2 = _interopRequireDefault(_componentPageLearnMiddleReact);

var _componentPageLearnBottomReact = require('./component/page/LearnBottom.react');

var _componentPageLearnBottomReact2 = _interopRequireDefault(_componentPageLearnBottomReact);

var _componentPageLearnBetweenReact = require('./component/page/LearnBetween.react');

var _componentPageLearnBetweenReact2 = _interopRequireDefault(_componentPageLearnBetweenReact);

var _componentPageLearnAroundReact = require('./component/page/LearnAround.react');

var _componentPageLearnAroundReact2 = _interopRequireDefault(_componentPageLearnAroundReact);

var _componentPageLearnBaselineReact = require('./component/page/LearnBaseline.react');

var _componentPageLearnBaselineReact2 = _interopRequireDefault(_componentPageLearnBaselineReact);

var _componentPageLearnFirstReact = require('./component/page/LearnFirst.react');

var _componentPageLearnFirstReact2 = _interopRequireDefault(_componentPageLearnFirstReact);

var _componentPageLearnNotFirstReact = require('./component/page/LearnNotFirst.react');

var _componentPageLearnNotFirstReact2 = _interopRequireDefault(_componentPageLearnNotFirstReact);

var _componentPageLearnLastReact = require('./component/page/LearnLast.react');

var _componentPageLearnLastReact2 = _interopRequireDefault(_componentPageLearnLastReact);

var _componentPageLearnNotLastReact = require('./component/page/LearnNotLast.react');

var _componentPageLearnNotLastReact2 = _interopRequireDefault(_componentPageLearnNotLastReact);

var _componentPageLearnReverseReact = require('./component/page/LearnReverse.react');

var _componentPageLearnReverseReact2 = _interopRequireDefault(_componentPageLearnReverseReact);

var _componentPageLearnNotReverseReact = require('./component/page/LearnNotReverse.react');

var _componentPageLearnNotReverseReact2 = _interopRequireDefault(_componentPageLearnNotReverseReact);

var _componentPageLearnMasonryReact = require('./component/page/LearnMasonry.react');

var _componentPageLearnMasonryReact2 = _interopRequireDefault(_componentPageLearnMasonryReact);

var _componentPageLearnBreakpointReact = require('./component/page/LearnBreakpoint.react');

var _componentPageLearnBreakpointReact2 = _interopRequireDefault(_componentPageLearnBreakpointReact);

var _componentPageCompatibilityReact = require('./component/page/Compatibility.react');

var _componentPageCompatibilityReact2 = _interopRequireDefault(_componentPageCompatibilityReact);

var _componentPageMotivationReact = require('./component/page/Motivation.react');

var _componentPageMotivationReact2 = _interopRequireDefault(_componentPageMotivationReact);

var _componentPageFutureReact = require('./component/page/Future.react');

var _componentPageFutureReact2 = _interopRequireDefault(_componentPageFutureReact);

var _componentPagePageNotFoundReact = require('./component/page/PageNotFound.react');

var _componentPagePageNotFoundReact2 = _interopRequireDefault(_componentPagePageNotFoundReact);

var LanguageAction = require('./action/LanguageAction');

var routes = _react2['default'].createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', component: _componentPageHomepageReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install', component: _componentPageInstallReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/scss', component: _componentPageInstallScssReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/sass', component: _componentPageInstallSassReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/less', component: _componentPageInstallLessReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/stylus', component: _componentPageInstallStylusReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/scss-plus', component: _componentPageInstallScssPlusReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/css', component: _componentPageInstallCSSReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/install/bem', component: _componentPageInstallBEMReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn', component: _componentPageLearnReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/wrap', component: _componentPageLearnWrapReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/col', component: _componentPageLearnColReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/col-row', component: _componentPageLearnColRowReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/hidden', component: _componentPageLearnHiddenReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/not-hidden', component: _componentPageLearnNotHiddenReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/gutter', component: _componentPageLearnGutterReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/outside', component: _componentPageLearnOutsideReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/wrap-col', component: _componentPageLearnWrapColReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/auto', component: _componentPageLearnAutoReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/table', component: _componentPageLearnTableReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/width', component: _componentPageLearnWidthReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/flexbox', component: _componentPageLearnFlexboxReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/normal', component: _componentPageLearnNormalReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/left', component: _componentPageLearnLeftReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/center', component: _componentPageLearnCenterReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/right', component: _componentPageLearnRightReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/top', component: _componentPageLearnTopReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/middle', component: _componentPageLearnMiddleReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/bottom', component: _componentPageLearnBottomReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/between', component: _componentPageLearnBetweenReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/around', component: _componentPageLearnAroundReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/baseline', component: _componentPageLearnBaselineReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/first', component: _componentPageLearnFirstReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/not-first', component: _componentPageLearnNotFirstReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/last', component: _componentPageLearnLastReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/not-last', component: _componentPageLearnNotLastReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/reverse', component: _componentPageLearnReverseReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/not-reverse', component: _componentPageLearnNotReverseReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/masonry', component: _componentPageLearnMasonryReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/learn/breakpoint', component: _componentPageLearnBreakpointReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/responsive-test' }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/compatibility', component: _componentPageCompatibilityReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/motivation', component: _componentPageMotivationReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/future', component: _componentPageFutureReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentPagePageNotFoundReact2['default'] })
);

LanguageAction.initApp();

_reactDom2['default'].render(routes, document.getElementById('app'));

},{"./action/LanguageAction":1,"./component/page/Compatibility.react":48,"./component/page/Future.react":49,"./component/page/Homepage.react":50,"./component/page/Install.react":51,"./component/page/InstallBEM.react":52,"./component/page/InstallCSS.react":53,"./component/page/InstallLess.react":54,"./component/page/InstallSass.react":55,"./component/page/InstallScss.react":56,"./component/page/InstallScssPlus.react":57,"./component/page/InstallStylus.react":58,"./component/page/Learn.react":59,"./component/page/LearnAround.react":60,"./component/page/LearnAuto.react":61,"./component/page/LearnBaseline.react":62,"./component/page/LearnBetween.react":63,"./component/page/LearnBottom.react":64,"./component/page/LearnBreakpoint.react":65,"./component/page/LearnCenter.react":66,"./component/page/LearnCol.react":67,"./component/page/LearnColRow.react":68,"./component/page/LearnFirst.react":69,"./component/page/LearnFlexbox.react":70,"./component/page/LearnGutter.react":71,"./component/page/LearnHidden.react":72,"./component/page/LearnLast.react":73,"./component/page/LearnLeft.react":74,"./component/page/LearnMasonry.react":75,"./component/page/LearnMiddle.react":76,"./component/page/LearnNormal.react":77,"./component/page/LearnNotFirst.react":78,"./component/page/LearnNotHidden.react":79,"./component/page/LearnNotLast.react":80,"./component/page/LearnNotReverse.react":81,"./component/page/LearnOutside.react":82,"./component/page/LearnReverse.react":83,"./component/page/LearnRight.react":84,"./component/page/LearnTable.react":85,"./component/page/LearnTop.react":86,"./component/page/LearnWidth.react":87,"./component/page/LearnWrap.react":88,"./component/page/LearnWrapCol.react":89,"./component/page/Motivation.react":90,"./component/page/PageNotFound.react":91,"react":343,"react-dom":136,"react-router":166}],4:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CompatibilityContent = _react2["default"].createClass({
  displayName: "CompatibilityContent",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content.line001 } }),
      _react2["default"].createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content.line002 } }),
      _react2["default"].createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content.line003 } }),
      _react2["default"].createElement(
        "div",
        { className: "wrap xl-2 xl-gutter-16 xl-mt8 sm-1" },
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            { className: "xl-fw600" },
            this.props.common.browser
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "IE 9+"
            )
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "Chrome"
            )
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "Firefox"
            )
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "Safari"
            )
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "Opera"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18 sm-mt8" },
          _react2["default"].createElement(
            "div",
            { className: "xl-fw600" },
            this.props.common.framework
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "Bootstrap"
            )
          ),
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "div",
              { className: "xl-di xl-vam xl-pl8" },
              "Foundation ",
              this.props.common.andMore
            )
          )
        )
      )
    );
  }
});

module.exports = CompatibilityContent;

},{"react":343}],5:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FutureContent = _react2["default"].createClass({
  displayName: "FutureContent",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible Front End Framework (",
          _react2["default"].createElement(
            "a",
            { href: "https://github.com/pixelperfectcss/pixelperfectcss-scss", target: "_blank", className: "xl-co-black-500 xl-fw400 xl-tdu" },
            "Pixel Perfect CSS"
          ),
          ")"
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible ",
          _react2["default"].createElement(
            "a",
            { className: "xl-co-black-500 xl-fw400 xl-tdu", target: "_blank", href: "https://github.com/flexiblegs/flexible-icons" },
            "Icons"
          )
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible ",
          _react2["default"].createElement(
            "a",
            { className: "xl-co-black-500 xl-fw400 xl-tdu", target: "_blank", href: "https://github.com/flexiblegs/grid-builder" },
            "Grid Builder"
          )
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible ",
          _react2["default"].createElement(
            "span",
            { className: "xl-fw400" },
            "Front End Editor"
          )
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible ",
          _react2["default"].createElement(
            "span",
            { className: "xl-fw400" },
            "Cloud"
          ),
          " (",
          this.props.content.contentManagementSystem,
          ")"
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible ",
          _react2["default"].createElement(
            "span",
            { className: "xl-fw400" },
            "Shop"
          ),
          " (Mug, T-Shirt, ",
          _react2["default"].createElement(
            "a",
            { href: "https://stickker.net/urun/flexible/", target: "_blank", className: "xl-co-black-500 xl-fw400 xl-tdu" },
            "Sticker"
          ),
          " ",
          this.props.common.andMore,
          ")"
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
        _react2["default"].createElement(
          "div",
          { className: "xl-di xl-vam xl-pl8" },
          "Flexible ",
          _react2["default"].createElement(
            "span",
            { className: "xl-fw400" },
            "Space"
          ),
          " (Flexible Blend ",
          this.props.content.coffee,
          ", ",
          this.props.content.logoShapedCakeMold,
          ")"
        )
      )
    );
  }
});

module.exports = FutureContent;

},{"react":343}],6:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var HomepageContent = _react2['default'].createClass({
  displayName: 'HomepageContent',

  render: function render() {

    var svgDeviceMacbook = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1484 862" enable-background="new 0 0 1484 862" xml:space="preserve"><path class="backend" d="M1444,862h-90h-50h-50H230h-50h-50H40c0,0-40-6.29-40-14.001 C0,835.783,0,820,0,820h130v-8v-50V50c0-27.614,22.386-50,50-50h1124c27.614,0,50,22.386,50,50v712v50v8h130c0,0,0,15.783,0,27.999 C1484,855.71,1444,862,1444,862z"/><path class="frontend" d="M1444,862h-90h-50h-50H230h-50h-50H40c0,0-40-6.29-40-14.001 C0,835.783,0,820,0,820h130v-8v-50V50c0-27.614,22.386-50,50-50h1124c27.614,0,50,22.386,50,50v712v50v8h130c0,0,0,15.783,0,27.999 C1484,855.71,1444,862,1444,862z M637,820.5c0,8.56,6.94,15.5,15.5,15.5h179c8.56,0,15.5-6.94,15.5-15.5V820H637V820.5z M1312,50 H172v712h1140V50z"/></svg>';
    var svgDeviceiPadLandscape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1244 848" enable-background="new 0 0 1244 848" xml:space="preserve"><path class="backend" d="M1244,60v728c0,33.137-26.863,60-60,60H60 c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0h1124C1217.137,0,1244,26.863,1244,60z"/><path class="frontend" d="M1244,60v728c0,33.137-26.863,60-60,60H60 c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0h1124C1217.137,0,1244,26.863,1244,60z M1224,424c0-19.33-15.67-35-35-35 c-19.33,0-35,15.67-35,35c0,19.33,15.67,35,35,35C1208.33,459,1224,443.33,1224,424z M110,40v768h1024V40H110z"/></svg>';
    var svgDeviceiPadPortrait = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 848 1244" enable-background="new 0 0 848 1244" xml:space="preserve"><path class="backend" d="M788,1244H60c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0 h728c33.137,0,60,26.863,60,60v1124C848,1217.137,821.137,1244,788,1244z"/><path class="frontend" d="M788,1244H60c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0 h728c33.137,0,60,26.863,60,60v1124C848,1217.137,821.137,1244,788,1244z M424,1224c19.33,0,35-15.67,35-35c0-19.33-15.67-35-35-35 c-19.33,0-35,15.67-35,35C389,1208.33,404.67,1224,424,1224z M808,110H40v1024h768V110z"/></svg>';
    var svgDeviceiPhoneLandscape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 847 415" enable-background="new 0 0 847 415" xml:space="preserve"><path class="backend" d="M50,0h747c27.614,0,50,22.386,50,50v315c0,27.614-22.386,50-50,50H50c-27.614,0-50-22.386-50-50V50 C0,22.386,22.386,0,50,0z"/><path class="frontend" d="M797,0H50C22.386,0,0,22.386,0,50v315c0,27.614,22.386,50,50,50h747c27.614,0,50-22.386,50-50V50 C847,22.386,824.614,0,797,0z M757,395H90V20h667V395z M802,239c-17.672,0-32-14.326-32-32s14.328-32,32-32 c17.674,0,32,14.326,32,32S819.674,239,802,239z"/></svg>';
    var svgDeviceiPhonePortrait = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 454 916" enable-background="new 0 0 454 916" xml:space="preserve"><path class="backend" d="M50,0h354c27.614,0,50,22.386,50,50v816c0,27.614-22.386,50-50,50 H50c-27.614,0-50-22.386-50-50V50C0,22.386,22.386,0,50,0z"/><path class="frontend" d="M404,916H50c-27.614,0-50-22.386-50-50V50C0,22.386,22.386,0,50,0 h354c27.614,0,50,22.386,50,50v816C454,893.614,431.614,916,404,916z M227,903c17.673,0,32-14.327,32-32s-14.327-32-32-32 s-32,14.327-32,32S209.327,903,227,903z M434,90H20v736h414V90z"/></svg>';

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line001 } }),
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line002 } }),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-gutter-24 lg-gutter-8 xl-center xl-middle xl-auto xl-mt8 xl-lh0 xl-py40' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-my8' },
          _react2['default'].createElement('div', {
            className: 'device device--macbook xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500',
            dangerouslySetInnerHTML: { __html: svgDeviceMacbook } })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-my8' },
          _react2['default'].createElement('div', {
            className: 'device device--ipad-landscape xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500',
            dangerouslySetInnerHTML: { __html: svgDeviceiPadLandscape } })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-my8' },
          _react2['default'].createElement('div', {
            className: 'device device--ipad-portrait xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500',
            dangerouslySetInnerHTML: { __html: svgDeviceiPadPortrait } })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-my8' },
          _react2['default'].createElement('div', {
            className: 'device--iphone-landscape xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500 device',
            dangerouslySetInnerHTML: { __html: svgDeviceiPhoneLandscape } })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-my8' },
          _react2['default'].createElement('div', {
            className: 'device device--iphone-portrait xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500',
            dangerouslySetInnerHTML: { __html: svgDeviceiPhonePortrait } })
        )
      )
    );
  }
});

module.exports = HomepageContent;

},{"react":343}],7:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallBEMContent = _react2['default'].createClass({
  displayName: 'InstallBEMContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://raw.githubusercontent.com/flexiblegs/flexiblegs-bem/master/flexiblegs-bem.css',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu xl-pr4' },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              '.html'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '<head>',
              _react2['default'].createElement('br', null),
              '  <link rel="stylesheet" href="',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-bem.css'
              ),
              '">',
              _react2['default'].createElement('br', null),
              '</head>'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://www.npmjs.com/package/flexiblegs-bem',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'npm'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ npm install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-bem'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'http://bower.io/search/?q=flexiblegs-bem',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'bower'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ bower install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-bem'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-right md-1' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-4-12 lg-5-12' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/learn/wrap?type=bem', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac' },
            _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
            _react2['default'].createElement(
              'span',
              { className: 'xl-di xl-vam xl-pl8' },
              this.props.header.learn,
              ' (BEM)'
            )
          )
        )
      )
    );
  }
});

module.exports = InstallBEMContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */ /*
                  */ /*
                     */

},{"react":343,"react-router":166}],8:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallCSSContent = _react2['default'].createClass({
  displayName: 'InstallCSSContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://raw.githubusercontent.com/flexiblegs/flexiblegs-css/master/flexiblegs-css.css',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu xl-pr4' },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              '.html'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '<head>',
              _react2['default'].createElement('br', null),
              '  <link rel="stylesheet" href="',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-css.css'
              ),
              '">',
              _react2['default'].createElement('br', null),
              '</head>'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://www.npmjs.com/package/flexiblegs-css',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'npm'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ npm install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-css'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'http://bower.io/search/?q=flexiblegs-css',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'bower'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ bower install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-css'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-right md-1' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-4-12 lg-5-12' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/learn/wrap?type=css', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac' },
            _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
            _react2['default'].createElement(
              'span',
              { className: 'xl-di xl-vam xl-pl8' },
              this.props.header.learn,
              ' (CSS)'
            )
          )
        )
      )
    );
  }
});

module.exports = InstallCSSContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */ /*
                  */ /*
                     */

},{"react":343,"react-router":166}],9:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallContent = _react2['default'].createClass({
  displayName: 'InstallContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line001 } }),
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line002 } }),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-3 xl-gutter-24 lg-1 xl-mt24 xl-mb8' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-fs18' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600' },
            this.props.common.dynamicCore
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bw2 xl-px16 xl-py8' },
            _react2['default'].createElement(
              'div',
              { className: 'wrap xl-1 xl-gutter-24' },
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/scss',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'Scss'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/sass',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'Sass'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/less',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'Less'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/stylus',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'Stylus'
                )
              )
            )
          ),
          _react2['default'].createElement('div', {
            className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8',
            dangerouslySetInnerHTML: { __html: this.props.content.line003 } })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-fs18 lg-my24' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600' },
            this.props.common.dynamicCompilationTool
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bw2 xl-px16 xl-py8' },
            _react2['default'].createElement(
              'div',
              { className: 'wrap xl-1 xl-gutter-24' },
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/scss-plus',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'Scss Plus'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn' },
                  'Sass Plus'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn' },
                  'Less Plus'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn' },
                  'Stylus Plus'
                )
              )
            )
          ),
          _react2['default'].createElement('div', {
            className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8',
            dangerouslySetInnerHTML: { __html: this.props.content.line004 } })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-fs18' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600' },
            this.props.common.staticCompiled
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bw2 xl-px16 xl-py8' },
            _react2['default'].createElement(
              'div',
              { className: 'wrap xl-1 xl-gutter-24' },
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/css',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'CSS'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs18' },
                _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install/bem',
                    className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                  'BEM'
                )
              )
            )
          ),
          _react2['default'].createElement('div', {
            className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8',
            dangerouslySetInnerHTML: { __html: this.props.content.line005 } })
        )
      )
    );
  }
});

module.exports = InstallContent;

},{"react":343,"react-router":166}],10:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallLessContent = _react2['default'].createClass({
  displayName: 'InstallLessContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://raw.githubusercontent.com/flexiblegs/flexiblegs-less/master/flexiblegs-less.less',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu xl-pr4' },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              '.less'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '@import "',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-less.less'
              ),
              '";'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://www.npmjs.com/package/flexiblegs-less',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'npm'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ npm install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-less'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'http://bower.io/search/?q=flexiblegs-less',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'bower'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ bower install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-less'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-right md-1' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-4-12 lg-5-12' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/learn/wrap?type=less', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac' },
            _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
            _react2['default'].createElement(
              'span',
              { className: 'xl-di xl-vam xl-pl8' },
              this.props.header.learn,
              ' (Less)'
            )
          )
        )
      )
    );
  }
});

module.exports = InstallLessContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */

},{"react":343,"react-router":166}],11:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallSassContent = _react2['default'].createClass({
  displayName: 'InstallSassContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://raw.githubusercontent.com/flexiblegs/flexiblegs-sass/master/flexiblegs-sass.sass',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu xl-pr4' },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              '.sass'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '@import "',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-sass'
              ),
              '"'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://www.npmjs.com/package/flexiblegs-sass',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'npm'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ npm install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-sass'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'http://bower.io/search/?q=flexiblegs-sass',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'bower'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ bower install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-sass'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-right md-1' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-4-12 lg-5-12' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/learn/wrap?type=sass', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac' },
            _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
            _react2['default'].createElement(
              'span',
              { className: 'xl-di xl-vam xl-pl8' },
              this.props.header.learn,
              ' (Sass)'
            )
          )
        )
      )
    );
  }
});

module.exports = InstallSassContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */

},{"react":343,"react-router":166}],12:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallScssContent = _react2['default'].createClass({
  displayName: 'InstallScssContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://raw.githubusercontent.com/flexiblegs/flexiblegs-scss/master/flexiblegs-scss.scss',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu xl-pr4' },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              '.scss'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '@import "',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-scss'
              ),
              '";'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://www.npmjs.com/package/flexiblegs-scss',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'npm'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ npm install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-scss'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'http://bower.io/search/?q=flexiblegs-scss',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'bower'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ bower install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-scss'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-right md-1' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-4-12 lg-5-12' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/learn/wrap?type=scss', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac' },
            _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
            _react2['default'].createElement(
              'span',
              { className: 'xl-di xl-vam xl-pl8' },
              this.props.header.learn,
              ' (Scss)'
            )
          )
        )
      )
    );
  }
});

module.exports = InstallScssContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */

},{"react":343,"react-router":166}],13:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var InstallScssPlusContent = _react2["default"].createClass({
  displayName: "InstallScssPlusContent",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "a",
            {
              href: "https://raw.githubusercontent.com/flexiblegs/flexiblegs-scss-plus/master/flexiblegs-scss-plus.scss",
              target: "_blank",
              className: "xl-fw400 xl-co-black-500 xl-tdu xl-pr4" },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2["default"].createElement(
          "div",
          { className: "xl-mt8 xl-mb24" },
          _react2["default"].createElement(
            "div",
            { className: "code code--install" },
            _react2["default"].createElement(
              "div",
              { className: "tag tag--bottom" },
              ".scss"
            ),
            _react2["default"].createElement(
              "div",
              { className: "code__content" },
              "$flexiblegs-method: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"css\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"bem\""
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$flexiblegs-breakpoint: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"xl\" : \"\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"lg\" : \"(max-width: 1024px)\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"md\" : \"(max-width: 768px)\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"sm\" : \"(max-width: 667px)\""
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$wrap-col: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"auto\", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$wrap-prop: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"table\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"flexbox\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"normal\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"left\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"center\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"right\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"top\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"middle\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"bottom\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"between\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"around\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"baseline\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"reverse\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"not-reverse\""
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$col-row: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$col-width: ();",
              _react2["default"].createElement("br", null),
              "$col-prop: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"hidden\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"not-hidden\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"first\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"not-first\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"last\","
              ),
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "\"not-last\""
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$wrap-gutter: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "0, 8, 16, 24, 40"
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$wrap-outside: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "0, 8, 16, 24, 40"
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              "$wrap-masonry: (",
              _react2["default"].createElement("br", null),
              "  ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "2, 3, 4, 5, 6"
              ),
              _react2["default"].createElement("br", null),
              ");",
              _react2["default"].createElement("br", null),
              _react2["default"].createElement("br", null),
              "@import \"flexiblegs-scss\";",
              _react2["default"].createElement("br", null),
              "@import \"",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "flexiblegs-scss-plus"
              ),
              "\";"
            )
          )
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "a",
            {
              href: "https://www.npmjs.com/package/flexiblegs-scss-plus",
              target: "_blank",
              className: "xl-fw400 xl-co-black-500 xl-tdu" },
            "npm"
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "xl-mt8 xl-mb24" },
          _react2["default"].createElement(
            "div",
            { className: "code code--install" },
            _react2["default"].createElement(
              "div",
              { className: "tag tag--bottom" },
              "terminal"
            ),
            _react2["default"].createElement(
              "div",
              { className: "code__content" },
              "$ npm install --save ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "flexiblegs-scss-plus"
              )
            )
          )
        )
      ),
      _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "a",
            {
              href: "http://bower.io/search/?q=flexiblegs-scss-plus",
              target: "_blank",
              className: "xl-fw400 xl-co-black-500 xl-tdu" },
            "bower"
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "xl-mt8 xl-mb8" },
          _react2["default"].createElement(
            "div",
            { className: "code code--install" },
            _react2["default"].createElement(
              "div",
              { className: "tag tag--bottom" },
              "terminal"
            ),
            _react2["default"].createElement(
              "div",
              { className: "code__content" },
              "$ bower install --save ",
              _react2["default"].createElement(
                "span",
                { className: "code-item" },
                "flexiblegs-scss-plus"
              )
            )
          )
        )
      )
    );
  }
});

module.exports = InstallScssPlusContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */ /*
                  */ /*
                     */ /*
                        */ /*
                           */ /*
                              */ /*
                                 */ /*
                                    */ /*
                                       */ /*
                                          */ /*
                                             */ /*
                                                */ /*
                                                   */ /*
                                                      */ /*
                                                         */ /*
                                                            */ /*
                                                               */ /*
                                                                  */ /*
                                                                     */ /*
                                                                        */ /*
                                                                           */ /*
                                                                              */ /*
                                                                                 */ /*
                                                                                    */ /*
                                                                                       */ /*
                                                                                          */ /*
                                                                                             */ /*
                                                                                                */ /*
                                                                                                   */ /*
                                                                                                      */ /*
                                                                                                         */ /*
                                                                                                            */ /*
                                                                                                               */ /*
                                                                                                                  */ /*
                                                                                                                     */ /*
                                                                                                                        */ /*
                                                                                                                           */ /*
                                                                                                                              */ /*
                                                                                                                                 */ /*
                                                                                                                                    */ /*
                                                                                                                                       */ /*
                                                                                                                                          */ /*
                                                                                                                                             */ /*
                                                                                                                                                */ /*
                                                                                                                                                   */ /*
                                                                                                                                                      */ /*
                                                                                                                                                         */ /*
                                                                                                                                                            */ /*
                                                                                                                                                               */ /*
                                                                                                                                                                  */ /*
                                                                                                                                                                     */ /*
                                                                                                                                                                        */

},{"react":343}],14:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var InstallStylusContent = _react2['default'].createClass({
  displayName: 'InstallStylusContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://raw.githubusercontent.com/flexiblegs/flexiblegs-stylus/master/flexiblegs-stylus.styl',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu xl-pr4' },
            this.props.content.downloadTheFile
          ),
          this.props.content.andAddTheProjectAsFollows
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              '.styl'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '@import \'',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-stylus'
              ),
              '\''
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'https://www.npmjs.com/package/flexiblegs-stylus',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'npm'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ npm install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-stylus'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            {
              href: 'http://bower.io/search/?q=flexiblegs-stylus',
              target: '_blank',
              className: 'xl-fw400 xl-co-black-500 xl-tdu' },
            'bower'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-mt8 xl-mb24' },
          _react2['default'].createElement(
            'div',
            { className: 'code code--install' },
            _react2['default'].createElement(
              'div',
              { className: 'tag tag--bottom' },
              'terminal'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'code__content' },
              '$ bower install --save ',
              _react2['default'].createElement(
                'span',
                { className: 'code-item' },
                'flexiblegs-stylus'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-right md-1' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-4-12 lg-5-12' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/learn/wrap?type=stylus', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac' },
            _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
            _react2['default'].createElement(
              'span',
              { className: 'xl-di xl-vam xl-pl8' },
              this.props.header.learn,
              ' (Stylus)'
            )
          )
        )
      )
    );
  }
});

module.exports = InstallStylusContent;
/*
*/ /*
   */ /*
      */ /*
         */ /*
            */ /*
               */

},{"react":343,"react-router":166}],15:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnAroundContent = _react2['default'].createClass({
  displayName: 'LearnAroundContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-around xl-5 preview__item--wrap', style: { height: '256px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-1' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '04'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '05'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '06'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '07'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnAroundContent;

},{"../partial/Code.react":92,"react":343}],16:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnAutoContent = _react2['default'].createClass({
  displayName: 'LearnAutoContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-gutter-24 xl-auto preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { display: 'inline-block', padding: '0 40px' } },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { display: 'inline-block', padding: '0 40px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { display: 'inline-block', padding: '0 40px' } },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnAutoContent;

},{"../partial/Code.react":92,"react":343}],17:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnBaselineContent = _react2['default'].createClass({
  displayName: 'LearnBaselineContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-baseline xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { paddingTop: '64px', paddingBottom: '64px' } },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { paddingTop: '36px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { paddingBottom: '96px' } },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnBaselineContent;

},{"../partial/Code.react":92,"react":343}],18:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnBetweenContent = _react2['default'].createClass({
  displayName: 'LearnBetweenContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-between xl-5 preview__item--wrap', style: { height: '256px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-1' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '04'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '05'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '06'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '07'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnBetweenContent;

},{"../partial/Code.react":92,"react":343}],19:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnBottomContent = _react2['default'].createClass({
  displayName: 'LearnBottomContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-bottom preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'preview' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'table'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-table xl-bottom preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-bottom preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnBottomContent;

},{"../partial/Code.react":92,"react":343}],20:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var queryString = require('query-string');

var LearnBreakpointContent = _react2['default'].createClass({
  displayName: 'LearnBreakpointContent',

  render: function render() {

    var parsed = queryString.parse(location.search);

    return _react2['default'].createElement(
      'div',
      null,
      parsed.type == "scss" && _react2['default'].createElement(
        'div',
        null,
        'breakpoint scss'
      ),
      parsed.type == "sass" && _react2['default'].createElement(
        'div',
        null,
        'breakpoint sass'
      ),
      parsed.type == "less" && _react2['default'].createElement(
        'div',
        null,
        'breakpoint less'
      ),
      parsed.type == "stylus" && _react2['default'].createElement(
        'div',
        null,
        'breakpoint stylus'
      ),
      parsed.type == "css" && _react2['default'].createElement(
        'div',
        null,
        'breakpoint css'
      ),
      parsed.type == "bem" && _react2['default'].createElement(
        'div',
        null,
        'breakpoint bem'
      )
    );
  }
});

module.exports = LearnBreakpointContent;

},{"query-string":134,"react":343}],21:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnCenterContent = _react2['default'].createClass({
  displayName: 'LearnCenterContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-center preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnCenterContent;

},{"../partial/Code.react":92,"react":343}],22:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnColContent = _react2['default'].createClass({
  displayName: 'LearnColContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap preview__item--wrap' },
          _react2['default'].createElement('div', { className: 'col' })
        )
      )
    );
  }
});

module.exports = LearnColContent;

},{"../partial/Code.react":92,"react":343}],23:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnColRowContent = _react2['default'].createClass({
  displayName: 'LearnColRowContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnColRowContent;

},{"../partial/Code.react":92,"react":343}],24:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var LearnContent = _react2['default'].createClass({
  displayName: 'LearnContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line001 } }),
      _react2['default'].createElement(
        'div',
        { className: 'xl-fw600 xl-fs18 xl-mt8' },
        this.props.common.responsiveMeta
      ),
      _react2['default'].createElement(
        'div',
        { className: 'xl-pt8' },
        _react2['default'].createElement(
          'div',
          { className: 'code code--install' },
          _react2['default'].createElement(
            'div',
            { className: 'tag tag--bottom' },
            '.html'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'code__content' },
            '<head>',
            _react2['default'].createElement('br', null),
            '  <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">',
            _react2['default'].createElement('br', null),
            '</head>'
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'xl-fw600 xl-fs18' },
        _react2['default'].createElement('em', { className: 'icon-rocket icon-sm' }),
        _react2['default'].createElement(
          'span',
          { className: 'xl-di xl-vam xl-pl8' },
          this.props.common.compiledView
        )
      ),
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line002 } }),
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line003 } }),
      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content.line004 } }),
      _react2['default'].createElement(
        'div',
        { className: 'wrap xl-3 xl-gutter-24 lg-1 xl-mt24 xl-mb8' },
        _react2['default'].createElement(
          'div',
          { className: 'col xl-fs18' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600' },
            this.props.common.dynamicCore
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8' },
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  to: '/learn/wrap?type=scss',
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                'Scss'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  to: '/learn/wrap?type=sass',
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                'Sass'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  to: '/learn/wrap?type=less',
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                'Less'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  to: '/learn/wrap?type=stylus',
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                'Stylus'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-fs18 lg-my24' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600' },
            this.props.common.dynamicCompilationTool
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8' },
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500', to: '/install/scss-plus' },
                'Scss Plus'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                'div',
                { className: 'xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn' },
                'Sass Plus'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                'div',
                { className: 'xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn' },
                'Less Plus'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                'div',
                { className: 'xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn' },
                'Stylus Plus'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col xl-fs18' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600' },
            this.props.common.staticCompiled
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8' },
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  to: '/learn/wrap?type=css',
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                'CSS'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('em', { className: 'icon-dot-circle-o icon-xs xl-co-gray-300' }),
              _react2['default'].createElement(
                _reactRouter.Link,
                {
                  to: '/learn/wrap?type=bem',
                  className: 'xl-di xl-vam xl-pl8 xl-co-black-500' },
                'BEM'
              )
            )
          )
        )
      )
    );
  }
});

module.exports = LearnContent;
/*
*/ /*
   */ /*
      */ /*
         */

},{"react":343,"react-router":166}],25:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnFirstContent = _react2['default'].createClass({
  displayName: 'LearnFirstContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-first' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnFirstContent;

},{"../partial/Code.react":92,"react":343}],26:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnFlexboxContent = _react2['default'].createClass({
  displayName: 'LearnFlexboxContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-gutter-24 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnFlexboxContent;

},{"../partial/Code.react":92,"react":343}],27:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnGutterContent = _react2['default'].createClass({
  displayName: 'LearnGutterContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-gutter-24 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnGutterContent;

},{"../partial/Code.react":92,"react":343}],28:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnHiddenContent = _react2['default'].createClass({
  displayName: 'LearnHiddenContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3 xl-hidden' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnHiddenContent;

},{"../partial/Code.react":92,"react":343}],29:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnLastContent = _react2['default'].createClass({
  displayName: 'LearnLastContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-last' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnLastContent;

},{"../partial/Code.react":92,"react":343}],30:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnLeftContent = _react2['default'].createClass({
  displayName: 'LearnLeftContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-left preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnLeftContent;

},{"../partial/Code.react":92,"react":343}],31:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnMasonryContent = _react2['default'].createClass({
  displayName: 'LearnMasonryContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-gutter-24 xl-top xl-masonry-3', style: { background: '#FBD0DF' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-1' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '03'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '04'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-1' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px', height: '120px', lineHeight: '120px' } },
              '05'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-2' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '06'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-2' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '07'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-1' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { marginBottom: '24px' } },
              '08'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnMasonryContent;

},{"../partial/Code.react":92,"react":343}],32:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnMiddleContent = _react2['default'].createClass({
  displayName: 'LearnMiddleContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-middle preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'preview' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'table'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-table xl-middle preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-middle preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnMiddleContent;

},{"../partial/Code.react":92,"react":343}],33:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnNormalContent = _react2['default'].createClass({
  displayName: 'LearnNormalContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-normal xl-gutter-24 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnNormalContent;

},{"../partial/Code.react":92,"react":343}],34:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnNotFirstContent = _react2['default'].createClass({
  displayName: 'LearnNotFirstContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-not-first' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnNotFirstContent;

},{"../partial/Code.react":92,"react":343}],35:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnNotHiddenContent = _react2['default'].createClass({
  displayName: 'LearnNotHiddenContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-1-3 xl-not-hidden' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnNotHiddenContent;

},{"../partial/Code.react":92,"react":343}],36:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnNotLastContent = _react2['default'].createClass({
  displayName: 'LearnNotLastContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-not-last' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnNotLastContent;

},{"../partial/Code.react":92,"react":343}],37:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnNotReverseContent = _react2['default'].createClass({
  displayName: 'LearnNotReverseContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-not-reverse xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnNotReverseContent;

},{"../partial/Code.react":92,"react":343}],38:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnOutsideContent = _react2['default'].createClass({
  displayName: 'LearnOutsideContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-gutter-24 xl-outside-24 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnOutsideContent;

},{"../partial/Code.react":92,"react":343}],39:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnReverseContent = _react2['default'].createClass({
  displayName: 'LearnReverseContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'tag tag--middle' },
          'flexbox'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-flexbox xl-reverse xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnReverseContent;

},{"../partial/Code.react":92,"react":343}],40:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnRightContent = _react2['default'].createClass({
  displayName: 'LearnRightContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-right preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnRightContent;

},{"../partial/Code.react":92,"react":343}],41:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnTableContent = _react2['default'].createClass({
  displayName: 'LearnTableContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-table xl-gutter-24 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col', style: { width: '124px' } },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col', style: { width: '224px' } },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnTableContent;

},{"../partial/Code.react":92,"react":343}],42:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnTopContent = _react2['default'].createClass({
  displayName: 'LearnTopContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-top preview__item--wrap', style: { height: '144px' } },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-6-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col', style: { height: '96px', lineHeight: '96px' } },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnTopContent;

},{"../partial/Code.react":92,"react":343}],43:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnWidthContent = _react2['default'].createClass({
  displayName: 'LearnWidthContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type })
    );
  }
});

module.exports = LearnWidthContent;

},{"../partial/Code.react":92,"react":343}],44:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnWrapColContent = _react2['default'].createClass({
  displayName: 'LearnWrapColContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-gutter-24 xl-3 preview__item--wrap' },
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '01'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '02'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col' },
            _react2['default'].createElement(
              'div',
              { className: 'preview__item--col' },
              '03'
            )
          )
        )
      )
    );
  }
});

module.exports = LearnWrapColContent;

},{"../partial/Code.react":92,"react":343}],45:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialCodeReact = require('../partial/Code.react');

var _partialCodeReact2 = _interopRequireDefault(_partialCodeReact);

var LearnWrapContent = _react2['default'].createClass({
  displayName: 'LearnWrapContent',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialCodeReact2['default'], { type: this.props.type }),
      _react2['default'].createElement(
        'div',
        { className: 'preview preview--last-child' },
        _react2['default'].createElement('div', { className: 'wrap preview__item--wrap' })
      )
    );
  }
});

module.exports = LearnWrapContent;

},{"../partial/Code.react":92,"react":343}],46:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var MotivationContent = _react2["default"].createClass({
  displayName: "MotivationContent",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content.line001 } }),
      _react2["default"].createElement(
        "div",
        { className: "wrap xl-gutter-16 xl-2 xl-mt8 sm-1" },
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "https://github.com/showcases/design-essentials",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "github.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://sass-lang.com/community",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "sass-lang.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://lesscss.org/usage/#frameworks-using-less-grid-systems",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "lesscss.org"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "https://github.com/stylus/stylus/wiki",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "stylus-lang.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://sassbreak.com/resources",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "sassbreak.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://webrazzi.com/2015/04/24/flexible-grid-system-turkiye-github",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "webrazzi.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://www.mserdark.com/haftanin-ozeti-4",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "mserdark.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://webbox5.webbox.io/2014/07/25/004",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "webbox5.webbox.io"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://slides.com/nesrinkalender/htmlmagazin-calistayi",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "slides.com/nesrinkalender"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://www.ozgurwebgunleri.org.tr/2014/etkinlik-programi-2",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "ozgurwebgunleri.org.tr"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://designinstruct.com/web-design/flexible-grid-system",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "designinstruct.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "https://rschu.me/the-history-of-a-nifty-css-flexible-grid-system",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "rschu.me"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://coliss.com/articles/build-websites/operation/css/css-flexible-grid-system-flexiblegs.html",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "coliss.com"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col xl-fs18" },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("em", { className: "icon-dot-circle-o icon-xs xl-co-gray-300" }),
            _react2["default"].createElement(
              "a",
              {
                href: "http://www.moongift.jp/2015/04/flexible-gs-%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96%E5%AF%BE%E5%BF%9C%E3%81%AE%E3%82%B0%E3%83%AA%E3%83%83%E3%83%89%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E3%83%95%E3%83%AC",
                target: "_blank",
                className: "xl-di xl-vam xl-pl8 xl-co-black-500" },
              "moongift.jp"
            )
          )
        )
      )
    );
  }
});

module.exports = MotivationContent;

},{"react":343}],47:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PageNotFoundContent = _react2["default"].createClass({
  displayName: "PageNotFoundContent",

  render: function render() {
    return _react2["default"].createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content.line001 } });
  }
});

module.exports = PageNotFoundContent;

},{"react":343}],48:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var Compatibility = _react2['default'].createClass({
  displayName: 'Compatibility',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'compatibility' });
  }
});

module.exports = Compatibility;

},{"../partial/Layout.react":95,"react":343}],49:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var Future = _react2['default'].createClass({
  displayName: 'Future',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'future' });
  }
});

module.exports = Future;

},{"../partial/Layout.react":95,"react":343}],50:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var Homepage = _react2['default'].createClass({
  displayName: 'Homepage',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'homepage' });
  }
});

module.exports = Homepage;

},{"../partial/Layout.react":95,"react":343}],51:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var Install = _react2['default'].createClass({
  displayName: 'Install',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install' });
  }
});

module.exports = Install;

},{"../partial/Layout.react":95,"react":343}],52:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstallBEM = _react2['default'].createClass({
  displayName: 'InstallBEM',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'bem' });
  }
});

module.exports = InstallBEM;

},{"../partial/Layout.react":95,"react":343}],53:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstallCSS = _react2['default'].createClass({
  displayName: 'InstallCSS',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'css' });
  }
});

module.exports = InstallCSS;

},{"../partial/Layout.react":95,"react":343}],54:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstallLess = _react2['default'].createClass({
  displayName: 'InstallLess',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'less' });
  }
});

module.exports = InstallLess;

},{"../partial/Layout.react":95,"react":343}],55:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstallSass = _react2['default'].createClass({
  displayName: 'InstallSass',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'sass' });
  }
});

module.exports = InstallSass;

},{"../partial/Layout.react":95,"react":343}],56:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstallScss = _react2['default'].createClass({
  displayName: 'InstallScss',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'scss' });
  }
});

module.exports = InstallScss;

},{"../partial/Layout.react":95,"react":343}],57:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstallScssPlus = _react2['default'].createClass({
  displayName: 'InstallScssPlus',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'scss-plus' });
  }
});

module.exports = InstallScssPlus;

},{"../partial/Layout.react":95,"react":343}],58:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var InstalStylus = _react2['default'].createClass({
  displayName: 'InstalStylus',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'install', type: 'stylus' });
  }
});

module.exports = InstalStylus;

},{"../partial/Layout.react":95,"react":343}],59:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var Learn = _react2['default'].createClass({
  displayName: 'Learn',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn' });
  }
});

module.exports = Learn;

},{"../partial/Layout.react":95,"react":343}],60:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnAround = _react2['default'].createClass({
  displayName: 'LearnAround',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'around' });
  }
});

module.exports = LearnAround;

},{"../partial/Layout.react":95,"react":343}],61:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnAuto = _react2['default'].createClass({
  displayName: 'LearnAuto',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'auto' });
  }
});

module.exports = LearnAuto;

},{"../partial/Layout.react":95,"react":343}],62:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnBaseline = _react2['default'].createClass({
  displayName: 'LearnBaseline',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'baseline' });
  }
});

module.exports = LearnBaseline;

},{"../partial/Layout.react":95,"react":343}],63:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnBetween = _react2['default'].createClass({
  displayName: 'LearnBetween',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'between' });
  }
});

module.exports = LearnBetween;

},{"../partial/Layout.react":95,"react":343}],64:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnBottom = _react2['default'].createClass({
  displayName: 'LearnBottom',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'bottom' });
  }
});

module.exports = LearnBottom;

},{"../partial/Layout.react":95,"react":343}],65:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnBreakpoint = _react2['default'].createClass({
  displayName: 'LearnBreakpoint',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'breakpoint' });
  }
});

module.exports = LearnBreakpoint;

},{"../partial/Layout.react":95,"react":343}],66:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnCenter = _react2['default'].createClass({
  displayName: 'LearnCenter',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'center' });
  }
});

module.exports = LearnCenter;

},{"../partial/Layout.react":95,"react":343}],67:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnCol = _react2['default'].createClass({
  displayName: 'LearnCol',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'col' });
  }
});

module.exports = LearnCol;

},{"../partial/Layout.react":95,"react":343}],68:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnColRow = _react2['default'].createClass({
  displayName: 'LearnColRow',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'col-row' });
  }
});

module.exports = LearnColRow;

},{"../partial/Layout.react":95,"react":343}],69:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnFirst = _react2['default'].createClass({
  displayName: 'LearnFirst',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'first' });
  }
});

module.exports = LearnFirst;

},{"../partial/Layout.react":95,"react":343}],70:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnFlexbox = _react2['default'].createClass({
  displayName: 'LearnFlexbox',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'flexbox' });
  }
});

module.exports = LearnFlexbox;

},{"../partial/Layout.react":95,"react":343}],71:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnGutter = _react2['default'].createClass({
  displayName: 'LearnGutter',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'gutter' });
  }
});

module.exports = LearnGutter;

},{"../partial/Layout.react":95,"react":343}],72:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnHidden = _react2['default'].createClass({
  displayName: 'LearnHidden',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'hidden' });
  }
});

module.exports = LearnHidden;

},{"../partial/Layout.react":95,"react":343}],73:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnLast = _react2['default'].createClass({
  displayName: 'LearnLast',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'last' });
  }
});

module.exports = LearnLast;

},{"../partial/Layout.react":95,"react":343}],74:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnLeft = _react2['default'].createClass({
  displayName: 'LearnLeft',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'left' });
  }
});

module.exports = LearnLeft;

},{"../partial/Layout.react":95,"react":343}],75:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnMasonry = _react2['default'].createClass({
  displayName: 'LearnMasonry',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'masonry' });
  }
});

module.exports = LearnMasonry;

},{"../partial/Layout.react":95,"react":343}],76:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnMiddle = _react2['default'].createClass({
  displayName: 'LearnMiddle',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'middle' });
  }
});

module.exports = LearnMiddle;

},{"../partial/Layout.react":95,"react":343}],77:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnNormal = _react2['default'].createClass({
  displayName: 'LearnNormal',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'normal' });
  }
});

module.exports = LearnNormal;

},{"../partial/Layout.react":95,"react":343}],78:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnNotFirst = _react2['default'].createClass({
  displayName: 'LearnNotFirst',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'not-first' });
  }
});

module.exports = LearnNotFirst;

},{"../partial/Layout.react":95,"react":343}],79:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnNotHidden = _react2['default'].createClass({
  displayName: 'LearnNotHidden',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'not-hidden' });
  }
});

module.exports = LearnNotHidden;

},{"../partial/Layout.react":95,"react":343}],80:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnNotLast = _react2['default'].createClass({
  displayName: 'LearnNotLast',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'not-last' });
  }
});

module.exports = LearnNotLast;

},{"../partial/Layout.react":95,"react":343}],81:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnNotReverse = _react2['default'].createClass({
  displayName: 'LearnNotReverse',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'not-reverse' });
  }
});

module.exports = LearnNotReverse;

},{"../partial/Layout.react":95,"react":343}],82:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnOutside = _react2['default'].createClass({
  displayName: 'LearnOutside',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'outside' });
  }
});

module.exports = LearnOutside;

},{"../partial/Layout.react":95,"react":343}],83:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnReverse = _react2['default'].createClass({
  displayName: 'LearnReverse',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'reverse' });
  }
});

module.exports = LearnReverse;

},{"../partial/Layout.react":95,"react":343}],84:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnRight = _react2['default'].createClass({
  displayName: 'LearnRight',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'right' });
  }
});

module.exports = LearnRight;

},{"../partial/Layout.react":95,"react":343}],85:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnTable = _react2['default'].createClass({
  displayName: 'LearnTable',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'table' });
  }
});

module.exports = LearnTable;

},{"../partial/Layout.react":95,"react":343}],86:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnTop = _react2['default'].createClass({
  displayName: 'LearnTop',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'top' });
  }
});

module.exports = LearnTop;

},{"../partial/Layout.react":95,"react":343}],87:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnWidth = _react2['default'].createClass({
  displayName: 'LearnWidth',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'width' });
  }
});

module.exports = LearnWidth;

},{"../partial/Layout.react":95,"react":343}],88:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnWrap = _react2['default'].createClass({
  displayName: 'LearnWrap',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'wrap' });
  }
});

module.exports = LearnWrap;

},{"../partial/Layout.react":95,"react":343}],89:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var LearnWrapCol = _react2['default'].createClass({
  displayName: 'LearnWrapCol',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'learn', type: 'wrap-col' });
  }
});

module.exports = LearnWrapCol;

},{"../partial/Layout.react":95,"react":343}],90:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var Motivation = _react2['default'].createClass({
  displayName: 'Motivation',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'motivation' });
  }
});

module.exports = Motivation;

},{"../partial/Layout.react":95,"react":343}],91:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialLayoutReact = require('../partial/Layout.react');

var _partialLayoutReact2 = _interopRequireDefault(_partialLayoutReact);

var PageNotFound = _react2['default'].createClass({
  displayName: 'PageNotFound',

  render: function render() {
    return _react2['default'].createElement(_partialLayoutReact2['default'], { page: 'page-not-found' });
  }
});

module.exports = PageNotFound;

},{"../partial/Layout.react":95,"react":343}],92:[function(require,module,exports){
"use strict";function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _react=require('react');var _react2=_interopRequireDefault(_react);var queryString=require('query-string');var Code=_react2['default'].createClass({displayName:'Code',getInitialState:function getInitialState(){return {compiledView:false};},notHiddenCompiledView:function notHiddenCompiledView(event){this.setState({compiledView:true});},hiddenCompiledView:function hiddenCompiledView(event){this.setState({compiledView:false});},learnType:function learnType(){var parsed=queryString.parse(location.search);return _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'tag tag--bottom'},'.html'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'tag tag--bottom'},'.html'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'tag tag--bottom'},'.scss'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'tag tag--bottom'},'.sass'),parsed.type == "less" && _react2['default'].createElement('div',{className:'tag tag--bottom'},'.less'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'tag tag--bottom'},'.styl'),this.props.type == "wrap" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="',_react2['default'].createElement('span',{className:'code-item'},'wrap'),'">',_react2['default'].createElement('br',null), /*
                  */_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="',_react2['default'].createElement('span',{className:'code-item'},'wrap'),'">',_react2['default'].createElement('br',null), /*
                  */_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap'),';',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap'),_react2['default'].createElement('br',null),' '),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap'),';',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap'),'()',_react2['default'].createElement('br',null),' ')),this.props.type == "col" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="',_react2['default'].createElement('span',{className:'code-item'},'col'),'"></div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="',_react2['default'].createElement('span',{className:'code-item'},'wrap__col'),'"></div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include ',_react2['default'].createElement('span',{className:'code-item'},'col'),';',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +',_react2['default'].createElement('span',{className:'code-item'},'col')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .',_react2['default'].createElement('span',{className:'code-item'},'col'),';',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    ',_react2['default'].createElement('span',{className:'code-item'},'col()'))),this.props.type == "col-row" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-1-3'),'">01</div>',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-1-3'),'">02</div>',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-1-3'),'">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-1 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-2 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-3, 2-3 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-4, 2-4, 3-4 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-5, 2-5, 3-5, 4-5 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-6, 2-6, 3-6, 4-6, 5-6 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-7, 2-7, 3-7, 4-7, 5-7, 6-7 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-8, 2-8, 3-8, 4-8, 5-8, 6-8, 7-8 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-9, 2-9, 3-9, 4-9, 5-9, 6-9, 7-9, 8-9, -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-10, 2-10, 3-10, 4-10, 5-10, 6-10, 7-10, 8-10, 9-10, -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-11, 2-11, 3-11, 4-11, 5-11, 6-11, 7-11, 8-11, 9-11, 10-11, -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-12, 2-12, 3-12, 4-12, 5-12, 6-12, 7-12, 8-12, 9-12, 10-12, 11-12, -->')),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-1-3'),'">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-1-3'),'">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-1-3'),'">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-1 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-2 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-3, 2-3 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-4, 2-4, 3-4 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-5, 2-5, 3-5, 4-5 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-6, 2-6, 3-6, 4-6, 5-6 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-7, 2-7, 3-7, 4-7, 5-7, 6-7 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-8, 2-8, 3-8, 4-8, 5-8, 6-8, 7-8 -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-9, 2-9, 3-9, 4-9, 5-9, 6-9, 7-9, 8-9, -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-10, 2-10, 3-10, 4-10, 5-10, 6-10, 7-10, 8-10, 9-10, -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-11, 2-11, 3-11, 4-11, 5-11, 6-11, 7-11, 8-11, 9-11, 10-11, -->'), /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1-12, 2-12, 3-12, 4-12, 5-12, 6-12, 7-12, 8-12, 9-12, 10-12, 11-12, -->')),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    @include ',_react2['default'].createElement('span',{className:'code-item'},'col(1,3)'),';',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    +',_react2['default'].createElement('span',{className:'code-item'},'col(1,3)')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    .',_react2['default'].createElement('span',{className:'code-item'},'col(1,3)'),';',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    ',_react2['default'].createElement('span',{className:'code-item'},'col(1,3)'))),this.props.type == "hidden" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3 ',_react2['default'].createElement('span',{className:'code-item'},'xl-hidden'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3 ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-hidden'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    @include col(1,3);',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include ',_react2['default'].createElement('span',{className:'code-item'},'col("hidden")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    +col(1,3)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +',_react2['default'].createElement('span',{className:'code-item'},'col("hidden")')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    .col(1,3);',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .',_react2['default'].createElement('span',{className:'code-item'},'col("hidden")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    col(1,3)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      ',_react2['default'].createElement('span',{className:'code-item'},'col("hidden")'))),this.props.type == "not-hidden" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3 ',_react2['default'].createElement('span',{className:'code-item'},'xl-not-hidden'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3 ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-not-hidden'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    @include col(1,3);',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include ',_react2['default'].createElement('span',{className:'code-item'},'col("not-hidden")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    +col(1,3)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +',_react2['default'].createElement('span',{className:'code-item'},'col("not-hidden")')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    .col(1,3);',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .',_react2['default'].createElement('span',{className:'code-item'},'col("not-hidden")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    col(1,3)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      ',_react2['default'].createElement('span',{className:'code-item'},'col("not-hidden")'))),this.props.type == "gutter" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-gutter-24'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 0, 8, 16, 24, 40 -->')),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-gutter-24'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 0, 8, 16, 24, 40 -->')),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("gutter",24)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("gutter",24)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("gutter",24)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("gutter",24)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)')),this.props.type == "outside" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-gutter-24 ',_react2['default'].createElement('span',{className:'code-item'},'xl-outside-24'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 0, 8, 16, 24, 40 -->')),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-gutter-24 ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-outside-24'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 0, 8, 16, 24, 40 -->')),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("outside",24)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("outside",24)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("outside",24)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("outside",24)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)')),this.props.type == "wrap-col" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-gutter-24 ',_react2['default'].createElement('span',{className:'code-item'},'xl-3'),'">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 -->')),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-gutter-24 ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-3'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 -->')),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap(3)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap(3)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap(3)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap(3)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()')),this.props.type == "auto" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-gutter-24 ',_react2['default'].createElement('span',{className:'code-item'},'xl-auto'),'">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-gutter-24 ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-auto'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("auto")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("auto")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("auto")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("auto")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()')),this.props.type == "table" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-table'),' xl-gutter-24">',_react2['default'].createElement('br',null),'  <div class="col" style="width: 112px;">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col" style="width: 212px;">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-table'),' wrap--xl-gutter-24">',_react2['default'].createElement('br',null),'  <div class="wrap__col" style="width: 112px;">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col" style="width: 212px;">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("table")'),';',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      width: 112px;',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      width: 212px;',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("table")'),_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      width: 112px',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      width: 212px'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("table")'),';',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      width: 112px;',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      width: 212px;',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("table")'),_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      width: 112px',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      width: 212px')),this.props.type == "width" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'css'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'bem'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'scss'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'sass'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'less'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'stylus')),this.props.type == "flexbox" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-flexbox'),' xl-gutter-24">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- between, around, baseline, first, last, reverse -->')),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-flexbox'),' wrap--xl-gutter-24">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- between, around, baseline, first, last, reverse -->')),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("flexbox")'),';',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("flexbox")'),_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("flexbox")'),';',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("flexbox")'),_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)')),this.props.type == "normal" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-normal'),' xl-gutter-24">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-normal'),' wrap--xl-gutter-24">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("normal")'),';',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("normal")'),_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("normal")'),';',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("normal")'),_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)')),this.props.type == "left" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-left'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-left'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("left")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("left")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("left")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("left")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)')),this.props.type == "center" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-center'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-center'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("center")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("center")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("center")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("center")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)')),this.props.type == "right" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-right'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-right'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("right")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("right")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("right")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("right")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)')),this.props.type == "top" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-top'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-top'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("top")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("top")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null)),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("top")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("top")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null))),this.props.type == "middle" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-middle'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-middle'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("middle")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("middle")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null)),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("middle")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("middle")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null))),this.props.type == "bottom" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'xl-bottom'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-bottom'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-6-12">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-3-12">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("bottom")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("bottom")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(3,12)',_react2['default'].createElement('br',null)),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("bottom")'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(6,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(3,12);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("bottom")'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(6,12)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(3,12)',_react2['default'].createElement('br',null))),this.props.type == "between" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'xl-between'),' xl-5">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-1">04</div>',_react2['default'].createElement('br',null),'  <div class="col">05</div>',_react2['default'].createElement('br',null),'  <div class="col">06</div>',_react2['default'].createElement('br',null),'  <div class="col">07</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-between'),' wrap--xl-5">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-1">04</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">05</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">06</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">07</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("between")'),';',_react2['default'].createElement('br',null),'  @include wrap(5);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.four {',_react2['default'].createElement('br',null),'      @include col(1,1);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("between")'),_react2['default'].createElement('br',null),'  +wrap(5)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.four',_react2['default'].createElement('br',null),'      +col(1,1)',_react2['default'].createElement('br',null)),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("between")'),';',_react2['default'].createElement('br',null),'  .wrap(5);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.four {',_react2['default'].createElement('br',null),'      .col(1,1);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("between")'),_react2['default'].createElement('br',null),'  wrap(5)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.four',_react2['default'].createElement('br',null),'      col(1,1)',_react2['default'].createElement('br',null))),this.props.type == "around" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'xl-around'),' xl-5">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-1">04</div>',_react2['default'].createElement('br',null),'  <div class="col">05</div>',_react2['default'].createElement('br',null),'  <div class="col">06</div>',_react2['default'].createElement('br',null),'  <div class="col">07</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-around'),' wrap--xl-5">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-1">04</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">05</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">06</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">07</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("around")'),';',_react2['default'].createElement('br',null),'  @include wrap(5);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.four {',_react2['default'].createElement('br',null),'      @include col(1,1);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("around")'),_react2['default'].createElement('br',null),'  +wrap(5)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.four',_react2['default'].createElement('br',null),'      +col(1,1)',_react2['default'].createElement('br',null)),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("around")'),';',_react2['default'].createElement('br',null),'  .wrap(5);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.four {',_react2['default'].createElement('br',null),'      .col(1,1);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("around")'),_react2['default'].createElement('br',null),'  wrap(5)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.four',_react2['default'].createElement('br',null),'      col(1,1)',_react2['default'].createElement('br',null))),this.props.type == "baseline" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'xl-baseline'),' xl-3">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-baseline'),' wrap--xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("baseline")'),';',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("baseline")'),_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("baseline")'),';',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("baseline")'),_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()')),this.props.type == "first" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-first'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-first'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include ',_react2['default'].createElement('span',{className:'code-item'},'col("first")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +',_react2['default'].createElement('span',{className:'code-item'},'col("first")')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .',_react2['default'].createElement('span',{className:'code-item'},'col("first")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      ',_react2['default'].createElement('span',{className:'code-item'},'col("first")'))),this.props.type == "not-first" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-not-first'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-not-first'),'">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include ',_react2['default'].createElement('span',{className:'code-item'},'col("not-first")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +',_react2['default'].createElement('span',{className:'code-item'},'col("not-first")')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .',_react2['default'].createElement('span',{className:'code-item'},'col("not-first")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      ',_react2['default'].createElement('span',{className:'code-item'},'col("not-first")'))),this.props.type == "last" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-last'),'">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-last'),'">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include ',_react2['default'].createElement('span',{className:'code-item'},'col("last")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +',_react2['default'].createElement('span',{className:'code-item'},'col("last")')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .',_react2['default'].createElement('span',{className:'code-item'},'col("last")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      ',_react2['default'].createElement('span',{className:'code-item'},'col("last")'))),this.props.type == "not-last" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="col ',_react2['default'].createElement('span',{className:'code-item'},'xl-not-last'),'">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col ',_react2['default'].createElement('span',{className:'code-item'},'wrap__col--xl-not-last'),'">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include ',_react2['default'].createElement('span',{className:'code-item'},'col("not-last")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +',_react2['default'].createElement('span',{className:'code-item'},'col("not-last")')),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .',_react2['default'].createElement('span',{className:'code-item'},'col("not-last")'),';',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      ',_react2['default'].createElement('span',{className:'code-item'},'col("not-last")'))),this.props.type == "reverse" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'xl-reverse'),' xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-reverse'),' wrap--xl-gutter-24 wrap--xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("reverse")'),';',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("reverse")'),_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("reverse")'),';',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("reverse")'),_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()')),this.props.type == "not-reverse" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'xl-not-reverse'),' xl-gutter-24 xl-3">',_react2['default'].createElement('br',null),'  <div class="col">01</div>',_react2['default'].createElement('br',null),'  <div class="col">02</div>',_react2['default'].createElement('br',null),'  <div class="col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-flexbox ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-not-reverse'),' wrap--xl-gutter-24 wrap--xl-3">',_react2['default'].createElement('br',null),'  <div class="wrap__col">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col">03</div>',_react2['default'].createElement('br',null),'</div>'),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("flexbox");',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("not-reverse")'),';',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("flexbox")',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("not-reverse")'),_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col'),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("flexbox");',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("not-reverse")'),';',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap(3);',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("flexbox")',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("not-reverse")'),_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap(3)',_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()')),this.props.type == "masonry" && _react2['default'].createElement('div',null,parsed.type == "css" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap xl-gutter-24 xl-top ',_react2['default'].createElement('span',{className:'code-item'},'xl-masonry-3'),'">',_react2['default'].createElement('br',null),'  <div class="col xl-1-1">01</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">02</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">03</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-3">04</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-1">05</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-2">06</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-2">07</div>',_react2['default'].createElement('br',null),'  <div class="col xl-1-1">08</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 2, 3, 4, 5, 6 -->')),parsed.type == "bem" && _react2['default'].createElement('div',{className:'code__content'},'<div class="wrap wrap--xl-gutter-24 wrap--xl-top ',_react2['default'].createElement('span',{className:'code-item'},'wrap--xl-masonry-3'),'">',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-1">01</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">02</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">03</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-3">04</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-1">05</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-2">06</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-2">07</div>',_react2['default'].createElement('br',null),'  <div class="wrap__col wrap__col--xl-1-1">08</div>',_react2['default'].createElement('br',null),'</div>', /*
                  */_react2['default'].createElement('div',{className:'code-comment'},'<!-- 2, 3, 4, 5, 6 -->')),parsed.type == "scss" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  @include wrap;',_react2['default'].createElement('br',null),'  @include wrap("gutter",24);',_react2['default'].createElement('br',null),'  @include wrap("top");',_react2['default'].createElement('br',null),'  @include ',_react2['default'].createElement('span',{className:'code-item'},'wrap("masonry",3)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    @include col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      @include col(1,1);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      @include col(1,2);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      @include col(1,3);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "sass" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  +wrap',_react2['default'].createElement('br',null),'  +wrap("gutter",24)',_react2['default'].createElement('br',null),'  +wrap("top")',_react2['default'].createElement('br',null),'  +',_react2['default'].createElement('span',{className:'code-item'},'wrap("masonry",3)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    +col',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      +col(1,1)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      +col(1,2)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      +col(1,3)',_react2['default'].createElement('br',null)),parsed.type == "less" && _react2['default'].createElement('div',{className:'code__content'},'.example {',_react2['default'].createElement('br',null),'  .wrap;',_react2['default'].createElement('br',null),'  .wrap("gutter",24);',_react2['default'].createElement('br',null),'  .wrap("top");',_react2['default'].createElement('br',null),'  .',_react2['default'].createElement('span',{className:'code-item'},'wrap("masonry",3)'),';',_react2['default'].createElement('br',null),'  &__item {',_react2['default'].createElement('br',null),'    .col;',_react2['default'].createElement('br',null),'    &.one {',_react2['default'].createElement('br',null),'      .col(1,1);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.two {',_react2['default'].createElement('br',null),'      .col(1,2);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'    &.three {',_react2['default'].createElement('br',null),'      .col(1,3);',_react2['default'].createElement('br',null),'    }',_react2['default'].createElement('br',null),'  }',_react2['default'].createElement('br',null),'}'),parsed.type == "stylus" && _react2['default'].createElement('div',{className:'code__content'},'.example',_react2['default'].createElement('br',null),'  wrap()',_react2['default'].createElement('br',null),'  wrap("gutter",24)',_react2['default'].createElement('br',null),'  wrap("top")',_react2['default'].createElement('br',null),'  ',_react2['default'].createElement('span',{className:'code-item'},'wrap("masonry",3)'),_react2['default'].createElement('br',null),'  &__item',_react2['default'].createElement('br',null),'    col()',_react2['default'].createElement('br',null),'    &.one',_react2['default'].createElement('br',null),'      col(1,1)',_react2['default'].createElement('br',null),'    &.two',_react2['default'].createElement('br',null),'      col(1,2)',_react2['default'].createElement('br',null),'    &.three',_react2['default'].createElement('br',null),'      col(1,3)',_react2['default'].createElement('br',null))));},compiledView:function compiledView(){return _react2['default'].createElement('div',null,this.props.type == "wrap" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap'),_react2['default'].createElement('br',null),'  display: block;',_react2['default'].createElement('br',null),'  width: 100%;',_react2['default'].createElement('br',null),'  font-size: 0;',_react2['default'].createElement('br',null),'  letter-spacing: 0;',_react2['default'].createElement('br',null),'  text-align: left;',_react2['default'].createElement('br',null),'  box-sizing: border-box;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col'),_react2['default'].createElement('br',null),'  display: inline-block;',_react2['default'].createElement('br',null),'  vertical-align: top;'),this.props.type == "col" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col'),_react2['default'].createElement('br',null),'  min-height: 1px;',_react2['default'].createElement('br',null),'  font-size: 1rem;',_react2['default'].createElement('br',null),'  vertical-align: middle;',_react2['default'].createElement('br',null),'  box-sizing: border-box;',_react2['default'].createElement('br',null)),this.props.type == "col-row" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(@col,@row)'),_react2['default'].createElement('br',null),'  width: 100% / @row * @col;'),this.props.type == "hidden" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(hidden)'),_react2['default'].createElement('br',null),'  display: none;'),this.props.type == "not-hidden" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(not-hidden)'),_react2['default'].createElement('br',null),'  display: inline-block;'),this.props.type == "gutter" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(gutter,@width)'),_react2['default'].createElement('br',null),'  width: calc(100% + @width);',_react2['default'].createElement('br',null),'  margin-left: -@width/2;',_react2['default'].createElement('br',null),'  margin-right: -@width/2;',_react2['default'].createElement('br',null),'  padding-left: 0;',_react2['default'].createElement('br',null),'  padding-right: 0;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(gutter,@width) > col'),_react2['default'].createElement('br',null),'  padding-left: @width/2;',_react2['default'].createElement('br',null),'  padding-right: @width/2;'),this.props.type == "outside" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(outside,@width)'),_react2['default'].createElement('br',null),'  width: 100%;',_react2['default'].createElement('br',null),'  margin-left: 0;',_react2['default'].createElement('br',null),'  margin-right: 0;',_react2['default'].createElement('br',null),'  padding-left: @width/2;',_react2['default'].createElement('br',null),'  padding-right: @width/2;'),this.props.type == "wrap-col" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(@col) > col'),_react2['default'].createElement('br',null),'  width: 100% / @col;'),this.props.type == "auto" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(auto) > col'),_react2['default'].createElement('br',null),'  width: auto;'),this.props.type == "table" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(table)'),_react2['default'].createElement('br',null),'  display: table;',_react2['default'].createElement('br',null),'  table-layout: fixed;',_react2['default'].createElement('br',null),'  flex-direction: initial;',_react2['default'].createElement('br',null),'  flex-wrap: initial;',_react2['default'].createElement('br',null),'  justify-content: initial;',_react2['default'].createElement('br',null),'  align-content: initial;',_react2['default'].createElement('br',null),'  align-items: initial;',_react2['default'].createElement('br',null),'  -moz-column-count: auto;',_react2['default'].createElement('br',null),'  column-count: auto;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(table) > col'),_react2['default'].createElement('br',null),'  display: table-cell;'),this.props.type == "width" && _react2['default'].createElement('div',null),this.props.type == "flexbox" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(flexbox)'),_react2['default'].createElement('br',null),'  display: flex;',_react2['default'].createElement('br',null),'  table-layout: auto;',_react2['default'].createElement('br',null),'  flex-direction: row;',_react2['default'].createElement('br',null),'  flex-wrap: wrap;',_react2['default'].createElement('br',null),'  justify-content: flex-start;',_react2['default'].createElement('br',null),'  align-content: center;',_react2['default'].createElement('br',null),'  align-items: center;',_react2['default'].createElement('br',null),'  column-count: auto;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(flexbox) > col'),_react2['default'].createElement('br',null),'  display: inline-block;'),this.props.type == "normal" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(normal)'),_react2['default'].createElement('br',null),'  display: block;',_react2['default'].createElement('br',null),'  table-layout: auto;',_react2['default'].createElement('br',null),'  flex-direction: initial;',_react2['default'].createElement('br',null),'  flex-wrap: initial;',_react2['default'].createElement('br',null),'  justify-content: initial;',_react2['default'].createElement('br',null),'  align-content: initial;',_react2['default'].createElement('br',null),'  align-items: initial;',_react2['default'].createElement('br',null),'  column-count: auto;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(normal) > col'),_react2['default'].createElement('br',null),'  display: inline-block;'),this.props.type == "left" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(left)'),_react2['default'].createElement('br',null),'  justify-content: flex-start;',_react2['default'].createElement('br',null),'  text-align: left;'),this.props.type == "center" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(center)'),_react2['default'].createElement('br',null),'  justify-content: center;',_react2['default'].createElement('br',null),'  text-align: center;'),this.props.type == "right" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(right)'),_react2['default'].createElement('br',null),'  justify-content: flex-end;',_react2['default'].createElement('br',null),'  text-align: right;'),this.props.type == "top" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(top)'),_react2['default'].createElement('br',null),'  align-content: flex-start;',_react2['default'].createElement('br',null),'  align-items: flex-start;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(top) > col'),_react2['default'].createElement('br',null),'  vertical-align: top;'),this.props.type == "middle" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(middle)'),_react2['default'].createElement('br',null),'  align-content: center;',_react2['default'].createElement('br',null),'  align-items: center;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(middle) > col'),_react2['default'].createElement('br',null),'  vertical-align: middle;'),this.props.type == "bottom" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(bottom)'),_react2['default'].createElement('br',null),'  align-content: flex-end;',_react2['default'].createElement('br',null),'  align-items: flex-end;',_react2['default'].createElement('br',null), /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(bottom) > col'),_react2['default'].createElement('br',null),'  vertical-align: bottom;'),this.props.type == "between" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(between)'),_react2['default'].createElement('br',null),'  justify-content: space-between;',_react2['default'].createElement('br',null),'  align-content: space-between;',_react2['default'].createElement('br',null)),this.props.type == "around" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(around)'),_react2['default'].createElement('br',null),'  justify-content: space-around;',_react2['default'].createElement('br',null),'  align-content: space-around;',_react2['default'].createElement('br',null)),this.props.type == "baseline" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(baseline)'),_react2['default'].createElement('br',null),'  align-items: baseline;',_react2['default'].createElement('br',null)),this.props.type == "first" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(first)'),_react2['default'].createElement('br',null),'  order: -1;',_react2['default'].createElement('br',null)),this.props.type == "not-first" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(not-first)'),_react2['default'].createElement('br',null),'  order: 0;',_react2['default'].createElement('br',null)),this.props.type == "last" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(last)'),_react2['default'].createElement('br',null),'  order: 1;',_react2['default'].createElement('br',null)),this.props.type == "not-last" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap > col(not-last)'),_react2['default'].createElement('br',null),'  order: 0;',_react2['default'].createElement('br',null)),this.props.type == "reverse" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(reverse)'),_react2['default'].createElement('br',null),'  flex-direction: row-reverse;',_react2['default'].createElement('br',null),'  flex-wrap: wrap-reverse;',_react2['default'].createElement('br',null)),this.props.type == "not-reverse" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(not-reverse)'),_react2['default'].createElement('br',null),'  flex-direction: row;',_react2['default'].createElement('br',null),'  flex-wrap: wrap;',_react2['default'].createElement('br',null)),this.props.type == "masonry" && _react2['default'].createElement('div',{className:'code__content'}, /*
            */_react2['default'].createElement('span',{className:'code-item'},'wrap(masonry,@col)'),_react2['default'].createElement('br',null),'  column-count: @col;',_react2['default'].createElement('br',null)));},exampleHtml:function exampleHtml(){return _react2['default'].createElement('div',null,_react2['default'].createElement('div',{className:'code code--install'},_react2['default'].createElement('div',{className:'tag tag--bottom'},'.html'),this.props.type == "wrap" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null), /*
              */_react2['default'].createElement('br',null),'</div>'),this.props.type == "col" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item"></div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "col-row" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "hidden" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "not-hidden" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "gutter" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "outside" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "wrap-col" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "auto" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "table" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "width" && _react2['default'].createElement('div',null),this.props.type == "flexbox" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "normal" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "left" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "center" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "right" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "top" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "middle" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "bottom" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "between" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'  <div class="example__item four">04</div>',_react2['default'].createElement('br',null),'  <div class="example__item">05</div>',_react2['default'].createElement('br',null),'  <div class="example__item">06</div>',_react2['default'].createElement('br',null),'  <div class="example__item">07</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "around" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'  <div class="example__item four">04</div>',_react2['default'].createElement('br',null),'  <div class="example__item">05</div>',_react2['default'].createElement('br',null),'  <div class="example__item">06</div>',_react2['default'].createElement('br',null),'  <div class="example__item">07</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "baseline" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "first" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "not-first" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "last" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "not-last" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "reverse" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "not-reverse" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item">03</div>',_react2['default'].createElement('br',null),'</div>'),this.props.type == "masonry" && _react2['default'].createElement('div',{className:'code__content'},'<div class="example">',_react2['default'].createElement('br',null),'  <div class="example__item one">01</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">02</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">03</div>',_react2['default'].createElement('br',null),'  <div class="example__item three">04</div>',_react2['default'].createElement('br',null),'  <div class="example__item one">05</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">06</div>',_react2['default'].createElement('br',null),'  <div class="example__item two">07</div>',_react2['default'].createElement('br',null),'  <div class="example__item one">08</div>',_react2['default'].createElement('br',null),'</div>')));},render:function render(){var parsed=queryString.parse(location.search);if(parsed.type == "scss" || parsed.type == "sass" || parsed.type == "less" || parsed.type == "stylus"){var method="dynamic";}if(parsed.type == "css" || parsed.type == "bem"){var method="static";}return _react2['default'].createElement('div',null,method == "dynamic" && _react2['default'].createElement('div',{className:'wrap xl-gutter-24 xl-2 md-1'},_react2['default'].createElement('div',{className:'col'},this.exampleHtml()),_react2['default'].createElement('div',{className:'col'},!this.state.compiledView && _react2['default'].createElement('div',{className:'code code--learn'},_react2['default'].createElement('div',{className:'tag tag--top',onClick:this.notHiddenCompiledView},_react2['default'].createElement('em',{className:'icon-rocket icon-sm'})),this.learnType()),this.state.compiledView && _react2['default'].createElement('div',{className:'code code--black'},_react2['default'].createElement('div',{className:'tag tag--top',onClick:this.hiddenCompiledView},_react2['default'].createElement('em',{className:'icon-rocket icon-sm'})),this.compiledView()))),method == "static" && _react2['default'].createElement('div',null,!this.state.compiledView && _react2['default'].createElement('div',{className:'code code--learn'},_react2['default'].createElement('div',{className:'tag tag--top',onClick:this.notHiddenCompiledView},_react2['default'].createElement('em',{className:'icon-rocket icon-sm'})),this.learnType()),this.state.compiledView && _react2['default'].createElement('div',{className:'code code--black'},_react2['default'].createElement('div',{className:'tag tag--top',onClick:this.hiddenCompiledView},_react2['default'].createElement('em',{className:'icon-rocket icon-sm'})),this.compiledView())));}});module.exports = Code; /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                */ /*
                  */ /*
                */ /*
                  */ /*
                */ /*
                  */ /*
                */ /*
                  */ /*
                */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                  */ /*
                */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
            */ /*
          */ /*
            */ /*
          */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
              */ /*
            */

},{"query-string":134,"react":343}],93:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Footer = _react2["default"].createClass({
  displayName: "Footer",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      { className: "wrap xl-2 xl-center xl-ffscp xl-mb24 xl-co-gray-500 xl-mt24 lg-1" },
      _react2["default"].createElement(
        "div",
        { className: "col xl-fs14 xl-tac" },
        _react2["default"].createElement("a", {
          href: "https://github.com/dnomak",
          target: "_blank",
          className: "xl-di xl-co-gray-500",
          dangerouslySetInnerHTML: { __html: this.props.content.iLoveFlexibleGridSystem } })
      )
    );
  }
});

module.exports = Footer;
/*<div className="col xl-fs14 xl-tal lg-hidden">
 <div dangerouslySetInnerHTML={{__html:this.props.content.keyboardShortcuts}}></div>
</div>*/

},{"react":343}],94:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var LanguageAction = require('../../action/LanguageAction');

var Header = _react2['default'].createClass({
  displayName: 'Header',

  switchLanguage: function switchLanguage(key, event) {
    LanguageAction.switchLanguage(key);
  },

  render: function render() {

    var linkClass = "xl-vam xl-dib xl-p8 xl-fs16 xl-ffscp xl-co-gray-500";
    var linkClassActive = "xl-vam xl-dib xl-p8 xl-fs16 xl-ffscp xl-fw600 xl-co-white ho-co-white";

    var pathArray = window.location.pathname.split('/');
    var path = pathArray[1];

    return _react2['default'].createElement(
      'div',
      { className: 'xl-tal xl-py8 xl-px24 xl-ba-black-500 xl-co-white' },
      _react2['default'].createElement(
        'div',
        { className: 'xl-maw1280 xl-ma' },
        _react2['default'].createElement(
          'div',
          { className: 'wrap xl-middle md-1 md-my8' },
          _react2['default'].createElement(
            'div',
            { className: 'col xl-9-12 lg-5-7' },
            _react2['default'].createElement(
              'div',
              { className: 'wrap xl-gutter-8 xl-middle xl-auto md-1 md-center' },
              _react2['default'].createElement(
                'div',
                { className: 'col' },
                _react2['default'].createElement(_reactRouter.Link, {
                  to: '/',
                  className: 'icon-flexiblegs xl-vam xl-dib xl-p8 xl-co-white ho-co-gray-500' })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col md-my8' },
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/install',
                    className: path == "install" ? linkClassActive : linkClass },
                  this.props.content.install
                ),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/learn',
                    className: path == "learn" ? linkClassActive : linkClass },
                  this.props.content.learn
                ),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/compatibility',
                    className: path == "compatibility" ? linkClassActive : linkClass },
                  this.props.content.compatibility
                ),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/motivation',
                    className: path == "motivation" ? linkClassActive : linkClass },
                  this.props.content.motivation
                ),
                _react2['default'].createElement(
                  _reactRouter.Link,
                  {
                    to: '/future',
                    className: path == "future" ? linkClassActive : linkClass },
                  this.props.content.future
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col xl-3-12 xl-tar lg-2-7 md-tac' },
            _react2['default'].createElement('a', {
              href: 'https://github.com/flexiblegs/flexiblegs-scss-plus/stargazers',
              target: '_blank',
              className: 'icon-github-alt icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr8' }),
            _react2['default'].createElement('a', {
              href: 'https://twitter.com/flexiblegs',
              target: '_blank',
              className: 'icon-twitter icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr8' }),
            _react2['default'].createElement('a', {
              href: 'https://goo.gl/6n5oTO',
              target: '_blank',
              className: 'icon-youtube-play icon-sm xl-vam xl-dib xl-co-white ho-co-gray-500 xl-p8 xl-mr16' }),
            this.props.lang == "en" && _react2['default'].createElement(
              'div',
              {
                onClick: this.switchLanguage.bind(this, 'tr'),
                className: 'xl-cp xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500 ho-ba-gray-500' },
              'Türkçe'
            ),
            this.props.lang == "tr" && _react2['default'].createElement(
              'div',
              {
                onClick: this.switchLanguage.bind(this, 'en'),
                className: 'xl-cp xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500 ho-ba-gray-500' },
              'English'
            )
          )
        )
      )
    );
  }
});

module.exports = Header;
/*<Link
 to="/responsive-test"
 className={path == "responsive-test" ? linkClassActive : linkClass}>
 {this.props.content.responsiveTest}
</Link>*/

},{"../../action/LanguageAction":1,"react":343,"react-router":166}],95:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialHeaderReact = require('../partial/Header.react');

var _partialHeaderReact2 = _interopRequireDefault(_partialHeaderReact);

var _partialSidebarReact = require('../partial/Sidebar.react');

var _partialSidebarReact2 = _interopRequireDefault(_partialSidebarReact);

var _partialFooterReact = require('../partial/Footer.react');

var _partialFooterReact2 = _interopRequireDefault(_partialFooterReact);

var _partialTitleReact = require('../partial/Title.react');

var _partialTitleReact2 = _interopRequireDefault(_partialTitleReact);

var _contentHomepageContentReact = require('../content/HomepageContent.react');

var _contentHomepageContentReact2 = _interopRequireDefault(_contentHomepageContentReact);

var _contentInstallContentReact = require('../content/InstallContent.react');

var _contentInstallContentReact2 = _interopRequireDefault(_contentInstallContentReact);

var _contentInstallScssContentReact = require('../content/InstallScssContent.react');

var _contentInstallScssContentReact2 = _interopRequireDefault(_contentInstallScssContentReact);

var _contentInstallSassContentReact = require('../content/InstallSassContent.react');

var _contentInstallSassContentReact2 = _interopRequireDefault(_contentInstallSassContentReact);

var _contentInstallLessContentReact = require('../content/InstallLessContent.react');

var _contentInstallLessContentReact2 = _interopRequireDefault(_contentInstallLessContentReact);

var _contentInstallStylusContentReact = require('../content/InstallStylusContent.react');

var _contentInstallStylusContentReact2 = _interopRequireDefault(_contentInstallStylusContentReact);

var _contentInstallScssPlusContentReact = require('../content/InstallScssPlusContent.react');

var _contentInstallScssPlusContentReact2 = _interopRequireDefault(_contentInstallScssPlusContentReact);

var _contentInstallCSSContentReact = require('../content/InstallCSSContent.react');

var _contentInstallCSSContentReact2 = _interopRequireDefault(_contentInstallCSSContentReact);

var _contentInstallBEMContentReact = require('../content/InstallBEMContent.react');

var _contentInstallBEMContentReact2 = _interopRequireDefault(_contentInstallBEMContentReact);

var _contentLearnContentReact = require('../content/LearnContent.react');

var _contentLearnContentReact2 = _interopRequireDefault(_contentLearnContentReact);

var _contentLearnWrapContentReact = require('../content/LearnWrapContent.react');

var _contentLearnWrapContentReact2 = _interopRequireDefault(_contentLearnWrapContentReact);

var _contentLearnColContentReact = require('../content/LearnColContent.react');

var _contentLearnColContentReact2 = _interopRequireDefault(_contentLearnColContentReact);

var _contentLearnColRowContentReact = require('../content/LearnColRowContent.react');

var _contentLearnColRowContentReact2 = _interopRequireDefault(_contentLearnColRowContentReact);

var _contentLearnHiddenContentReact = require('../content/LearnHiddenContent.react');

var _contentLearnHiddenContentReact2 = _interopRequireDefault(_contentLearnHiddenContentReact);

var _contentLearnNotHiddenContentReact = require('../content/LearnNotHiddenContent.react');

var _contentLearnNotHiddenContentReact2 = _interopRequireDefault(_contentLearnNotHiddenContentReact);

var _contentLearnGutterContentReact = require('../content/LearnGutterContent.react');

var _contentLearnGutterContentReact2 = _interopRequireDefault(_contentLearnGutterContentReact);

var _contentLearnOutsideContentReact = require('../content/LearnOutsideContent.react');

var _contentLearnOutsideContentReact2 = _interopRequireDefault(_contentLearnOutsideContentReact);

var _contentLearnWrapColContentReact = require('../content/LearnWrapColContent.react');

var _contentLearnWrapColContentReact2 = _interopRequireDefault(_contentLearnWrapColContentReact);

var _contentLearnAutoContentReact = require('../content/LearnAutoContent.react');

var _contentLearnAutoContentReact2 = _interopRequireDefault(_contentLearnAutoContentReact);

var _contentLearnTableContentReact = require('../content/LearnTableContent.react');

var _contentLearnTableContentReact2 = _interopRequireDefault(_contentLearnTableContentReact);

var _contentLearnWidthContentReact = require('../content/LearnWidthContent.react');

var _contentLearnWidthContentReact2 = _interopRequireDefault(_contentLearnWidthContentReact);

var _contentLearnFlexboxContentReact = require('../content/LearnFlexboxContent.react');

var _contentLearnFlexboxContentReact2 = _interopRequireDefault(_contentLearnFlexboxContentReact);

var _contentLearnNormalContentReact = require('../content/LearnNormalContent.react');

var _contentLearnNormalContentReact2 = _interopRequireDefault(_contentLearnNormalContentReact);

var _contentLearnLeftContentReact = require('../content/LearnLeftContent.react');

var _contentLearnLeftContentReact2 = _interopRequireDefault(_contentLearnLeftContentReact);

var _contentLearnCenterContentReact = require('../content/LearnCenterContent.react');

var _contentLearnCenterContentReact2 = _interopRequireDefault(_contentLearnCenterContentReact);

var _contentLearnRightContentReact = require('../content/LearnRightContent.react');

var _contentLearnRightContentReact2 = _interopRequireDefault(_contentLearnRightContentReact);

var _contentLearnTopContentReact = require('../content/LearnTopContent.react');

var _contentLearnTopContentReact2 = _interopRequireDefault(_contentLearnTopContentReact);

var _contentLearnMiddleContentReact = require('../content/LearnMiddleContent.react');

var _contentLearnMiddleContentReact2 = _interopRequireDefault(_contentLearnMiddleContentReact);

var _contentLearnBottomContentReact = require('../content/LearnBottomContent.react');

var _contentLearnBottomContentReact2 = _interopRequireDefault(_contentLearnBottomContentReact);

var _contentLearnBetweenContentReact = require('../content/LearnBetweenContent.react');

var _contentLearnBetweenContentReact2 = _interopRequireDefault(_contentLearnBetweenContentReact);

var _contentLearnAroundContentReact = require('../content/LearnAroundContent.react');

var _contentLearnAroundContentReact2 = _interopRequireDefault(_contentLearnAroundContentReact);

var _contentLearnBaselineContentReact = require('../content/LearnBaselineContent.react');

var _contentLearnBaselineContentReact2 = _interopRequireDefault(_contentLearnBaselineContentReact);

var _contentLearnFirstContentReact = require('../content/LearnFirstContent.react');

var _contentLearnFirstContentReact2 = _interopRequireDefault(_contentLearnFirstContentReact);

var _contentLearnNotFirstContentReact = require('../content/LearnNotFirstContent.react');

var _contentLearnNotFirstContentReact2 = _interopRequireDefault(_contentLearnNotFirstContentReact);

var _contentLearnLastContentReact = require('../content/LearnLastContent.react');

var _contentLearnLastContentReact2 = _interopRequireDefault(_contentLearnLastContentReact);

var _contentLearnNotLastContentReact = require('../content/LearnNotLastContent.react');

var _contentLearnNotLastContentReact2 = _interopRequireDefault(_contentLearnNotLastContentReact);

var _contentLearnReverseContentReact = require('../content/LearnReverseContent.react');

var _contentLearnReverseContentReact2 = _interopRequireDefault(_contentLearnReverseContentReact);

var _contentLearnNotReverseContentReact = require('../content/LearnNotReverseContent.react');

var _contentLearnNotReverseContentReact2 = _interopRequireDefault(_contentLearnNotReverseContentReact);

var _contentLearnMasonryContentReact = require('../content/LearnMasonryContent.react');

var _contentLearnMasonryContentReact2 = _interopRequireDefault(_contentLearnMasonryContentReact);

var _contentLearnBreakpointContentReact = require('../content/LearnBreakpointContent.react');

var _contentLearnBreakpointContentReact2 = _interopRequireDefault(_contentLearnBreakpointContentReact);

var _contentCompatibilityContentReact = require('../content/CompatibilityContent.react');

var _contentCompatibilityContentReact2 = _interopRequireDefault(_contentCompatibilityContentReact);

var _contentMotivationContentReact = require('../content/MotivationContent.react');

var _contentMotivationContentReact2 = _interopRequireDefault(_contentMotivationContentReact);

var _contentFutureContentReact = require('../content/FutureContent.react');

var _contentFutureContentReact2 = _interopRequireDefault(_contentFutureContentReact);

var _contentPageNotFoundContentReact = require('../content/PageNotFoundContent.react');

var _contentPageNotFoundContentReact2 = _interopRequireDefault(_contentPageNotFoundContentReact);

var _storeLanguageStore = require('../../store/LanguageStore');

var _storeLanguageStore2 = _interopRequireDefault(_storeLanguageStore);

var Layout = _react2['default'].createClass({
  displayName: 'Layout',

  getInitialState: function getInitialState() {
    return {
      content: _storeLanguageStore2['default'].getContent(),
      page: ""
    };
  },

  componentWillMount: function componentWillMount() {
    _storeLanguageStore2['default'].addChangeListener(this._onChange);

    if (this.props.page == "install" && this.props.type) {
      this.setState({ page: "install" });
    } else if (this.props.page == "learn" && this.props.type) {
      this.setState({ page: "learn" });
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    _storeLanguageStore2['default'].removeChangeListener(this._onChange);
  },

  _onChange: function _onChange() {
    this.setState({ content: _storeLanguageStore2['default'].getContent() });
  },

  installTitle: function installTitle(title) {
    return this.state.content.header.install + " (" + title + ")";
  },

  learnTitle: function learnTitle(title) {
    return title;
  },

  render: function render() {
    var contentClass = "xl-lh36 xl-fs18 xl-fw300";
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_partialHeaderReact2['default'], {
        lang: this.state.content.lang,
        content: this.state.content.header }),
      _react2['default'].createElement(
        'div',
        { className: 'xl-m24' },
        _react2['default'].createElement(
          'div',
          { className: 'xl-maw1280 xl-ma' },
          _react2['default'].createElement(
            'div',
            { className: 'wrap xl-gutter-24 md-1' },
            _react2['default'].createElement(
              'div',
              { className: 'col xl-9-12 lg-5-7' },
              _react2['default'].createElement(
                'div',
                { className: 'xl-tal xl-px24 xl-py16 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200' },
                this.props.page == "homepage" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.state.content.header.homepage }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentHomepageContentReact2['default'], { content: this.state.content.homepage })
                  )
                ),
                this.props.page == "install" && !this.props.type && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.state.content.header.install }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallContentReact2['default'], { content: this.state.content.install, common: this.state.content.common })
                  )
                ),
                this.props.page == "install" && this.props.type == "scss" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("Scss") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallScssContentReact2['default'], { content: this.state.content.install, header: this.state.content.header })
                  )
                ),
                this.props.page == "install" && this.props.type == "sass" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("Sass") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallSassContentReact2['default'], { content: this.state.content.install, header: this.state.content.header })
                  )
                ),
                this.props.page == "install" && this.props.type == "less" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("Less") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallLessContentReact2['default'], { content: this.state.content.install, header: this.state.content.header })
                  )
                ),
                this.props.page == "install" && this.props.type == "stylus" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("Stylus") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallStylusContentReact2['default'], { content: this.state.content.install, header: this.state.content.header })
                  )
                ),
                this.props.page == "install" && this.props.type == "scss-plus" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("Scss Plus") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallScssPlusContentReact2['default'], { content: this.state.content.install })
                  )
                ),
                this.props.page == "install" && this.props.type == "css" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("CSS") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallCSSContentReact2['default'], { content: this.state.content.install, header: this.state.content.header })
                  )
                ),
                this.props.page == "install" && this.props.type == "bem" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.installTitle("BEM") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentInstallBEMContentReact2['default'], { content: this.state.content.install, header: this.state.content.header })
                  )
                ),
                this.props.page == "learn" && !this.props.type && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.state.content.header.learn }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentLearnContentReact2['default'], { content: this.state.content.learn, common: this.state.content.common })
                  )
                ),
                this.props.page == "learn" && this.props.type == "wrap" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnWrapContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "col" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnColContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "col-row" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(@col,@row)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnColRowContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "hidden" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(hidden)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnHiddenContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "not-hidden" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(not-hidden)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnNotHiddenContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "gutter" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(gutter,@width)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnGutterContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "outside" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(outside,@width)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnOutsideContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "wrap-col" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(@col)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnWrapColContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "auto" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(auto)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnAutoContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "table" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(table)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnTableContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "width" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(@width)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnWidthContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "flexbox" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(flexbox)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnFlexboxContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "normal" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(normal)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnNormalContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "left" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(left)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnLeftContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "center" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(center)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnCenterContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "right" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(right)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnRightContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "top" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(top)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnTopContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "middle" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(middle)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnMiddleContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "bottom" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(bottom)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnBottomContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "between" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(between)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnBetweenContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "around" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(around)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnAroundContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "baseline" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(baseline)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnBaselineContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "first" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(first)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnFirstContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "not-first" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(not-first)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnNotFirstContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "last" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(last)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnLastContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "not-last" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("col(not-last)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnNotLastContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "reverse" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(reverse)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnReverseContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "not-reverse" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(not-reverse)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnNotReverseContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "masonry" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("wrap(masonry,@col)") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnMasonryContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "learn" && this.props.type == "breakpoint" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.learnTitle("breakpoint") }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(
                      'div',
                      { className: 'xl-pt8' },
                      _react2['default'].createElement(_contentLearnBreakpointContentReact2['default'], { type: this.props.type })
                    )
                  )
                ),
                this.props.page == "compatibility" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.state.content.header.compatibility }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentCompatibilityContentReact2['default'], { content: this.state.content.compatibility, common: this.state.content.common })
                  )
                ),
                this.props.page == "motivation" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.state.content.header.motivation }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentMotivationContentReact2['default'], { content: this.state.content.motivation })
                  )
                ),
                this.props.page == "future" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: this.state.content.header.future }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentFutureContentReact2['default'], { content: this.state.content.future, common: this.state.content.common })
                  )
                ),
                this.props.page == "page-not-found" && _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_partialTitleReact2['default'], { title: '404' }),
                  _react2['default'].createElement(
                    'div',
                    { className: contentClass },
                    _react2['default'].createElement(_contentPageNotFoundContentReact2['default'], { content: this.state.content.pageNotFound })
                  )
                )
              ),
              _react2['default'].createElement(_partialFooterReact2['default'], { content: this.state.content.footer })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col xl-3-12 lg-2-7' },
              _react2['default'].createElement(_partialSidebarReact2['default'], {
                lang: this.state.content.lang,
                content: this.state.content.header,
                common: this.state.content.common,
                mailchimp: this.state.content.mailchimp,
                page: this.state.page })
            )
          )
        )
      )
    );
  }
});

module.exports = Layout;

},{"../../store/LanguageStore":100,"../content/CompatibilityContent.react":4,"../content/FutureContent.react":5,"../content/HomepageContent.react":6,"../content/InstallBEMContent.react":7,"../content/InstallCSSContent.react":8,"../content/InstallContent.react":9,"../content/InstallLessContent.react":10,"../content/InstallSassContent.react":11,"../content/InstallScssContent.react":12,"../content/InstallScssPlusContent.react":13,"../content/InstallStylusContent.react":14,"../content/LearnAroundContent.react":15,"../content/LearnAutoContent.react":16,"../content/LearnBaselineContent.react":17,"../content/LearnBetweenContent.react":18,"../content/LearnBottomContent.react":19,"../content/LearnBreakpointContent.react":20,"../content/LearnCenterContent.react":21,"../content/LearnColContent.react":22,"../content/LearnColRowContent.react":23,"../content/LearnContent.react":24,"../content/LearnFirstContent.react":25,"../content/LearnFlexboxContent.react":26,"../content/LearnGutterContent.react":27,"../content/LearnHiddenContent.react":28,"../content/LearnLastContent.react":29,"../content/LearnLeftContent.react":30,"../content/LearnMasonryContent.react":31,"../content/LearnMiddleContent.react":32,"../content/LearnNormalContent.react":33,"../content/LearnNotFirstContent.react":34,"../content/LearnNotHiddenContent.react":35,"../content/LearnNotLastContent.react":36,"../content/LearnNotReverseContent.react":37,"../content/LearnOutsideContent.react":38,"../content/LearnReverseContent.react":39,"../content/LearnRightContent.react":40,"../content/LearnTableContent.react":41,"../content/LearnTopContent.react":42,"../content/LearnWidthContent.react":43,"../content/LearnWrapColContent.react":44,"../content/LearnWrapContent.react":45,"../content/MotivationContent.react":46,"../content/PageNotFoundContent.react":47,"../partial/Footer.react":93,"../partial/Header.react":94,"../partial/Sidebar.react":96,"../partial/Title.react":97,"react":343}],96:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var queryString = require('query-string');

var Sidebar = _react2['default'].createClass({
  displayName: 'Sidebar',

  render: function render() {
    var _this = this;

    var inputEmailClass = "xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-ffscp xl-pl16 lg-pl8 md-pl16 pl-co-gray-500";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-ffscp";

    var mailchimpForm = '<form class="wrap" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id=' + this.props.mailchimp.id + '" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-7-12"><input type="email" name="EMAIL" class="' + inputEmailClass + '" placeholder="' + this.props.mailchimp.emailAddress + '" /><div style="position: absolute; left: -5000px;"><input type="text" name="' + this.props.mailchimp.name + '" tabindex="-1"/></div></div><div class="col xl-5-12"><input type="submit" class="' + inputSubmitClass + '" value="' + this.props.mailchimp.subscribe + '" name="subscribe" /></div></form>';

    var parsed = queryString.parse(location.search);

    var linkWrap = "/learn/wrap?type=" + parsed.type;
    var linkCol = "/learn/col?type=" + parsed.type;
    var linkColRow = "/learn/col-row?type=" + parsed.type;
    var linkHidden = "/learn/hidden?type=" + parsed.type;
    var linkNotHidden = "/learn/not-hidden?type=" + parsed.type;
    var linkGutter = "/learn/gutter?type=" + parsed.type;
    var linkOutside = "/learn/outside?type=" + parsed.type;
    var linkWrapCol = "/learn/wrap-col?type=" + parsed.type;
    var linkAuto = "/learn/auto?type=" + parsed.type;
    var linkTable = "/learn/table?type=" + parsed.type;
    var linkWidth = "/learn/width?type=" + parsed.type;
    var linkFlexbox = "/learn/flexbox?type=" + parsed.type;
    var linkNormal = "/learn/normal?type=" + parsed.type;
    var linkLeft = "/learn/left?type=" + parsed.type;
    var linkCenter = "/learn/center?type=" + parsed.type;
    var linkRight = "/learn/right?type=" + parsed.type;
    var linkTop = "/learn/top?type=" + parsed.type;
    var linkMiddle = "/learn/middle?type=" + parsed.type;
    var linkBottom = "/learn/bottom?type=" + parsed.type;
    var linkBetween = "/learn/between?type=" + parsed.type;
    var linkAround = "/learn/around?type=" + parsed.type;
    var linkBaseline = "/learn/baseline?type=" + parsed.type;
    var linkFirst = "/learn/first?type=" + parsed.type;
    var linkNotFirst = "/learn/not-first?type=" + parsed.type;
    var linkLast = "/learn/last?type=" + parsed.type;
    var linkNotLast = "/learn/not-last?type=" + parsed.type;
    var linkReverse = "/learn/reverse?type=" + parsed.type;
    var linkNotReverse = "/learn/not-reverse?type=" + parsed.type;
    var linkMasonry = "/learn/masonry?type=" + parsed.type;
    var linkBreakpoint = "/learn/breakpoint?type=" + parsed.type;

    var linkClass = "xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-200 xl-ba-white xl-co-black-500 xl-bwb1 xl-bo-gray-200";
    var linkClassLastChild = "xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-100 xl-ba-white xl-co-black-500 xl-bwb1 xl-bo-white";
    var linkClassActive = "xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-green-300 xl-co-white xl-bwb1 xl-bo-green-300";

    var pathArray = window.location.pathname.split('/');
    var path = pathArray[1] + "/" + pathArray[2];

    return _react2['default'].createElement(
      'div',
      null,
      !this.props.page && _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactRouter.Link,
          { to: '/learn/wrap?type=css', className: 'xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb16 xl-tac' },
          _react2['default'].createElement('em', { className: 'icon-rocket icon-sm xl-co-white' }),
          _react2['default'].createElement(
            'span',
            { className: 'xl-di xl-vam xl-pl8' },
            this.props.common.quickStart,
            ' (CSS)'
          )
        ),
        _react2['default'].createElement(
          'a',
          {
            href: 'https://youtu.be/4306ejHx17Y',
            target: '_target',
            className: 'flexiblegs-presentation xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb16 xl-br8 xl-oh' },
          _react2['default'].createElement('em', { className: 'icon-youtube-play icon-xl xl-1-1 xl-tac xl-pa xl-t50p xl-tty-50p' })
        ),
        _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: mailchimpForm } })
      ),
      this.props.page == "install" && _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18' },
          this.props.content.install
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500' },
            this.props.common.dynamicCore
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-pl8 xl-ba-gray-100' },
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/scss',
                className: path == "install/scss" ? linkClassActive : linkClass },
              'Scss'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/sass',
                className: path == "install/sass" ? linkClassActive : linkClass },
              'Sass'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/less',
                className: path == "install/less" ? linkClassActive : linkClass },
              'Less'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/stylus',
                className: path == "install/stylus" ? linkClassActive : linkClassLastChild },
              'Stylus'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500' },
            this.props.common.dynamicCompilationTool
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-pl8 xl-ba-gray-100' },
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/scss-plus',
                className: path == "install/scss-plus" ? linkClassActive : linkClass },
              'Scss Plus'
            ),
            _react2['default'].createElement(
              'div',
              {
                className: 'xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt' },
              'Sass Plus'
            ),
            _react2['default'].createElement(
              'div',
              {
                className: 'xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt' },
              'Less Plus'
            ),
            _react2['default'].createElement(
              'div',
              {
                className: 'xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-white xl-bwb1 xl-tdlt' },
              'Stylus Plus'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500' },
            this.props.common.staticCompiled
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-pl8 xl-ba-gray-100' },
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/css',
                className: path == "install/css" ? linkClassActive : linkClass },
              'CSS'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: '/install/bem',
                className: path == "install/bem" ? linkClassActive : linkClassLastChild },
              'BEM'
            )
          )
        )
      ),
      this.props.page == "learn" && _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18' },
          this.props.content.learn
        ),
        _react2['default'].createElement(
          'div',
          { className: 'xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh' },
          _react2['default'].createElement(
            'div',
            { className: 'xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500' },
            _react2['default'].createElement(
              'div',
              { className: 'wrap xl-flexbox xl-between xl-auto' },
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs14' },
                (function () {
                  switch (parsed.type) {
                    case "scss":
                      return _this.props.common.dynamicCore;
                    case "sass":
                      return _this.props.common.dynamicCore;
                    case "less":
                      return _this.props.common.dynamicCore;
                    case "stylus":
                      return _this.props.common.dynamicCore;
                    case "css":
                      return _this.props.common.staticCompiled;
                    case "bem":
                      return _this.props.common.staticCompiled;
                    default:
                      return _this.props.common.staticCompiled;
                  }
                })()
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col xl-fs14 xl-fw600' },
                (function () {
                  switch (parsed.type) {
                    case "scss":
                      return "Scss";
                    case "sass":
                      return "Sass";
                    case "less":
                      return "Less";
                    case "stylus":
                      return "Stylus";
                    case "css":
                      return "CSS";
                    case "bem":
                      return "BEM";
                    default:
                      return "CSS";
                  }
                })()
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'xl-pl8 xl-ba-gray-100' },
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkWrap,
                className: path == "learn/wrap" ? linkClassActive : linkClass },
              'wrap'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkCol,
                className: path == "learn/col" ? linkClassActive : linkClass },
              'col'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkColRow,
                className: path == "learn/col-row" ? linkClassActive : linkClass },
              'col(@col,@row)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkHidden,
                className: path == "learn/hidden" ? linkClassActive : linkClass },
              'col(hidden)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkNotHidden,
                className: path == "learn/not-hidden" ? linkClassActive : linkClass },
              'col(not-hidden)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkGutter,
                className: path == "learn/gutter" ? linkClassActive : linkClass },
              'wrap(gutter,@width)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkOutside,
                className: path == "learn/outside" ? linkClassActive : linkClass },
              'wrap(outside,@width)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkWrapCol,
                className: path == "learn/wrap-col" ? linkClassActive : linkClass },
              'wrap(@col)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkAuto,
                className: path == "learn/auto" ? linkClassActive : linkClass },
              'wrap(auto)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkTable,
                className: path == "learn/table" ? linkClassActive : linkClass },
              'wrap(table)'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'xl-db xl-py8 xl-px16 xl-ba-white xl-co-gray-500 xl-bwb1 xl-bo-gray-200 xl-cn xl-tdlt' },
              'col(@width)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkFlexbox,
                className: path == "learn/flexbox" ? linkClassActive : linkClass },
              'wrap(flexbox)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkNormal,
                className: path == "learn/normal" ? linkClassActive : linkClass },
              'wrap(normal)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkLeft,
                className: path == "learn/left" ? linkClassActive : linkClass },
              'wrap(left)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkCenter,
                className: path == "learn/center" ? linkClassActive : linkClass },
              'wrap(center)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkRight,
                className: path == "learn/right" ? linkClassActive : linkClass },
              'wrap(right)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkTop,
                className: path == "learn/top" ? linkClassActive : linkClass },
              'wrap(top)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkMiddle,
                className: path == "learn/middle" ? linkClassActive : linkClass },
              'wrap(middle)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkBottom,
                className: path == "learn/bottom" ? linkClassActive : linkClass },
              'wrap(bottom)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkBetween,
                className: path == "learn/between" ? linkClassActive : linkClass },
              'wrap(between)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkAround,
                className: path == "learn/around" ? linkClassActive : linkClass },
              'wrap(around)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkBaseline,
                className: path == "learn/baseline" ? linkClassActive : linkClass },
              'wrap(baseline)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkFirst,
                className: path == "learn/first" ? linkClassActive : linkClass },
              'col(first)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkNotFirst,
                className: path == "learn/not-first" ? linkClassActive : linkClass },
              'col(not-first)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkLast,
                className: path == "learn/last" ? linkClassActive : linkClass },
              'col(last)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkNotLast,
                className: path == "learn/not-last" ? linkClassActive : linkClass },
              'col(not-last)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkReverse,
                className: path == "learn/reverse" ? linkClassActive : linkClass },
              'wrap(reverse)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkNotReverse,
                className: path == "learn/not-reverse" ? linkClassActive : linkClass },
              'wrap(not-reverse)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkMasonry,
                className: path == "learn/masonry" ? linkClassActive : linkClass },
              'wrap(masonry,@col)'
            ),
            _react2['default'].createElement(
              _reactRouter.Link,
              {
                to: linkBreakpoint,
                className: path == "learn/breakpoint" ? linkClassActive : linkClassLastChild },
              'breakpoint'
            )
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'xl-ffscp xl-fs14 xl-tac xl-co-gray-500 xl-mt16' },
        'v5.5.3'
      )
    );
  }
});

module.exports = Sidebar;
/*<Link
 to={linkWidth}
 className={path == "learn/width" ? linkClassActive : linkClass}>
 col(@width)
</Link>*/

},{"query-string":134,"react":343,"react-router":166}],97:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var Title = _react2['default'].createClass({
  displayName: 'Title',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_reactDocumentTitle2['default'], { title: this.props.title + " - Flexible Grid System" }),
      _react2['default'].createElement(
        'div',
        { className: 'xl-lh40 xl-fs24 xl-fw600 xl-mb8' },
        this.props.title
      )
    );
  }
});

module.exports = Title;

},{"react":343,"react-document-title":135}],98:[function(require,module,exports){
"use strict";

var keyMirror = require('keymirror');

module.exports = keyMirror({
	INIT_APP: null,
	SWITCH_LANGUAGE: null
});

},{"keymirror":131}],99:[function(require,module,exports){
"use strict";

var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

},{"flux":108}],100:[function(require,module,exports){
"use strict";

var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;

var LanguageApi = require('../api/LanguageApi');

var ACTION_TYPES = require('../constant/LanguageConstant');
var CHANGE_EVENT = 'change';

var _content = undefined;

var LanguageStore = Object.assign({}, EventEmitter.prototype, {

  addChangeListener: function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getContent: function getContent() {
    return _content;
  }
});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ACTION_TYPES.SWITCH_LANGUAGE:
      _content = LanguageApi.getContent(action.language);
      LanguageStore.emitChange();
      break;
    case ACTION_TYPES.INIT_APP:
      _content = LanguageApi.getContent();
      LanguageStore.emitChange();
      break;
    default:
  }
});

module.exports = LanguageStore;

},{"../api/LanguageApi":2,"../constant/LanguageConstant":98,"../dispatcher/Dispatcher":99,"events":105}],101:[function(require,module,exports){
module.exports=[
  {
    "lang": "en",
    "header": {
      "homepage": "Homepage",
      "install": "Install",
      "learn": "Learn",
      "compatibility": "Compatibility",
      "responsiveTest": "Responsive Test",
      "motivation": "Motivation",
      "future": "Future"
    },
    "common": {
      "quickStart": "Quick Start",
      "dynamicCore": "Dynamic (Core)",
      "dynamicCompilationTool": "Dynamic (Compilation Tool)",
      "staticCompiled": "Static (Compiled)",
      "responsiveMeta": "Responsive Meta",
      "compiledView": "Compiled View",
      "browser": "Browser",
      "framework": "Framework",
      "andMore": "and more"
    },
    "mailchimp": {
      "id": "1ddadb165c",
      "name": "b_0cfb9d416ef45eba73b6368b6_1ddadb165c",
      "emailAddress": "Email Address",
      "subscribe": "Subscribe"
    },
    "footer": {
      "keyboardShortcuts": "<span class='xl-di xl-vam xl-pr8'>Keyboard Shortcuts:</span><em class='icon-long-arrow-left icon-xs'></em><span class='xl-di xl-vam xl-px8'>Previous</span><em class='icon-long-arrow-right icon-xs'></em><span class='xl-di xl-vam xl-pl8'>Next</span>",
      "iLoveFlexibleGridSystem": "<span class='xl-di xl-vam xl-pr8'>I</span><span class='xl-co-red-300'><em class='icon-heart icon-xs'></em><span class='xl-di xl-vam xl-pl8'>Love</span></span><span class='xl-di xl-vam xl-pl8'>Flexible Grid System</span>"
    },
    "homepage": {
      "line001": "Flexible Grid System is a <span class='xl-fw400'>Responsive CSS Framework.</span>",
      "line002": "This framework will let you create your web applications in a flexible way that you've never experienced before.",
    },
    "install": {
      "line001": "Before installation, we assume that you know <span class='xl-fw400'>HTML</span>, <span class='xl-fw400'>CSS</span>, <span class='xl-fw400'>Sass</span>, <span class='xl-fw400'>Less</span> or <span class='xl-fw400'>Stylus</span>.",
      "line002": "There are two methods of developing with Flexible Grid System. These methods are Dynamic and Static. You can use the both method at the same time or independently.",
      "line003": "If you choose the Dynamic method. You can use Sass, Less or Stylus <span class='xl-fw400'>mixin</span>s to code your <span class='xl-fw400'>CSS</span>.",
      "line004": "You can use the compilation tool to generate customized output for your project.",
      "line005": "If you choose the Static method. You can use CSS <span class='xl-fw400'>class</span>es to code your <span class='xl-fw400'>HTML</span>.",
      "downloadTheFile": "Download the file",
      "andAddTheProjectAsFollows": "and add the project as follows."
    },
    "learn": {
      "line001": "Before starting learn you need to know about <span class='xl-fw400'>Grid System</span> and <span class='xl-fw400'>Responive Design</span>.",
      "line002": "Switching to compile view you view the CSS properties of classes and mixins. Having a knowledge about this topic will improve your usage.",
      "line003": "On <span class='xl-fw400'>CSS</span> section static, on <span class='xl-fw400'>Sass</span>, <span class='xl-fw400'>Less</span> or <span class='xl-fw400'>Stylus</span> sections dynamic sections are marked as <span class='xl-fw400'>@variable</span>.",
      "line004": "For browser compatability <span class='xl-fw400'>-ms</span>, <span class='xl-fw400'>-moz</span> and <span class='xl-fw400'>-webkit</span> aren't added to the samples."
    },
    "compatibility": {
      "line001": "If you use <span class='xl-fw400'>Responsive Design</span> because of <span class='xl-fw400'>Media Queries</span> we support <span class='xl-fw400'>Internet Explorer 9 and +</span> versions.",
      "line002": "If you use <span class='xl-fw400'>Flexbox</span> we support <span class='xl-fw400'>Internet Explorer 10 and +</span> versions.",
      "line003": "Other than the two exceptions above we supprt all the major desktop and mobile browsers."
    },
    "motivation": {
      "line001": "The links that makes us super happy and motivated."
    },
    "future": {
      "contentManagementSystem": "Content Management System",
      "coffee": "Coffee",
      "logoShapedCakeMold": "Logo Shaped Cake Mold"
    },
    "pageNotFound": {
      "line001": "Page not found."
    }
  },
  {
    "lang": "tr",
    "header": {
      "homepage": "Anasayfa",
      "install": "Kurulum",
      "learn": "Öğren",
      "compatibility": "Uyumluluk",
      "responsiveTest": "Responsive Test",
      "motivation": "Motivasyon",
      "future": "Gelecek"
    },
    "common": {
      "quickStart": "Hızlı Başlangıç",
      "dynamicCore": "Dinamik (Çekirdek)",
      "dynamicCompilationTool": "Dinamik (Derleme Aracı)",
      "staticCompiled": "Statik (Derlenmiş)",
      "responsiveMeta": "Responsive Meta",
      "compiledView": "Derlenmiş Görünüm",
      "browser": "Tarayıcı",
      "framework": "Framework",
      "andMore": "ve daha fazlası"
    },
    "mailchimp": {
      "id": "76e0132742",
      "name": "b_0cfb9d416ef45eba73b6368b6_76e0132742",
      "emailAddress": "Email Adresiniz",
      "subscribe": "Abone Ol"
    },
    "footer": {
      "keyboardShortcuts": "<span class='xl-di xl-vam xl-pr8'>Klavye Kısayolları:</span><em class='icon-long-arrow-left icon-xs'></em><span class='xl-di xl-vam xl-px8'>Önceki</span><em class='icon-long-arrow-right icon-xs'></em><span class='xl-di xl-vam xl-pl8'>Sonraki</span>",
      "iLoveFlexibleGridSystem": "<span class='xl-di xl-vam xl-pr8'>Flexible Grid System'i</span><span class='xl-co-red-300'><em class='icon-heart icon-xs'></em><span class='xl-di xl-vam xl-pl8'>Seviyorum</span></span>"
    },
    "homepage": {
      "line001": "Flexible Grid System bir <span class='xl-fw400'>Responsive CSS Framework</span>'üdür.",
      "line002": "Bu framework sayesinde web uygulamalarınızı hiç olmadığı kadar esnek şekilde kodlamanız mümkündür.",
    },
    "install": {
      "line001": "Kuruluma başlamadan önce <span class='xl-fw400'>HTML</span>, <span class='xl-fw400'>CSS</span> veya <span class='xl-fw400'>Sass</span>, <span class='xl-fw400'>Less</span> ya da <span class='xl-fw400'>Stylus</span> bilmeniz gerekmektedir.",
      "line002": "Flexible Grid System ile kod yazmanın iki yöntemi bulunmaktadır. Bunlar Dinamik ve Statik olmak üzere ikiye ayrılır. İki yöntemi aynı anda ya da ayrı ayrı kullanmanız mümkündür.",
      "line003": "Dinamik yöntemi tercih ederseniz Flexible Grid System'in Sass, Less veya Stylus ile hazırlanmış <span class='xl-fw400'>mixin</span>lerini kullanarak <span class='xl-fw400'>CSS</span> kısmında kodlama yapabilirsiniz.",
      "line004": "Derleme aracını kullanarak projenize göre özelleştirme yapıp statik çıktıyı kontrol edebilirsiniz.",
      "line005": "Statik yönetimi tercih ederseniz Flexible Grid System'in CSS ile hazırlanmış sabit <span class='xl-fw400'>class</span>larını kullanarak <span class='xl-fw400'>HTML</span> kısmında kodlama yapabilirsiniz.",
      "downloadTheFile": "Dosyayı indirin",
      "andAddTheProjectAsFollows": "ve aşağıdaki gibi projenize ekleyin."
    },
    "learn": {
      "line001": "Öğrenmeye başlamadan önce <span class='xl-fw400'>Grid System</span> ve <span class='xl-fw400'>Responive Design</span> hakkında bilgi sahibi olmanız gerekmektedir.",
      "line002": "Derlenmiş görünüme geçiş yaparak class veya mixinlerin oluşturduğu CSS özelliklerini görebilirsiniz. Bu konuda bilgi sahibi olmanız kullanım hakimiyetiniz açısından oldukça faydalı olacaktır.",
      "line003": "<span class='xl-fw400'>CSS</span> kısmında sabit, <span class='xl-fw400'>Sass</span>, <span class='xl-fw400'>Less</span> veya <span class='xl-fw400'>Stylus</span> kısmında dinamik olacak kısımlar <span class='xl-fw400'>@değişken</span> şeklinde belirtilmektedir.",
      "line004": "Browser uyumluluğu için gereken <span class='xl-fw400'>-ms</span>, <span class='xl-fw400'>-moz</span> ve <span class='xl-fw400'>-webkit</span> yazımları eklenmemiştir."
    },
    "compatibility": {
      "line001": "<span class='xl-fw400'>Responsive Design</span> olarak kodlama yapıyorsak <span class='xl-fw400'>Media Queries</span> kullanımından kaynaklı <span class='xl-fw400'>Internet Explorer 9 ve üzeri</span> versiyonları destekliyoruz.",
      "line002": "<span class='xl-fw400'>Flexbox</span> özelliğini kullanıyorsak <span class='xl-fw400'>Internet Explorer 10 ve üzeri</span> versiyonları destekliyoruz.",
      "line003": "Yukarıdaki iki durum dışında tüm masaüstü ve mobil browserlara destek verilmektedir."
    },
    "motivation": {
      "line001": "Projeye dört elle sarılmamızı sağlayan bazı linkler."
    },
    "future": {
      "contentManagementSystem": "İçerik Yönetim Sistemi",
      "coffee": "Kahve",
      "logoShapedCakeMold": "Logo Şeklinde Kek Kalıbı"
    },
    "pageNotFound": {
      "line001": "Sayfa bulunamadı."
    }
  }
]

},{}],102:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":103,"./lib/keys.js":104}],103:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],104:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],105:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],106:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;
},{}],107:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],108:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher');

},{"./lib/Dispatcher":109}],109:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */

'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('fbjs/lib/invariant');

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
}).call(this,require('_process'))

},{"_process":133,"fbjs/lib/invariant":110}],110:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
}).call(this,require('_process'))

},{"_process":133}],111:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],112:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var _slice = Array.prototype.slice;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = undefined;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(_slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}
},{}],113:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":133,"warning":128}],114:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],115:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],116:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.extractPath = extractPath;
exports.parsePath = parsePath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}
}).call(this,require('_process'))

},{"_process":133,"warning":128}],117:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    try {
      historyState = historyState || window.history.state || {};
    } catch (e) {
      historyState = {};
    }

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":111,"./DOMStateStorage":113,"./DOMUtils":114,"./ExecutionEnvironment":115,"./PathUtils":116,"./createDOMHistory":118,"_process":133,"invariant":130}],118:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":114,"./ExecutionEnvironment":115,"./createHistory":120,"_process":133,"invariant":130}],119:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    } else {
      key = state = null;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = (basename || '') + pathname + search;

    if (queryKey) {
      path = addQueryStringValueToPath(path, queryKey, key);
      _DOMStateStorage.saveState(key, state);
    } else {
      // Drop key and state.
      location.key = location.state = null;
    }

    var currentHash = _DOMUtils.getHashPath();

    if (action === _Actions.PUSH) {
      if (currentHash !== path) {
        window.location.hash = path;
      } else {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
      }
    } else if (currentHash !== path) {
      // REPLACE
      _DOMUtils.replaceHashPath(path);
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function push(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.push(location);
  }

  function replace(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replace(location);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopHashChangeListener();
  }

  // deprecated
  function pushState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.pushState(state, path);
  }

  // deprecated
  function replaceState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replaceState(state, path);
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    push: push,
    replace: replace,
    go: go,
    createHref: createHref,

    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
    pushState: pushState, // deprecated - warning is in createHistory
    replaceState: replaceState // deprecated - warning is in createHistory
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":111,"./DOMStateStorage":113,"./DOMUtils":114,"./ExecutionEnvironment":115,"./PathUtils":116,"./createDOMHistory":118,"_process":133,"invariant":130,"warning":128}],120:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _PathUtils = require('./PathUtils');

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var getUserConfirmation = options.getUserConfirmation;
  var keyLength = options.keyLength;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":111,"./AsyncUtils":112,"./PathUtils":116,"./createLocation":121,"./deprecate":123,"./runTransitionHook":124,"_process":133,"deep-equal":102,"warning":128}],121:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _PathUtils.parsePath(location);

  if (typeof action === 'object') {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":111,"./PathUtils":116,"_process":133,"warning":128}],122:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _PathUtils = require('./PathUtils');

var _Actions = require('./Actions');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
  }

  var storage = createStateStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var basename = entry.basename;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = (basename || '') + pathname + (search || '');

    var key = undefined,
        state = undefined;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    } else {
      key = history.createKey();
      state = null;
      entry.key = key;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      if (!canGo(n)) {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
        return;
      }

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) entries.splice(current);

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":111,"./PathUtils":116,"./createHistory":120,"_process":133,"invariant":130,"warning":128}],123:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":133,"warning":128}],124:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":133,"warning":128}],125:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _PathUtils = require('./PathUtils');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var basename = options.basename;

    var checkedBaseHref = false;

    function checkBaseHref() {
      if (checkedBaseHref) {
        return;
      }

      // Automatically use the value of <base href> in HTML
      // documents as basename if it's not explicitly given.
      if (basename == null && _ExecutionEnvironment.canUseDOM) {
        var base = document.getElementsByTagName('base')[0];
        var baseHref = base && base.getAttribute('href');

        if (baseHref != null) {
          basename = baseHref;

          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
        }
      }

      checkedBaseHref = true;
    }

    function addBasename(location) {
      checkBaseHref();

      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    }

    function prependBasename(location) {
      checkBaseHref();

      if (!basename) return location;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var pname = location.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, location, {
        pathname: pathname
      });
    }

    // Override all read methods with basename-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addBasename(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addBasename(location));
      });
    }

    // Override all write methods with basename-aware versions.
    function push(location) {
      history.push(prependBasename(location));
    }

    function replace(location) {
      history.replace(prependBasename(location));
    }

    function createPath(location) {
      return history.createPath(prependBasename(location));
    }

    function createHref(location) {
      return history.createHref(prependBasename(location));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    }

    // deprecated
    function pushState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path));
    }

    // deprecated
    function replaceState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useBasename;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./ExecutionEnvironment":115,"./PathUtils":116,"./deprecate":123,"./runTransitionHook":124,"_process":133,"warning":128}],126:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _queryString = require('query-string');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = require('./PathUtils');

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

var SEARCH_BASE_KEY = '$searchBase';

function defaultStringifyQuery(query) {
  return _queryString.stringify(query).replace(/%20/g, '+');
}

var defaultParseQueryString = _queryString.parse;

function isNestedObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
  }return false;
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function addQuery(location) {
      if (location.query == null) {
        var search = location.search;

        location.query = parseQueryString(search.substring(1));
        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
      }

      // TODO: Instead of all the book-keeping here, this should just strip the
      // stringified query from the search.

      return location;
    }

    function appendQuery(location, query) {
      var _extends2;

      var searchBaseSpec = location[SEARCH_BASE_KEY];
      var queryString = query ? stringifyQuery(query) : '';
      if (!searchBaseSpec && !queryString) {
        return location;
      }

      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var searchBase = undefined;
      if (searchBaseSpec && location.search === searchBaseSpec.search) {
        searchBase = searchBaseSpec.searchBase;
      } else {
        searchBase = location.search || '';
      }

      var search = searchBase;
      if (queryString) {
        search += (search ? '&' : '?') + queryString;
      }

      return _extends({}, location, (_extends2 = {
        search: search
      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
    }

    // Override all read methods with query-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addQuery(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addQuery(location));
      });
    }

    // Override all write methods with query-aware versions.
    function push(location) {
      history.push(appendQuery(location, location.query));
    }

    function replace(location) {
      history.replace(appendQuery(location, location.query));
    }

    function createPath(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

      return history.createPath(appendQuery(location, query || location.query));
    }

    function createHref(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

      return history.createHref(appendQuery(location, query || location.query));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
      if (location.query) {
        fullLocation.query = location.query;
      }
      return addQuery(fullLocation);
    }

    // deprecated
    function pushState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path, { query: query }));
    }

    // deprecated
    function replaceState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path, { query: query }));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PathUtils":116,"./deprecate":123,"./runTransitionHook":124,"_process":133,"query-string":127,"warning":128}],127:[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return key;
		}

		if (Array.isArray(val)) {
			return val.slice().sort().map(function (val2) {
				return strictUriEncode(key) + '=' + strictUriEncode(val2);
			}).join('&');
		}

		return strictUriEncode(key) + '=' + strictUriEncode(val);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"strict-uri-encode":344}],128:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":133}],129:[function(require,module,exports){
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

},{}],130:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":133}],131:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

"use strict";

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;

},{}],132:[function(require,module,exports){
'use strict';
/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],133:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],134:[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');
var objectAssign = require('object-assign');

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (ret[key] === undefined) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}
	});

	return ret;
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true
	};

	opts = objectAssign(defaults, opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				if (val2 === null) {
					result.push(encode(key, opts));
				} else {
					result.push(encode(key, opts) + '=' + encode(val2, opts));
				}
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"object-assign":132,"strict-uri-encode":344}],135:[function(require,module,exports){
'use strict';

var React = require('react'),
    withSideEffect = require('react-side-effect');

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title) {
  var nextTitle = title || '';
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}

var DocumentTitle = React.createClass({
  displayName: 'DocumentTitle',

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function render() {
    if (this.props.children) {
      return React.Children.only(this.props.children);
    } else {
      return null;
    }
  }
});

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);

},{"react":343,"react-side-effect":175}],136:[function(require,module,exports){
'use strict';

module.exports = require('react/lib/ReactDOM');

},{"react/lib/ReactDOM":213}],137:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;
function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}
},{}],138:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A mixin that adds the "history" instance variable to components.
 */
var History = {

  contextTypes: {
    history: _InternalPropTypes.history
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
    this.history = this.context.history;
  }
};

exports.default = History;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./routerWarning":171,"_process":133}],139:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = _react2.default.createClass({
  displayName: 'IndexLink',
  render: function render() {
    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

exports.default = IndexLink;
module.exports = exports['default'];
},{"./Link":144,"react":343}],140:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Redirect = require('./Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */

var IndexRedirect = _react2.default.createClass({
  displayName: 'IndexRedirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRedirect;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./Redirect":147,"./routerWarning":171,"_process":133,"invariant":130,"react":343}],141:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react2.default.PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */

var IndexRoute = _react2.default.createClass({
  displayName: 'IndexRoute',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    path: _InternalPropTypes.falsy,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRoute;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./RouteUtils":150,"./routerWarning":171,"_process":133,"invariant":130,"react":343}],142:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _react = require('react');

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
});

var component = exports.component = oneOfType([func, string]);
var components = exports.components = oneOfType([component, object]);
var route = exports.route = oneOfType([object, element]);
var routes = exports.routes = oneOfType([route, arrayOf(route)]);
},{"react":343}],143:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
 * component that may be used to cancel a transition or prompt the user
 * for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * During the beforeunload event (assuming you're using the useBeforeUnload
 * history enhancer), routerWillLeave does not receive a location object
 * because it isn't possible for us to know the location we're transitioning
 * to. In this case routerWillLeave must return a prompt message to prevent
 * the user from closing the window/tab.
 */

var Lifecycle = {

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  componentDidMount: function componentDidMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

    var route = this.props.route || this.context.route;

    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
  }
};

exports.default = Lifecycle;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":171,"_process":133,"invariant":130,"react":343}],144:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _React$PropTypes = _react2.default.PropTypes;
var bool = _React$PropTypes.bool;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;
var oneOfType = _React$PropTypes.oneOfType;


function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }return true;
}

function createLocationDescriptor(to, _ref) {
  var query = _ref.query;
  var hash = _ref.hash;
  var state = _ref.state;

  if (query || hash || state) {
    return { pathname: to, query: query, hash: hash, state: state };
  }

  return to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
var Link = _react2.default.createClass({
  displayName: 'Link',


  contextTypes: {
    router: _PropTypes.routerShape
  },

  propTypes: {
    to: oneOfType([string, object]).isRequired,
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);

    if (event.defaultPrevented) return;

    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) return;

    event.preventDefault();

    var _props = this.props;
    var to = _props.to;
    var query = _props.query;
    var hash = _props.hash;
    var state = _props.state;

    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

    this.context.router.push(location);
  },
  render: function render() {
    var _props2 = this.props;
    var to = _props2.to;
    var query = _props2.query;
    var hash = _props2.hash;
    var state = _props2.state;
    var activeClassName = _props2.activeClassName;
    var activeStyle = _props2.activeStyle;
    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

    // Ignore if rendered outside the context of router, simplifies unit testing.
    var router = this.context.router;


    if (router) {
      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
      props.href = router.createHref(location);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(location, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ' ' + activeClassName;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }
});

exports.default = Link;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":146,"./routerWarning":171,"_process":133,"invariant":130,"react":343}],145:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */
function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern);

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;


  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  }

  // Special-case patterns like '*' for catch-all routes.
  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    }

    // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.
    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);
  if (!match) {
    return null;
  }

  var paramNames = match.paramNames;
  var paramValues = match.paramValues;

  var params = {};

  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });

  return params;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */
function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token = void 0,
      paramName = void 0,
      paramValue = void 0;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURIComponent(paramValue);
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
}).call(this,require('_process'))

},{"_process":133,"invariant":130}],146:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

var _react = require('react');

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _InternalPropTypes = require('./InternalPropTypes');

var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
var routerShape = exports.routerShape = shape({
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  setRouteLeaveHook: func.isRequired,
  isActive: func.isRequired
});

var locationShape = exports.locationShape = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

// Deprecated stuff below:

var falsy = exports.falsy = InternalPropTypes.falsy;
var history = exports.history = InternalPropTypes.history;
var location = exports.location = locationShape;
var component = exports.component = InternalPropTypes.component;
var components = exports.components = InternalPropTypes.components;
var route = exports.route = InternalPropTypes.route;
var routes = exports.routes = InternalPropTypes.routes;
var router = exports.router = routerShape;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var deprecatePropType = function deprecatePropType(propType, message) {
      return function () {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
        return propType.apply(undefined, arguments);
      };
    };

    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
    };

    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
    };

    exports.falsy = falsy = deprecateInternalPropType(falsy);
    exports.history = history = deprecateInternalPropType(history);
    exports.component = component = deprecateInternalPropType(component);
    exports.components = components = deprecateInternalPropType(components);
    exports.route = route = deprecateInternalPropType(route);
    exports.routes = routes = deprecateInternalPropType(routes);

    exports.location = location = deprecateRenamedPropType(location, 'location');
    exports.router = router = deprecateRenamedPropType(router, 'router');
  })();
}

var defaultExport = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route,
  // For some reason, routes was never here.
  router: router
};

if (process.env.NODE_ENV !== 'production') {
  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
}

exports.default = defaultExport;
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./deprecateObjectProperties":162,"./routerWarning":171,"_process":133,"react":343}],147:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PatternUtils = require('./PatternUtils');

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */

var Redirect = _react2.default.createClass({
  displayName: 'Redirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location;
        var params = nextState.params;


        var pathname = void 0;
        if (route.to.charAt(0) === '/') {
          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },
    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }
  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Redirect;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./PatternUtils":145,"./RouteUtils":150,"_process":133,"invariant":130,"react":343}],148:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */

var Route = _react2.default.createClass({
  displayName: 'Route',


  statics: {
    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
  },

  propTypes: {
    path: string,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Route;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./RouteUtils":150,"_process":133,"invariant":130,"react":343}],149:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */

var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
  }
};

exports.default = RouteContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":171,"_process":133,"react":343}],150:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}
},{"react":343}],151:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createHashHistory = require('history/lib/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _InternalPropTypes = require('./InternalPropTypes');

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _RouteUtils = require('./RouteUtils');

var _RouterUtils = require('./RouterUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isDeprecatedHistory(history) {
  return !history || !history.__v2_compatible__;
}

/* istanbul ignore next: sanity check */
function isUnsupportedHistory(history) {
  // v3 histories expose getCurrentLocation, but aren't currently supported.
  return history && history.getCurrentLocation;
}

var _React$PropTypes = _react2.default.PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <Router> is a high-level API for automatically setting up
 * a router that renders a <RouterContext> with all the props
 * it needs each time the URL changes.
 */

var Router = _react2.default.createClass({
  displayName: 'Router',


  propTypes: {
    history: object,
    children: _InternalPropTypes.routes,
    routes: _InternalPropTypes.routes, // alias for children
    render: func,
    createElement: func,
    onError: func,
    onUpdate: func,

    // Deprecated:
    parseQueryString: func,
    stringifyQuery: func,

    // PRIVATE: For client-side rehydration of server match.
    matchContext: object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      render: function render(props) {
        return _react2.default.createElement(_RouterContext2.default, props);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },
  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    var _props = this.props;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

    var _createRouterObjects = this.createRouterObjects();

    var history = _createRouterObjects.history;
    var transitionManager = _createRouterObjects.transitionManager;
    var router = _createRouterObjects.router;


    this._unlisten = transitionManager.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }
    });

    this.history = history;
    this.router = router;
  },
  createRouterObjects: function createRouterObjects() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext;
    }

    var history = this.props.history;
    var _props2 = this.props;
    var routes = _props2.routes;
    var children = _props2.children;


    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

    if (isDeprecatedHistory(history)) {
      history = this.wrapDeprecatedHistory(history);
    }

    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

    return { history: routingHistory, transitionManager: transitionManager, router: router };
  },
  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
    var _props3 = this.props;
    var parseQueryString = _props3.parseQueryString;
    var stringifyQuery = _props3.stringifyQuery;


    var createHistory = void 0;
    if (history) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
      createHistory = function createHistory() {
        return history;
      };
    } else {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
      createHistory = _createHashHistory2.default;
    }

    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
  },


  /* istanbul ignore next: sanity check */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },
  render: function render() {
    var _state = this.state;
    var location = _state.location;
    var routes = _state.routes;
    var params = _state.params;
    var components = _state.components;
    var _props4 = this.props;
    var createElement = _props4.createElement;
    var render = _props4.render;

    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

    if (location == null) return null; // Async match

    // Only forward non-Router-specific props to routing context, as those are
    // the only ones that might be custom routing context props.
    Object.keys(Router.propTypes).forEach(function (propType) {
      return delete props[propType];
    });

    return render(_extends({}, props, {
      history: this.history,
      router: this.router,
      location: location,
      routes: routes,
      params: params,
      components: components,
      createElement: createElement
    }));
  }
});

exports.default = Router;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":142,"./RouteUtils":150,"./RouterContext":152,"./RouterUtils":153,"./createTransitionManager":161,"./routerWarning":171,"_process":133,"history/lib/createHashHistory":119,"history/lib/useQueries":126,"invariant":130,"react":343}],152:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _getRouteParams = require('./getRouteParams');

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _RouteUtils = require('./RouteUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */

var RouterContext = _react2.default.createClass({
  displayName: 'RouterContext',


  propTypes: {
    history: object,
    router: object.isRequired,
    location: object.isRequired,
    routes: array.isRequired,
    params: object.isRequired,
    components: array.isRequired,
    createElement: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },


  childContextTypes: {
    history: object,
    location: object.isRequired,
    router: object.isRequired
  },

  getChildContext: function getChildContext() {
    var _props = this.props;
    var router = _props.router;
    var history = _props.history;
    var location = _props.location;

    if (!router) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

      router = _extends({}, history, {
        setRouteLeaveHook: history.listenBeforeLeavingRoute
      });
      delete router.listenBeforeLeavingRoute;
    }

    if (process.env.NODE_ENV !== 'production') {
      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
    }

    return { history: history, location: location, router: router };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var history = _props2.history;
    var location = _props2.location;
    var routes = _props2.routes;
    var params = _props2.params;
    var components = _props2.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        }

        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

    return element;
  }
});

exports.default = RouterContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouteUtils":150,"./deprecateObjectProperties":162,"./getRouteParams":164,"./routerWarning":171,"_process":133,"invariant":130,"react":343}],153:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createRouterObject = createRouterObject;
exports.createRoutingHistory = createRoutingHistory;

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouterObject(history, transitionManager) {
  return _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });
}

// deprecated
function createRoutingHistory(history, transitionManager) {
  history = _extends({}, history, transitionManager);

  if (process.env.NODE_ENV !== 'production') {
    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
  }

  return history;
}
}).call(this,require('_process'))

},{"./deprecateObjectProperties":162,"_process":133}],154:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoutingContext = _react2.default.createClass({
  displayName: 'RoutingContext',
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
  },
  render: function render() {
    return _react2.default.createElement(_RouterContext2.default, this.props);
  }
});

exports.default = RoutingContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouterContext":152,"./routerWarning":171,"_process":133,"react":343}],155:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runChangeHooks = runChangeHooks;
exports.runLeaveHooks = runLeaveHooks;

var _AsyncUtils = require('./AsyncUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTransitionHook(hook, route, asyncArity) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    hook.apply(route, args);

    if (hook.length < asyncArity) {
      var callback = args[args.length - 1];
      // Assume hook executes synchronously and
      // automatically call the callback.
      callback();
    }
  };
}

function getEnterHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

    return hooks;
  }, []);
}

function getChangeHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
    return hooks;
  }, []);
}

function runTransitionHooks(length, iter, callback) {
  if (!length) {
    callback();
    return;
  }

  var redirectInfo = void 0;
  function replace(location, deprecatedPathname, deprecatedQuery) {
    if (deprecatedPathname) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      redirectInfo = {
        pathname: deprecatedPathname,
        query: deprecatedQuery,
        state: location
      };

      return;
    }

    redirectInfo = location;
  }

  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
    iter(index, replace, function (error) {
      if (error || redirectInfo) {
        done(error, redirectInfo); // No need to continue.
      } else {
        next();
      }
    });
  }, callback);
}

/**
 * Runs all onEnter hooks in the given array of routes in order
 * with onEnter(nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](nextState, replace, next);
  }, callback);
}

/**
 * Runs all onChange hooks in the given array of routes in order
 * with onChange(prevState, nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runChangeHooks(routes, state, nextState, callback) {
  var hooks = getChangeHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](state, nextState, replace, next);
  }, callback);
}

/**
 * Runs all onLeave hooks in the given array of routes in order.
 */
function runLeaveHooks(routes, prevState) {
  for (var i = 0, len = routes.length; i < len; ++i) {
    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
  }
}
}).call(this,require('_process'))

},{"./AsyncUtils":137,"./routerWarning":171,"_process":133}],156:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  if (process.env.NODE_ENV !== 'production') {
    middlewares.forEach(function (middleware, index) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
    });
  }

  var withContext = middlewares.map(function (middleware) {
    return middleware.renderRouterContext;
  }).filter(Boolean);
  var withComponent = middlewares.map(function (middleware) {
    return middleware.renderRouteComponent;
  }).filter(Boolean);

  var makeCreateElement = function makeCreateElement() {
    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
    return function (Component, props) {
      return withComponent.reduceRight(function (previous, renderRouteComponent) {
        return renderRouteComponent(previous, props);
      }, baseCreateElement(Component, props));
    };
  };

  return function (renderProps) {
    return withContext.reduceRight(function (previous, renderRouterContext) {
      return renderRouterContext(previous, renderProps);
    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
      createElement: makeCreateElement(renderProps.createElement)
    })));
  };
};

module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouterContext":152,"./routerWarning":171,"_process":133,"react":343}],157:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createRouterHistory = require('./createRouterHistory');

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
module.exports = exports['default'];
},{"./createRouterHistory":160,"history/lib/createBrowserHistory":117}],158:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;
  if (prevRoutes) {
    (function () {
      var parentIsLeaving = false;
      leaveRoutes = prevRoutes.filter(function (route) {
        if (parentIsLeaving) {
          return true;
        } else {
          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
          if (isLeaving) parentIsLeaving = true;
          return isLeaving;
        }
      });

      // onLeave hooks start at the leaf route.
      leaveRoutes.reverse();

      enterRoutes = [];
      changeRoutes = [];

      nextRoutes.forEach(function (route) {
        var isNew = prevRoutes.indexOf(route) === -1;
        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
      });
    })();
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];
},{"./PatternUtils":145}],159:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = require('history/lib/useBasename');

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = require('history/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMemoryHistory(options) {
  // signatures and type checking differ between `useRoutes` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  history.__v2_compatible__ = true;
  return history;
}
module.exports = exports['default'];
},{"history/lib/createMemoryHistory":122,"history/lib/useBasename":125,"history/lib/useQueries":126}],160:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports.default = function (createHistory) {
  var history = void 0;
  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
  return history;
};

var _useRouterHistory = require('./useRouterHistory');

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

module.exports = exports['default'];
},{"./useRouterHistory":172}],161:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createTransitionManager;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _Actions = require('history/lib/Actions');

var _computeChangedRoutes2 = require('./computeChangedRoutes');

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = require('./TransitionUtils');

var _isActive2 = require('./isActive');

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = require('./getComponents');

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = require('./matchRoutes');

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)
  function isActive(location) {
    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var indexOnly = void 0;
    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
      indexOnly = deprecatedIndexOnly || false;
    } else {
      location = history.createLocation(location);
      indexOnly = indexOnlyOrDeprecatedQuery;
    }

    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  function createLocationFromRedirectInfo(location) {
    return history.createLocation(location, _Actions.REPLACE);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, { location: location }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
    var changeRoutes = _computeChangedRoutes.changeRoutes;
    var enterRoutes = _computeChangedRoutes.enterRoutes;


    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

    // Tear down confirmation hooks for left routes
    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute);

    // change and enter hooks are run in series
    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      // TODO: Fetch components after state is updated.
      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, { components: components }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.reduce(function (hooks, route) {
      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
      return hooks;
    }, []);
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      }

      // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.
      partialNextState = _extends({}, nextState, { location: location });

      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

      var result = void 0;
      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }

  /* istanbul ignore next: untestable with Karma */
  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);

      var message = void 0;
      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route, false);
    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }

  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */
  function listenBeforeLeavingRoute(route, hook) {
    // TODO: Warn if they register for a route that isn't currently
    // active. They're probably doing something wrong, like re-creating
    // route objects on every location change.
    var routeID = getRouteID(route);
    var hooks = RouteHooks[routeID];

    if (!hooks) {
      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

      RouteHooks[routeID] = [hook];

      if (thereWereNoRouteHooks) {
        // setup transition & beforeunload hooks
        unlistenBefore = history.listenBefore(transitionHook);

        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
      }
    } else {
      if (hooks.indexOf(hook) === -1) {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

        hooks.push(hook);
      }
    }

    return function () {
      var hooks = RouteHooks[routeID];

      if (hooks) {
        var newHooks = hooks.filter(function (item) {
          return item !== hook;
        });

        if (newHooks.length === 0) {
          removeListenBeforeHooksForRoute(route);
        } else {
          RouteHooks[routeID] = newHooks;
        }
      }
    };
  }

  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */
  function listen(listener) {
    // TODO: Only use a single history listener. Otherwise we'll
    // end up with multiple concurrent calls to match.
    return history.listen(function (location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.transitionTo(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
          }
        });
      }
    });
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

//export default useRoutes

module.exports = exports['default'];
}).call(this,require('_process'))

},{"./TransitionUtils":155,"./computeChangedRoutes":158,"./getComponents":163,"./isActive":167,"./matchRoutes":170,"./routerWarning":171,"_process":133,"history/lib/Actions":111}]