(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/GlobalData.ts":
/*!***************************!*\
  !*** ./src/GlobalData.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getGlobalData = getGlobalData;
exports.setGlobalData = setGlobalData;
var EGlobalDataKey = exports.EGlobalDataKey = undefined;
(function (EGlobalDataKey) {
  EGlobalDataKey["Tabs"] = "tabs";
  EGlobalDataKey["DefaultColor"] = "defaultColor";
  EGlobalDataKey["ActiveColor"] = "activeColor";
  EGlobalDataKey["Logo"] = "logo";
  EGlobalDataKey["Name"] = "name";
})(EGlobalDataKey || (exports.EGlobalDataKey = EGlobalDataKey = {}));
var globalData = {
  logo: '',
  name: '',
  activeColor: '#00479D',
  defaultColor: '#COCOCO',
  tabs: []
};
// get overload
function getGlobalData(key) {
  return globalData[key];
}
function setGlobalData(key, val) {
  if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === 'object') {
    globalData = _extends({}, globalData, key);
  } else if (typeof key === 'string') {
    globalData[key] = val;
  }
}

/***/ }),

/***/ "./src/components/request/index.ts":
/*!*****************************************!*\
  !*** ./src/components/request/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = exports.put = exports.del = exports.post = exports.get = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _index = __webpack_require__(/*! ../../modules/@wmeimob/request/src/taro/index */ "./src/modules/@wmeimob/request/src/taro/index.ts");

var _index2 = _interopRequireDefault(_index);

var _config = __webpack_require__(/*! ../../config */ "./src/config.ts");

var config = _interopRequireWildcard(_config);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var Taro = _interopRequireWildcard(_taroWeapp);

var _index3 = __webpack_require__(/*! ../../modules/@wmeimob/decorator/src/components/index */ "./src/modules/@wmeimob/decorator/src/components/index.ts");

var _const = __webpack_require__(/*! ../../modules/@wmeimob/request/src/const */ "./src/modules/@wmeimob/request/src/const.ts");

var _index4 = __webpack_require__(/*! ../utils/index */ "./src/components/utils/index.ts");

var _globalStore = __webpack_require__(/*! ../../globalStore2 */ "./src/globalStore2.ts");

