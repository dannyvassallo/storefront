(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./assets/images/chiodobros/lowpolyv1.png":
/*!************************************************!*\
  !*** ./assets/images/chiodobros/lowpolyv1.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e079ea8e2420d1f1a452ed2364aabf7.png";

/***/ }),

/***/ "./assets/images/chiodobros/splatter.png":
/*!***********************************************!*\
  !*** ./assets/images/chiodobros/splatter.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8127a9ea712d74d969ec3303f1665929.png";

/***/ }),

/***/ "./assets/images/chiodobros/splattertop.png":
/*!**************************************************!*\
  !*** ./assets/images/chiodobros/splattertop.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd107b303dde16c05b7f18c601b6ef9b.png";

/***/ }),

/***/ "./assets/js/react/components/VideoBackground/index.js":
/*!*************************************************************!*\
  !*** ./assets/js/react/components/VideoBackground/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(/*! react-flexbox-grid */ "./node_modules/react-flexbox-grid/lib/index.js");

__webpack_require__(/*! ./style.scss */ "./assets/js/react/components/VideoBackground/style.scss");

var _reactYoutube = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _reactParallax = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/dist/index.js");

var _lowpolyv = __webpack_require__(/*! ../../../../images/chiodobros/lowpolyv1.png */ "./assets/images/chiodobros/lowpolyv1.png");

var _lowpolyv2 = _interopRequireDefault(_lowpolyv);

var _splatter = __webpack_require__(/*! ../../../../images/chiodobros/splatter.png */ "./assets/images/chiodobros/splatter.png");

var _splatter2 = _interopRequireDefault(_splatter);

var _splattertop = __webpack_require__(/*! ../../../../images/chiodobros/splattertop.png */ "./assets/images/chiodobros/splattertop.png");

var _splattertop2 = _interopRequireDefault(_splattertop);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLoaders = __webpack_require__(/*! react-loaders */ "./node_modules/react-loaders/dist/react-loaders.js");

var _reactLoaders2 = _interopRequireDefault(_reactLoaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var themeBundlePath = '/wp-content/themes/chiodobros/dist/';
var splatterBottomStyle = {}; //{ backgroundImage: `url(${themeBundlePath}${splatter})` }
var splatterTopStyle = {}; //{ backgroundImage: `url(${themeBundlePath}${splatterTop})` }

var VideoBackground = function (_React$Component) {
  _inherits(VideoBackground, _React$Component);

  function VideoBackground(props) {
    _classCallCheck(this, VideoBackground);

    var _this = _possibleConstructorReturn(this, (VideoBackground.__proto__ || Object.getPrototypeOf(VideoBackground)).call(this, props));

    _this.state = { started: false };
    return _this;
  }

  _createClass(VideoBackground, [{
    key: '_onReady',
    value: function _onReady(event) {
      event.target.mute();
      event.target.seekTo(8.5);
    }
  }, {
    key: '_onReady2',
    value: function _onReady2(event) {
      event.target.mute();
      event.target.seekTo(17);
    }
  }, {
    key: '_onPlay',
    value: function _onPlay() {}
  }, {
    key: '_onEnd',
    value: function _onEnd(event) {
      event.target.seekTo(0);
      event.target.playVideo();
    }
  }, {
    key: 'render',
    value: function render() {

      var videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0
        }
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { style: splatterTopStyle, className: 'splatter-top' }),
        _react2.default.createElement('div', { style: splatterTopStyle, className: 'splatter-top2' }),
        _react2.default.createElement(
          _reactParallax.Parallax,
          { strength: 300 },
          _react2.default.createElement(
            'div',
            { className: 'logo-wrapper' },
            _react2.default.createElement('img', {
              // className={cx('logo', {
              //   fadeIn: this.state.started,
              // })}
              className: 'fadeInUpBig animated logo',
              src: '' + themeBundlePath + _lowpolyv2.default,
              alt: 'logo'
            })
          ),
          _react2.default.createElement(
            _reactParallax.Background,
            { className: 'custom-bg' },
            _react2.default.createElement(
              'div',
              { className: 'video-background' },
              _react2.default.createElement(
                'div',
                { className: 'video-foreground' },
                _react2.default.createElement(_reactYoutube2.default, {
                  videoId: 'uu-18NqggeY',
                  opts: videoOptions,
                  className: 'video-iframe',
                  onReady: this._onReady,
                  onEnd: this._onEnd,
                  onPlay: this._onPlay
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'video-background-two' },
              _react2.default.createElement(
                'div',
                { className: 'video-foreground-two' },
                _react2.default.createElement(_reactYoutube2.default, {
                  videoId: 'uu-18NqggeY',
                  opts: videoOptions,
                  className: 'video-iframe',
                  onReady: this._onReady2,
                  onEnd: this._onEnd,
                  onPlay: this._onPlay
                })
              )
            )
          )
        ),
        _react2.default.createElement('div', { style: splatterBottomStyle, className: 'splatter-bottom' }),
        _react2.default.createElement('div', { style: splatterBottomStyle, className: 'splatter-bottom2' })
      );
    }
  }]);

  return VideoBackground;
}(_react2.default.Component);

exports.default = VideoBackground;

/***/ }),

/***/ "./assets/js/react/components/VideoBackground/style.scss":
/*!***************************************************************!*\
  !*** ./assets/js/react/components/VideoBackground/style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./assets/js/react/components/VideoBackground/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./assets/js/react/components/VideoBackground/style.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./assets/js/react/components/VideoBackground/style.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-foreground,\n.video-foreground-two,\n.video-background-two iframe,\n.video-background iframe {\n  width: 100vw;\n  height: 56.25vw;\n  /* height:width ratio = 9/16 = .5625  */\n  background: black;\n  pointer-events: none; }\n\n.video-background iframe,\n.video-background-two iframe {\n  width: 100%; }\n\n.logo-wrapper {\n  height: 400px; }\n\n.video-foreground,\n.video-background {\n  float: left;\n  width: 75vw;\n  overflow: hidden; }\n\n.video-foreground-two,\n.video-background-two {\n  float: right;\n  width: 75vw;\n  overflow: hidden; }\n\n.logo-wrapper {\n  width: 500px;\n  height: 500px;\n  margin: 20px auto;\n  position: relative; }\n  .logo-wrapper .logo {\n    width: 100%; }\n\n.custom-bg {\n  width: 200%;\n  height: 100vh;\n  margin-left: -50%;\n  margin-top: -10%; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig; }\n\n.splatter-bottom {\n  background-color: black;\n  width: 100%;\n  height: 100px;\n  margin-top: -40px;\n  z-index: 0;\n  position: relative;\n  transform: rotate(-2deg);\n  opacity: 1; }\n\n.splatter-top {\n  margin-top: -80px;\n  background-color: black;\n  width: 100%;\n  height: 100px;\n  z-index: 1;\n  position: absolute;\n  transform: rotate(2deg);\n  opacity: 1; }\n", ""]);

// exports


/***/ })

}]);