(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/other/addPeople/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/addPeople/index.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/other/addPeople/index.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /**
                     * @description 添加受检人
                     */

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _const = __webpack_require__(/*! ../../../modules/@wmeimob/taro-design/src/components/navigation/const */ "./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx");

var _index = __webpack_require__(/*! ../../../modules/@wmeimob/taro-design/src/components/utils/index */ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts");

var _indexModule = __webpack_require__(/*! ./index.module.less */ "./src/pages/other/addPeople/index.module.less");

var styles = _interopRequireWildcard(_indexModule);

var _index2 = __webpack_require__(/*! ../../../components/utils/index */ "./src/components/utils/index.ts");

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index3 = __webpack_require__(/*! ../../../components/request/index */ "./src/components/request/index.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var throttle = function throttle(fu) {
  var off = true;
  return function () {
    if (off) {
      var context = this;
      fu.call(context, arguments);
      off = false;
      setTimeout(function () {
        off = true;
      }, 1200);
    }
  };
};

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
      navigationBarTitleText: '添加受检人',
      navigationStyle: 'custom'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "$compid__13", "styles", "content"], _this.customComponents = ["MMNavigation"], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__13 = _genCompid2[0],
          $compid__13 = _genCompid2[1];

      var _useState = (0, _taroWeapp.useState)({}),
          _useState2 = _slicedToArray(_useState, 2),
          content = _useState2[0],
          setContent = _useState2[1];

      var id = (0, _taroWeapp.useRouter)().params.id;

      (0, _taroWeapp.useEffect)(function () {
        if (id) {
          editInfo();
        }
      }, []);
      var editInfo = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _ref3, data;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _index3.get)('/checked/user/query/' + id);

                case 2:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data.code === 200) {
                    setContent(_extends({}, data.result));
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function editInfo() {
          return _ref2.apply(this, arguments);
        };
      }();
      var setVal = function setVal(key, val) {
        console.log(key, val, 'x');
        setContent(function (info) {
          return _extends({}, info, _defineProperty({}, key, val));
        });
      };
      var submit = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var idCardNo, mobileNo, userName, purban, sex, purbanCodes, street, address, _ref5, data;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  idCardNo = content.idCardNo, mobileNo = content.mobileNo, userName = content.userName, purban = content.purban, sex = content.sex, purbanCodes = content.purbanCodes, street = content.street, address = content.address;

                  if (userName) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return", _index2.toast.info('请输入姓名'));

                case 3:
                  if (sex) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return", _index2.toast.info('请选择性别'));

                case 5:
                  if ((0, _index2.isId)(idCardNo)) {
                    _context2.next = 7;
                    break;
                  }

                  return _context2.abrupt("return", _index2.toast.info('请输入正确的身份证号'));

                case 7:
                  if ((0, _index2.isMobile)(mobileNo)) {
                    _context2.next = 9;
                    break;
                  }

                  return _context2.abrupt("return", _index2.toast.info('请输入正确的手机号'));

                case 9:
                  if (purban) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt("return", _index2.toast.info('请选择省市区'));

                case 11:
                  _context2.next = 13;
                  return (0, _index3.post)('/checked/user/add', {
                    id: id || null,
                    idCardNo: idCardNo,
                    mobileNo: mobileNo,
                    userName: userName,
                    purban: purban,
                    sex: sex,
                    purbanCodes: purbanCodes,
                    street: street,
                    address: address
                  });

                case 13:
                  _ref5 = _context2.sent;
                  data = _ref5.data;

                  if (data.code === 200) {
                    _index2.toast.success('操作成功~');
                    (0, _index2.sleep)(600, function () {
                      return _taroWeapp2.default.navigateBack();
                    });
                  }

                case 16:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function submit() {
          return _ref4.apply(this, arguments);
        };
      }();
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px' });

      this.anonymousFunc0 = function (e) {
        return setVal('userName', e.detail.value);
      };

      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px' });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({
        color: content.sex ? '#000' : '#ccc',
        fontSize: '16px',
        width: '100%'
      });

      this.anonymousFunc1 = function (res) {
        var detail = res.detail;

        setVal('sex', ['男', '女'][Number(detail.value)]);
      };

      var anonymousState__temp4 = __webpack_require__(/*! ./right.png */ "./src/pages/other/addPeople/right.png");

      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px' });

      this.anonymousFunc2 = function (e) {
        return setVal('idCardNo', e.detail.value);
      };

      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px' });

      this.anonymousFunc3 = function (e) {
        return setVal('mobileNo', e.detail.value);
      };

      var anonymousState__temp7 = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px' });
      var anonymousState__temp8 = (0, _taroWeapp.internal_inline_style)({
        color: content.purban ? '#000' : '#ccc',
        fontSize: '16px',
        width: '100%'
      });

      this.anonymousFunc4 = function (res) {
        var detail = res.detail;

        setVal('purban', detail.value.join(''));
        setVal('purbanCodes', detail.code);
      };

      var anonymousState__temp9 = __webpack_require__(/*! ./right.png */ "./src/pages/other/addPeople/right.png");

      var anonymousState__temp10 = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px', opacity: 0 });

      this.anonymousFunc5 = function (e) {
        return setVal('street', e.detail.value);
      };

      var anonymousState__temp11 = (0, _taroWeapp.internal_inline_style)({ marginRight: '2px', opacity: 0 });

      this.anonymousFunc6 = function (e) {
        return setVal('address', e.detail.value);
      };

      var anonymousState__temp12 = (0, _taroWeapp.internal_inline_style)({ bottom: _index.isNewIphone ? '34px' : 0 });
      this.anonymousFunc7 = throttle(function () {
        return submit();
      });
      _taroWeapp.propsManager.set({
        "type": _const.MMNavigationType.Transparent,
        "title": "\u53D7\u68C0\u4EBA"
      }, $compid__13, $prevCompid__13);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        anonymousState__temp12: anonymousState__temp12,
        $compid__13: $compid__13,
        styles: styles,
        content: content
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7"], _class.$$componentPath = "pages/other/addPeople/index", _temp2);