var _globalStore2 = _interopRequireDefault(_globalStore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ref = new _index2.default(config),
    get = _ref.get,
    post = _ref.post,
    del = _ref.del,
    put = _ref.put,
    request = _ref.request,
    requestObj = _ref.requestObj;

exports.get = get;
exports.post = post;
exports.del = del;
exports.put = put;
exports.request = request;

var RequestFunction = function () {
  function RequestFunction() {
    _classCallCheck(this, RequestFunction);
  }

  _createClass(RequestFunction, null, [{
    key: "getToken",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref3, code;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Taro.login();

              case 2:
                _ref3 = _context.sent;
                code = _ref3.code;
                return _context.abrupt("return", post(config.silentAuthorizationUrl, { code: code }, {
                  unWillSend: true
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getToken() {
        return _ref2.apply(this, arguments);
      }

      return getToken;
    }()
    /**
     * 请求发送开始 可修改请求参数
     *
     * @export
     * @param {(Taro.request.Param<string | any>)} params
     */

  }, {
    key: "requestWillMount",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(params) {
        var token, _ref5, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = Taro.getStorageSync('token');

                if (token) {
                  _context2.next = 9;
                  break;
                }

                if (!config.silentAuthorization) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return RequestFunction.getToken();

              case 5:
                _ref5 = _context2.sent;
                data = _ref5.data;

                // 赋值token
                token = data.data.token;
                Taro.setStorageSync('token', token);

              case 9:
                params.header = _extends({}, params.header, {
                  Authorization: token
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestWillMount(_x) {
        return _ref4.apply(this, arguments);
      }

      return requestWillMount;
    }()
    /**
     * 请求发送结束
     *
     * @static
     * @memberof RequestFunction
     */

  }, {
    key: "requestDidMount",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(response, params) {
        var res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!response.data) {
                  _context3.next = 14;
                  break;
                }

                if (!(response.data.code !== 200)) {
                  _context3.next = 14;
                  break;
                }

                if (!(response.data.code === 401)) {
                  _context3.next = 12;
                  break;
                }

                Taro.setStorageSync('token', '');

                if (!config.silentAuthorization) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
                return requestObj.request(params.url, params.data, params.options);

              case 7:
                res = _context3.sent;
                return _context3.abrupt("return", res);

              case 9:
                Taro.navigateTo({
                  url: config.loginUrl
                });
                _context3.next = 14;
                break;

              case 12:
                Taro.showToast({
                  icon: 'none',
                  title: [100020, 100014].includes(response.data.code) ? '正在获取登录态...' : response.data.msg || '请求异常~',
                  duration: 1500
                });
                if ([100020, 100014].includes(response.data.code)) {
                  Taro.clearStorage();
                  (0, _index4.sleep)(1000, function () {
                    _globalStore2.default.tabKey = 0;
                    Taro.reLaunch({
                      url: config.loginUrl
                    });
                  });
                }

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function requestDidMount(_x2, _x3) {
        return _ref6.apply(this, arguments);
      }

      return requestDidMount;
    }()
  }]);

  return RequestFunction;
}();

(0, _tslib.__decorate)([(0, _index3.merge)()], RequestFunction, "getToken", null);
requestObj.eventEmitter.addListener(_const.RequestEventEnum.WillSend, RequestFunction.requestWillMount);
requestObj.eventEmitter.addListener(_const.RequestEventEnum.DidMount, RequestFunction.requestDidMount);

/***/ }),

/***/ "./src/components/tab-bar/index.modules.less":
/*!***************************************************!*\
  !*** ./src/components/tab-bar/index.modules.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabBarFontColor":"#cccccc","primaryColor":"#1890ff","iconSize":"22","MMTabBar_placeholder":"index-modules__MMTabBar_placeholder___33QmY","MMTabBar":"index-modules__MMTabBar___1EVWZ","content":"index-modules__content___1DdoT","item":"index-modules__item___97VW4","image":"index-modules__image___2zs4Z","redDot":"index-modules__redDot___vC_cq","count":"index-modules__count___MBIAp","iconfont":"index-modules__iconfont___2vYL8","text":"index-modules__text___aI1BU","home":"index-modules__home___Sev14","home_select":"index-modules__home_select___2VRat","family":"index-modules__family___2nGeG","family_select":"index-modules__family_select___IMmjT","store":"index-modules__store___NVRc-","store_select":"index-modules__store_select___10Zgt","mine":"index-modules__mine___KxizY","mine_select":"index-modules__mine_select___3O3ZN"};

/***/ }),

/***/ "./src/components/utils/index.ts":
/*!***************************************!*\
  !*** ./src/components/utils/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enlarge = exports.sampleImg = exports.isId = exports.isMobile = exports.isScan = exports.toast = exports.getUserInfo = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.requestOnOff = requestOnOff;
exports.sleep = sleep;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../request/index */ "./src/components/request/index.ts");

var _globalStore = __webpack_require__(/*! ../../globalStore */ "./src/globalStore.ts");

var _globalStore2 = _interopRequireDefault(_globalStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _useContext = (0, _taroWeapp.useContext)(_globalStore2.default),
    setUserInfo = _useContext.setUserInfo;

var getUserInfo = exports.getUserInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_click) {
    var _ref2, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _index.get)('/wxUser/getUserInfo');

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (data.code === 200) {
              setUserInfo(_extends({}, data.result));
              if (_click) {
                if (data.result.mobileNo) {
                  _taroWeapp2.default.reLaunch({ url: '/pages/home/index' });
                } else {
                  toast.info('授权成功，点击继续授权手机号');
                }
              }
            }
            // Taro.setStorageSync('openId', data.openId);
            // Taro.setStorageSync('phone', data.phone);
            // $Store2.phone = data.phone;
            // if (flag) return
            // if (data.phone) {
            //   toast.info('授权成功')
            //   var pages = Taro.getCurrentPages() //获取加载的页面
            //   var currentPage = pages[pages.length - 1] //获取当前页面的对象
            //   var url = currentPage.route //当前页面url
            //   if (url.includes('login')) {
            //     sleep(1000, () => Taro.reLaunch({ url: '/pages/home/index' }))
            //   }
            // } else {
            // }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getUserInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _requestOnOff = true;
