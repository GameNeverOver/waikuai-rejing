(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/other/choicePeople/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/choicePeople/index.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/other/choicePeople/index.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /**
                     * @description 选择受检人
                     */

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../modules/@wmeimob/taro-design/src/components/utils/index */ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts");

var _const = __webpack_require__(/*! ../../../modules/@wmeimob/taro-design/src/components/navigation/const */ "./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx");

var _indexModule = __webpack_require__(/*! ./index.module.less */ "./src/pages/other/choicePeople/index.module.less");

var styles = _interopRequireWildcard(_indexModule);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index2 = __webpack_require__(/*! ../../../components/request/index */ "./src/components/request/index.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '结果上传',
      navigationStyle: 'custom'
    }, _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "loopArray45", "$compid__83", "styles", "arr", "isNewIphone"], _this.anonymousFunc0Map = {}, _this.customComponents = ["MMNavigation"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__83"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__83 = _genCompid2[0],
          $compid__83 = _genCompid2[1];

      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          arr = _useState2[0],
          setArr = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(1),
          _useState4 = _slicedToArray(_useState3, 2),
          pageNum = _useState4[0],
          setPageNum = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          total = _useState6[0],
          setTotal = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          first = _useState8[0],
          setFirst = _useState8[1];

      (0, _taroWeapp.useEffect)(function () {
        getList();
      }, [pageNum]);
      (0, _taroWeapp.useReachBottom)(function () {
        if (total > arr.length) {
          setPageNum(pageNum + 1);
        }
      });
      (0, _taroWeapp.useDidShow)(function () {
        if (first) {
          if (pageNum === 1) {
            getList();
          } else {
            setPageNum(1);
          }
        }
      });
      var getList = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _ref3, data, _data$result, list, _total;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _index2.get)('checked/user/queryPageList', {
                    pageNum: 1,
                    pageSize: 15
                  });

                case 2:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data.code === 200) {
                    _data$result = data.result, list = _data$result.list, _total = _data$result.total;

                    setTotal(_total);
                    if (pageNum === 1) {
                      setArr(list || []);
                    } else {
                      setArr([].concat(_toConsumableArray(arr), _toConsumableArray(list)));
                    }
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function getList() {
          return _ref2.apply(this, arguments);
        };
      }();

      var anonymousState__temp3 = __webpack_require__(/*! ./img/empty.png */ "./src/pages/other/choicePeople/img/empty.png");

      this.anonymousFunc1 = function () {
        setFirst(true);
        _taroWeapp2.default.navigateTo({ url: '/pages/other/addPeople/index' });
      };

      var anonymousState__temp4 = __webpack_require__(/*! ./img/add.png */ "./src/pages/other/choicePeople/img/add.png");

      var loopArray45 = arr.map(function (ele, idx) {
        ele = {
          $original: (0, _taroWeapp.internal_get_original)(ele)
        };

        var _$indexKey = "gdzzz" + idx;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          var archive = _taroWeapp2.default.getStorageSync('archive');
          var info = JSON.parse(archive || "{}");
          if (archive && info.userName) {
            _taroWeapp2.default.showModal({
              title: '提示',
              content: "\u53D7\u68C0\u4EBA '" + info.userName + "' \u6709\u672A\u7ED3\u675F\u7684\u68C0\u6D4B\u4EFB\u52A1\uFF0C\u662F\u5426\u7EE7\u7EED\u8FDB\u884C\uFF1F",
              success: function success(res) {
                if (!res.cancel) {
                  _taroWeapp2.default.navigateTo({
                    url: '/pages/other/uploadResult/index'
                  });
                } else {
                  _taroWeapp2.default.setStorageSync('archive', '');
                  _taroWeapp2.default.navigateTo({
                    url: '/pages/other/uploadResult/index?id=' + ele.$original.id + '&userName=' + ele.$original.userName
                  });
                }
              }
            });
          } else {
            _taroWeapp2.default.setStorageSync('archive', '');
            _taroWeapp2.default.navigateTo({
              url: '/pages/other/uploadResult/index?id=' + ele.$original.id
            });
          }
        };

        var $loopState__temp2 = __webpack_require__(/*! ./img/right.png */ "./src/pages/other/choicePeople/img/right.png");

        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $original: ele.$original
        };
      });
      _taroWeapp.propsManager.set({
        "type": _const.MMNavigationType.Transparent,
        "title": "\u7ED3\u679C\u4E0A\u4F20"
      }, $compid__83, $prevCompid__83);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray45: loopArray45,
        $compid__83: $compid__83,
        styles: styles,
        arr: arr,
        isNewIphone: _index.isNewIphone
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/other/choicePeople/index", _temp2);