Index.config = { navigationBarTitleText: '添加受检人', navigationStyle: 'custom' };
// 省市区：     北京市 北京市 朝阳区
// 省市区code： ["110000", "110100", "110105"]
// 街道/乡镇：   松南镇
// 详细地址：    淞南七村xxxx
exports.default = (0, _mobx.observer)(Index);

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/addPeople/index.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/other/addPeople/index.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/other/addPeople/index.wxml";

/***/ }),

/***/ "./src/pages/other/addPeople/index.module.less":
/*!*****************************************************!*\
  !*** ./src/pages/other/addPeople/index.module.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"addPeople_page":"index-module__addPeople_page___TclSz","info":"index-module__info___2u-2m","record":"index-module__record___12IsV","field":"index-module__field___3FLi3","val":"index-module__val___1_XQC","sub_btn":"index-module__sub_btn___28DGE"};

/***/ }),

/***/ "./src/pages/other/addPeople/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/other/addPeople/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/other/addPeople/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/other/addPeople/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/other/addPeople/index.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/other/addPeople/index.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/addPeople/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/other/addPeople/index.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/other/addPeople/index.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/addPeople/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/other/addPeople/right.png":
/*!*********************************************!*\
  !*** ./src/pages/other/addPeople/right.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAgNJREFUWEfVl+9r00AYx5/nLmtaMVM3BoIynHascy5bKauM+iJ/el44qy+ObHTtWu38MdgmqLWwzi3p5U5uOGgFIXcJDeZNLnDk+7nvfZ/cE4ScL8xZH/4vgM3NVw/E3RjbzeYgK+cSO1Aul+3S/OILJWzJ6CQIgm9ZQCQGAADcqL5cJwglRJRhkX7o7e1dpIXQAQDlgu0sVAiiJaTk4cWg2+/3wzQQWgBKaK3RcOzreFVKiULCVTt41wUAYQqhDaCEqtXqEsfCshpLpMND9uZ4pgBK7HmtsUwlX1JjEpOvBwfNUxMIIwf+COHWVn1VUHTUswjJp3ZbvzzTAACAZ7nuqCItasdxLEqW7DHGfuk4kRIA4InnFe8MLyuUEApIogJEXcbYOClEagAlVKvV7o1h7pmqDEBy2WLNnspnEohMAG5CubPzkMbkkRpTgT/2999+nimAEnPd+oq0cEEnlJk5cANQr69InhNArluwve3dF/T6aS4hfLy7W5q/4mu3Zbjo2Ee+7/MkAVRz0mXA8yx3kN+HaOpTDOO5j63W659JV347z9iBycMoktF5LwjOdMWNt2D6OObDQ8Zmdxzn2pD83ZLJcHTU6XQiE+tNMjDVlHKn+L7j+6M04loZmGzLC8i/MMa+pxXXAlCT1Y+JupuU279gjcswi9VrO5CV6OR7cnfgN0N55SEzLzhoAAAAAElFTkSuQmCC"

/***/ })

},[["./src/pages/other/addPeople/index.tsx","runtime","taro","vendors","common"]]]);