function requestOnOff() {
  if (_requestOnOff) {
    _requestOnOff = false;
    sleep(2000, function () {
      return _requestOnOff = true;
    });
    return true;
  }
  return false;
}
function sleep(ms, callback) {
  setTimeout(callback, ms);
}
var toast = exports.toast = {
  success: function success(title) {
    return _taroWeapp2.default.showToast({
      title: title || "成功",
      icon: "success",
      duration: 1500
    });
  },
  fail: function fail(title) {
    return _taroWeapp2.default.showToast({
      title: title || "失败",
      icon: "none",
      duration: 1500
    });
  },
  info: function info(title) {
    return _taroWeapp2.default.showToast({
      title: title,
      icon: "none",
      duration: 1500
    });
  },
  loading: function loading(title) {
    return _taroWeapp2.default.showLoading({
      title: title || "加载中",
      mask: true
    });
  },
  hideLoading: function hideLoading() {
    _taroWeapp2.default.hideLoading();
  },
  hideToast: function hideToast() {
    _taroWeapp2.default.hideToast();
  }
};
var isScan = exports.isScan = function isScan(str) {
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(str);
};
var isMobile = exports.isMobile = function isMobile(str) {
  var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return reg.test(str);
};
var isId = exports.isId = function isId(card) {
  // 身份证
  var reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
  return reg.test(card);
};
var sampleImg = exports.sampleImg = ['https://covid-check-examples.oss-cn-beijing.aliyuncs.com/shizi2.jpg', 'https://covid-check-examples.oss-cn-beijing.aliyuncs.com/yangben.jpg', 'https://covid-check-examples.oss-cn-beijing.aliyuncs.com/shizhi1.jpg', 'https://covid-check-examples.oss-cn-beijing.aliyuncs.com/result.jpg'];
var enlarge = exports.enlarge = function enlarge(url, urls) {
  //图片预览
  _taroWeapp2.default.previewImage({
    current: url,
    urls: urls || sampleImg
  });
};

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isDevelopment = true;
var apiUrl = // 线上z
exports.apiUrl = "http://47.93.18.195:8020/server";
// 没有token时候跳转的页面。如果开启了静默授权不会跳转
var loginUrl = exports.loginUrl = "/pages/home/index";
// 启动静默授权
var silentAuthorization = exports.silentAuthorization = false;
// 静默授权地址
var silentAuthorizationUrl = exports.silentAuthorizationUrl = "/wxUser/login";
// 阿里云oss地址
var aliyunOssTokenUrl = exports.aliyunOssTokenUrl = apiUrl + "/aliyun/oss-token";
// 门店地图地址
var mapUrl = exports.mapUrl = "https://wx-aamc-map.aisin-sh.com";
// 高德地图key
var amapKey = exports.amapKey = "7285760470183c2f2aa4078dfae66c25";

/***/ }),

/***/ "./src/globalStore.ts":
/*!****************************!*\
  !*** ./src/globalStore.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description hooks组件对应的mobx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.userInfo = {};
  }

  _createClass(Store, [{
    key: "setUserInfo",
    value: function setUserInfo(info) {
      this.userInfo = info;
    }
  }]);

  return Store;
}();

;
(0, _mobx.decorate)(Store, {
  userInfo: _mobx.observable,
  setUserInfo: _mobx.action.bound
});
exports.default = (0, _taroWeapp.createContext)(new Store());

/***/ }),

/***/ "./src/globalStore2.ts":
/*!*****************************!*\
  !*** ./src/globalStore2.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observableValue = undefined;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var observableValue = exports.observableValue = {
  tabKey: 0
}; /**
    * @description class组件对应的mobx
    */

var counterStore = (0, _mobx.observable)(observableValue);
exports.default = counterStore;

/***/ }),

/***/ "./src/modules/@wmeimob/decorator/src/components/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@wmeimob/decorator/src/components/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autobind = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.lock = lock;
exports.throttle = throttle;
exports.debounce = debounce;
exports.throttleLast = throttleLast;
exports.merge = merge;

var _autobind = __webpack_require__(/*! core-decorators/lib/autobind */ "./node_modules/core-decorators/lib/autobind.js");