Index.config = { navigationBarTitleText: '结果上传', navigationStyle: 'custom' };
exports.default = (0, _mobx.observer)(Index);

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/choicePeople/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/other/choicePeople/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/other/choicePeople/index.wxml";

/***/ }),

/***/ "./src/pages/other/choicePeople/img/add.png":
/*!**************************************************!*\
  !*** ./src/pages/other/choicePeople/img/add.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKdJREFUSEvtljsOwjAQRN809HBIrgAVBRW5AofEPc2gQApkOawVOchF3O5n9je7FhXP9g64AsdJ/Q5cJD0jc0UKo9z2DThluoOkc2RfC/AA9pmzJOnQCsAlR5LCAEOFqUQbwO9W2e64RBmJ8lGMpnBOnoAPGWdItNRxbjeMACUStQJIfwEo7ZlWGbxL9L0p2ze5JtS+ebBlEFWgm3uw+slc/egv/ra8AC4lbv+WXd3wAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/other/choicePeople/img/empty.png":
/*!****************************************************!*\
  !*** ./src/pages/other/choicePeople/img/empty.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/other/choicePeople/img/empty.png";

/***/ }),

/***/ "./src/pages/other/choicePeople/img/right.png":
/*!****************************************************!*\
  !*** ./src/pages/other/choicePeople/img/right.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAgNJREFUWEfVl+9r00AYx5/nLmtaMVM3BoIynHascy5bKauM+iJ/el44qy+ObHTtWu38MdgmqLWwzi3p5U5uOGgFIXcJDeZNLnDk+7nvfZ/cE4ScL8xZH/4vgM3NVw/E3RjbzeYgK+cSO1Aul+3S/OILJWzJ6CQIgm9ZQCQGAADcqL5cJwglRJRhkX7o7e1dpIXQAQDlgu0sVAiiJaTk4cWg2+/3wzQQWgBKaK3RcOzreFVKiULCVTt41wUAYQqhDaCEqtXqEsfCshpLpMND9uZ4pgBK7HmtsUwlX1JjEpOvBwfNUxMIIwf+COHWVn1VUHTUswjJp3ZbvzzTAACAZ7nuqCItasdxLEqW7DHGfuk4kRIA4InnFe8MLyuUEApIogJEXcbYOClEagAlVKvV7o1h7pmqDEBy2WLNnspnEohMAG5CubPzkMbkkRpTgT/2999+nimAEnPd+oq0cEEnlJk5cANQr69InhNArluwve3dF/T6aS4hfLy7W5q/4mu3Zbjo2Ee+7/MkAVRz0mXA8yx3kN+HaOpTDOO5j63W659JV347z9iBycMoktF5LwjOdMWNt2D6OObDQ8Zmdxzn2pD83ZLJcHTU6XQiE+tNMjDVlHKn+L7j+6M04loZmGzLC8i/MMa+pxXXAlCT1Y+JupuU279gjcswi9VrO5CV6OR7cnfgN0N55SEzLzhoAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/other/choicePeople/index.module.less":
/*!********************************************************!*\
  !*** ./src/pages/other/choicePeople/index.module.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"choice_page":"index-module__choice_page___lB2_x","sadd_action":"index-module__sadd_action___ZZHhV","add_img":"index-module__add_img___3QAoj","empty":"index-module__empty___3Z9P1","list":"index-module__list___JhMv4","record":"index-module__record___2ZnTc","name":"index-module__name___OIhNy","id":"index-module__id___1fhWC"};

/***/ }),

/***/ "./src/pages/other/choicePeople/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/other/choicePeople/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/other/choicePeople/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/other/choicePeople/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/other/choicePeople/index.tsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pages/other/choicePeople/index.tsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/choicePeople/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/other/choicePeople/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pages/other/choicePeople/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/choicePeople/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/other/choicePeople/index.tsx","runtime","taro","vendors","common"]]]);