var _autobind2 = _interopRequireDefault(_autobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 绑定this
 *
 * @export
 * @returns
 */
var autobind = exports.autobind = _autobind2.default;
/**
 * 函数在未运行完成前 锁死
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
function lock() {
  var runing = false;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _len,
          args,
          _key,
          _args = arguments;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (runing) {
                _context.next = 13;
                break;
              }

              runing = true;
              _context.prev = 2;

              for (_len = _args.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              _context.next = 6;
              return fun.apply(this, args);

            case 6:
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](2);

              // eslint-disable-next-line require-atomic-updates
              runing = false;
              throw _context.t0;

            case 12:
              // eslint-disable-next-line require-atomic-updates
              runing = false;

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 8]]);
    }));
    return descriptor;
  };
}
/**
 * 多少毫秒才能发送一次 限流
 *
 * @export
 * @param {number} [time=100]
 * @returns {MethodDecorator}
 */
function throttle() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var date = new Date();
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var now = new Date();
      if (now.getTime() - date.getTime() > time) {
        date = now;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        fun.apply(this, args);
      }
    };
    return descriptor;
  };
}
/**
 * 延迟触发  多次提交，提交最后一次
 *
 * @export
 * @param {number} [time=10]
 * @returns {MethodDecorator}
 */
function debounce() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var st = void 0;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var _this = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      clearTimeout(st);
      st = setTimeout(function () {
        fun.apply(_this, args);
      }, time);
    };
    return descriptor;
  };
}
/**
 * 特殊限流，最后一次的函数肯定触发
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
function throttleLast() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var date = new Date();
  var stLast = void 0;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var _this2 = this;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var now = new Date();
      clearTimeout(stLast);
      if (now.getTime() - date.getTime() > time) {
        date = now;
        fun.apply(this, args);
      } else {
        stLast = setTimeout(function () {
          fun.apply(_this2, args);
        }, time);
      }
    };
    return descriptor;
  };
}
/**
 * 所有函数返回值均是最后一个函数的返回值 返回值转为promise
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
function merge() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var st = void 0;
  var resloveFunction = void 0;
  var returnPromise = void 0;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var _this3 = this;

      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      if (!returnPromise) {
        returnPromise = new Promise(function (resolve) {
          resloveFunction = resolve;
        });
      }
      clearTimeout(st);
      st = setTimeout(function () {
        resloveFunction(fun.apply(_this3, args));
        returnPromise = undefined;
      }, time);
      return returnPromise;
    };
    return descriptor;
  };
}

/***/ }),

/***/ "./src/modules/@wmeimob/event-emitter/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/@wmeimob/event-emitter/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    /**
     * 监听列表
     *
     * @type {IEventList[]}
     * @memberof EventEmitter
     */
    this.eventList = {};
  }
  /**
   * 添加监听
   *
   * @param {string} type
   * @param {IEventFunction} listener
   * @returns {EventEmitter}
   * @memberof EventEmitter
   */


  _createClass(EventEmitter, [{
    key: "addListener",
    value: function addListener(key, listener) {
      if (!this.eventList[key]) {
        this.eventList[key] = [];
      }
      var event = {
        addListener: listener,
        listener: listener
      };
      this.eventList[key].push(event);
    }
    /**
     * 只运行一次的监听
     *
     * @returns
     * @memberof EventEmitter
     */

  }, {
    key: "once",
    value: function once(key, _listener) {
      var _this = this;

      if (!this.eventList[key]) {
        this.eventList[key] = [];
      }
      var event = {
        addListener: _listener,
        listener: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _args = arguments;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this.removeListener(key, _listener);
                    _context.next = 3;
                    return _listener.apply(undefined, _args);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          function listener() {
            return _ref.apply(this, arguments);
          }

          return listener;
        }()
      };
      this.eventList[key].push(event);
    }
    /**
     * 触发事件
     *
     * @param {string} key
     * @param {...any[]} params
     * @memberof EventEmitter
     */

  }, {
    key: "emit",
    value: function emit(key) {
      var funArray = [];
      if (this.eventList[key]) {
        this.currentKey = key;

        for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.eventList[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var eventObject = _step.value;

            this.currentEvent = eventObject;
            funArray.push(eventObject.listener.apply(eventObject, params));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return Promise.all(funArray);
    }
    /**
     * 删除指定监听
     *
     * @param {T} key
     * @param {(...args: any[]) => any} listener
     * @memberof EventEmitter
     */

  }, {
    key: "removeListener",
    value: function removeListener(key, listener) {
      var list = this.eventList[key];
      if (list) {
        var index = list.findIndex(function (value) {
          return value.addListener === listener;
        });
        if (index !== -1) {
          list.splice(list.findIndex(function (value) {
            return value.addListener === listener;
          }), 1);
        }
      }
    }
    /**
     * 删除所有监听
     *
     * @param {T} [key]
     * @returns
     * @memberof EventEmitter
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(key) {
      if (key) {
        this.eventList = {};
      } else {
        delete this.eventList[key];
      }
    }
    /**
     * 移除当前事件
     *
     * @memberof EventEmitter
     */

  }, {
    key: "removeCurrentListener",
    value: function removeCurrentListener() {
      if (this.currentKey !== null && this.currentEvent) {
        this.removeListener(this.currentKey, this.currentEvent.addListener);
      }
    }
    /**
     * 返回监听函数数量
     *
     * @memberof EventEmitter
     */

  }, {
    key: "listenerCount",
    value: function listenerCount(key) {
      var events = this.eventList[key];
      if (events) {
        return events.length;
      }
      return 0;
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),

/***/ "./src/modules/@wmeimob/request/src/const.ts":
/*!***************************************************!*\
  !*** ./src/modules/@wmeimob/request/src/const.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RequestEventEnum = exports.RequestEventEnum = undefined;
(function (RequestEventEnum) {
  /**
   * 即将发送
   */
  RequestEventEnum[RequestEventEnum["WillSend"] = 0] = "WillSend";
  /**
   * 发送完毕
   */
  RequestEventEnum[RequestEventEnum["DidMount"] = 1] = "DidMount";
})(RequestEventEnum || (exports.RequestEventEnum = RequestEventEnum = {}));

/***/ }),

/***/ "./src/modules/@wmeimob/request/src/taro/fetch.ts":
/*!********************************************************!*\
  !*** ./src/modules/@wmeimob/request/src/taro/fetch.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../event-emitter/index */ "./src/modules/@wmeimob/event-emitter/index.ts");

var _index2 = _interopRequireDefault(_index);

var _const = __webpack_require__(/*! ../const */ "./src/modules/@wmeimob/request/src/const.ts");

var _utils = __webpack_require__(/*! ../utils */ "./src/modules/@wmeimob/request/src/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaroRequest = function () {
  function TaroRequest(baseUrl) {
    _classCallCheck(this, TaroRequest);

    this.eventEmitter = new _index2.default();
    this.defaultOptions = {
      showFailToast: true,
      isCatchFail: true
    };
    this.baseUrl = "";
    this.baseUrl = baseUrl;
  }

  _createClass(TaroRequest, [{
    key: "request",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments[2];
        var requestUrl, requestOptions, header, params, res, mountReturn, key, element, content;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                requestUrl = (0, _utils.normalizationUrl)(this.baseUrl, url);
                requestOptions = _extends({}, this.defaultOptions, options);
                _context.next = 4;
                return this.getHeader();

              case 4:
                header = _context.sent;
                params = _extends({
                  url: requestUrl,
                  data: data,
                  header: header
                }, requestOptions);

                if (options.unWillSend) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return this.eventEmitter.emit(_const.RequestEventEnum.WillSend, params);

              case 9:
                res = null;
                _context.prev = 10;
                _context.next = 13;
                return _taroWeapp2.default.request(params);

              case 13:
                res = _context.sent;
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](10);

                res = {
                  statusCode: -1,
                  data: {}
                };

              case 19:
                _context.next = 21;
                return this.eventEmitter.emit(_const.RequestEventEnum.DidMount, res, {
                  url: url,
                  data: data,
                  options: options
                });

              case 21:
                mountReturn = _context.sent;
                _context.t1 = _regenerator2.default.keys(mountReturn);

              case 23:
                if ((_context.t2 = _context.t1()).done) {
                  _context.next = 31;
                  break;
                }

                key = _context.t2.value;

                if (!mountReturn.hasOwnProperty(key)) {
                  _context.next = 29;
                  break;
                }

                element = mountReturn[key];

                if (!element) {
                  _context.next = 29;
                  break;
                }

                return _context.abrupt("return", element);

              case 29:
                _context.next = 23;
                break;

              case 31:
                if (requestOptions.showFailToast) {
                  this.failToast(res, requestUrl);
                }

                if (!(requestOptions.isCatchFail && !(0, _utils.validateStatus)(res.statusCode))) {
                  _context.next = 34;
                  break;
                }

                throw res;

              case 34:
                content = res.data ? res.data.content : undefined;
                return _context.abrupt("return", _extends({}, res, { content: content }));

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 16]]);
      }));

      function request(_x2) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "getHeader",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var headers;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = {};

                headers["Content-Type"] = "application/json";
                return _context2.abrupt("return", headers);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHeader() {
        return _ref2.apply(this, arguments);
      }

      return getHeader;
    }()
  }, {
    key: "failToast",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(response, url) {
        var data;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(0, _utils.validateStatus)(response.statusCode)) {
                  data = response.data;

                  if (data.error) {
                    // 弹出后端报错
                    _taroWeapp2.default.showToast({
                      icon: "none",
                      title: "" + data.error.message,
                      duration: 2500
                    });
                  } else if (response.statusCode && response.statusCode > 0) {
                    _taroWeapp2.default.showToast({
                      icon: "none",
                      title: data.description,
                      duration: 2500
                    });
                  } else if (response.statusCode && response.statusCode === -1) {
                    _taroWeapp2.default.showToast({
                      icon: "none",
                      title: "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u3002",
                      duration: 2500
                    });
                  } else {
                    _taroWeapp2.default.showToast({
                      icon: "none",
                      title: "\u672A\u77E5\u9519\u8BEF\uFF0C\u4E07\u5206\u62B1\u6B49\uFF01",
                      duration: 2500
                    });
                  }
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function failToast(_x3, _x4) {
        return _ref3.apply(this, arguments);
      }

      return failToast;
    }()
  }]);

  return TaroRequest;
}();

exports.default = TaroRequest;

/***/ }),

/***/ "./src/modules/@wmeimob/request/src/taro/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/@wmeimob/request/src/taro/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _index = __webpack_require__(/*! ../../../decorator/src/components/index */ "./src/modules/@wmeimob/decorator/src/components/index.ts");

var _utils = __webpack_require__(/*! ../utils */ "./src/modules/@wmeimob/request/src/utils.ts");

var _fetch = __webpack_require__(/*! ./fetch */ "./src/modules/@wmeimob/request/src/taro/fetch.ts");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = function () {
  function Request(config) {
    _classCallCheck(this, Request);

    this.requestObj = new _fetch2.default(config.apiUrl);
  }

  _createClass(Request, [{
    key: "get",
    value: function get(url, data) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request(url, data, _extends({ method: 'GET' }, option));
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request(url, data, _extends({ method: 'POST' }, option));
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request(url, data, _extends({ method: 'PUT' }, option));
    }
  }, {
    key: "del",
    value: function del(url, data) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request(url, data, _extends({ method: 'DELETE' }, option));
    }
  }, {
    key: "request",
    value: function request(path, data) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _paserDynamicPath = (0, _utils.paserDynamicPath)(path, data),
          url = _paserDynamicPath.url,
          parseDdata = _paserDynamicPath.data;

      return this.requestObj.request(url, parseDdata, option);
    }
  }]);

  return Request;
}();
Request = (0, _tslib.__decorate)([_index.autobind], Request);
exports.default = Request;

/***/ }),

/***/ "./src/modules/@wmeimob/request/src/utils.ts":
/*!***************************************************!*\
  !*** ./src/modules/@wmeimob/request/src/utils.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paserDynamicPath = paserDynamicPath;
exports.validateStatus = validateStatus;
exports.normalizationUrl = normalizationUrl;
/**
 * 解析并替换url中的动态参数
 *
 * @param {string} [path='']
 * @param {*} params
 * @returns
 */
function paserDynamicPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var data = {};
  var url = path;
  Object.keys(params).forEach(function (key) {
    var dyReg = new RegExp(':' + key, 'g');
    if (dyReg.test(url)) {
      url = url.replace(dyReg, params[key]);
    } else {
      data[key] = params[key];
    }
  });
  return { url: url, data: data };
}
/**
 * 根据状态码判断是否报错。
 *
 * @export
 * @param {number} statusCode
 * @param {*} data
 * @returns
 */
function validateStatus(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}
/**
 * 格式化 url
 *
 * @export
 * @param {string} apiUrl
 * @param {string} url
 * @returns
 */
function normalizationUrl(apiUrl, url) {
  var requestUrl = url;
  if (apiUrl[apiUrl.length - 1] === '/') {
    if (requestUrl[0] === '/') {
      requestUrl = requestUrl.replace('/', '');
    }
  } else {
    if (requestUrl[0] !== '/' && !/^https{0,1}:\/\//g.test(requestUrl)) {
      requestUrl = '/' + requestUrl;
    }
  }
  if (!/^https{0,1}:\/\//g.test(requestUrl)) {
    requestUrl = '' + apiUrl + requestUrl;
  }
  return requestUrl;
}

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx":
/*!******************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MMNavigationType = exports.MMNavigationType = undefined;
(function (MMNavigationType) {
  MMNavigationType[MMNavigationType["Default"] = 0] = "Default";
  MMNavigationType[MMNavigationType["Transparent"] = 1] = "Transparent";
  MMNavigationType[MMNavigationType["Primary"] = 2] = "Primary";
  MMNavigationType[MMNavigationType["Gradient"] = 3] = "Gradient";
  MMNavigationType[MMNavigationType["Login"] = 4] = "Login";
  MMNavigationType[MMNavigationType["Home"] = 5] = "Home";
  MMNavigationType[MMNavigationType["OrderDetail"] = 6] = "OrderDetail";
})(MMNavigationType || (exports.MMNavigationType = MMNavigationType = {}));

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts":
/*!************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/utils/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNewIphone = undefined;
exports.guid = guid;
exports.selectRect = selectRect;
exports.enumKeys = enumKeys;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 生成唯一标识符
 *
 * @export
 * @returns
 */
function guid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}
var isNewIphone = exports.isNewIphone = getisNewIphone();
/**
 * 判断是否是新iphone
 *
 * @export
 * @returns
 */
function getisNewIphone() {
  var _Taro$getSystemInfoSy = _taroWeapp2.default.getSystemInfoSync(),
      model = _Taro$getSystemInfoSy.model,
      screenWidth = _Taro$getSystemInfoSy.screenWidth,
      screenHeight = _Taro$getSystemInfoSy.screenHeight;

  var isNewPhone = /(iPhone (X|11|12|13|14|15|16))|(unknown.*iPhone)/.test(model);
  if (isNewPhone) {
    // 判断是否为iphone SE,1334 x 750 像素分辨率
    isNewPhone = !(screenWidth === 375 && screenHeight === 667);
  }
  return isNewPhone;
}
/**
 * 查询元素大小
 *
 * @export
 * @param {string} name
 * @param {*} scope
 * @returns
 */
function selectRect(name, scope) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var query = _taroWeapp2.default.createSelectorQuery().in(scope);
      query.select(name).boundingClientRect(function (res) {
        resolve(res);
      }).exec();
    }, 0);
  });
}
/**
 * 获取枚举的key
 *
 * @export
 * @param {*} obj
 * @returns
 */
function enumKeys(obj) {
  var list = [];
  for (var key in Object.keys(obj)) {
    if (obj.hasOwnProperty(key)) {
      var element = obj[key];
      if (typeof element !== 'number') {
        list.push(element);
      }
    }
  }
  return list;
}

/***/ }),

/***/ "./src/pages/home/index.module.less":
/*!******************************************!*\
  !*** ./src/pages/home/index.module.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"my_page":"index-module__my_page___txTgo","banner":"index-module__banner___G4VUx","handle_menu":"index-module__handle_menu___20_kY","handle_option":"index-module__handle_option___1jCh7","add_img":"index-module__add_img___2nGau","img_right":"index-module__img_right___2kE3j","modal":"index-module__modal___1UUIN","show_link":"index-module__show_link___9M6wB","title":"index-module__title___2mxTG","spacingIphone":"index-module__spacingIphone___3fKqq","link_item":"index-module__link_item___3aPIJ"};

/***/ }),

/***/ "./src/pages/other/authorization/_authorizationCpt/index.module.less":
/*!***************************************************************************!*\
  !*** ./src/pages/other/authorization/_authorizationCpt/index.module.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"authorizationBtn":"index-module__authorizationBtn___2-Zv4"};

/***/ })

}]);