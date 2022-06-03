(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/other/uploadResult/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/uploadResult/index.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/other/uploadResult/index.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************/
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
                     * @description 上传结果
                     */

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../modules/@wmeimob/taro-design/src/components/utils/index */ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts");

var _indexModule = __webpack_require__(/*! ./index.module.less */ "./src/pages/other/uploadResult/index.module.less");

var styles = _interopRequireWildcard(_indexModule);

var _index2 = __webpack_require__(/*! ../../../modules/@wmeimob/aliyun/index */ "./src/modules/@wmeimob/aliyun/index.ts");

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index3 = __webpack_require__(/*! ../../../components/utils/index */ "./src/components/utils/index.ts");

var _config = __webpack_require__(/*! ../../../config */ "./src/config.ts");

var _index4 = __webpack_require__(/*! ../../../components/request/index */ "./src/components/request/index.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      navigationBarBackgroundColor: '#fff'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "anonymousState__temp13", "anonymousState__temp14", "anonymousState__temp15", "anonymousState__temp16", "anonymousState__temp17", "anonymousState__temp18", "anonymousState__temp19", "anonymousState__temp20", "anonymousState__temp21", "anonymousState__temp22", "anonymousState__temp23", "anonymousState__temp24", "styles", "resultInfo", "userName", "isNewIphone"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _useRouter$params = (0, _taroWeapp.useRouter)().params,
          id = _useRouter$params.id,
          userName = _useRouter$params.userName;

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          isRead = _useState2[0],
          setIsRead = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)({}),
          _useState4 = _slicedToArray(_useState3, 2),
          resultInfo = _useState4[0],
          setResultInfo = _useState4[1];

      var submit = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var checkResultPicFleId, resultType, shijikaPicFileId, shiziPicFileId, yangbenPicFileId, reagentCode, cuserId, _ref3, data;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  checkResultPicFleId = resultInfo.checkResultPicFleId, resultType = resultInfo.resultType, shijikaPicFileId = resultInfo.shijikaPicFileId, shiziPicFileId = resultInfo.shiziPicFileId, yangbenPicFileId = resultInfo.yangbenPicFileId, reagentCode = resultInfo.reagentCode, cuserId = resultInfo.cuserId;

                  if (reagentCode) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请扫描检测卡二维码或输入检测卡编码'));

                case 3:
                  if ((0, _index3.isScan)(reagentCode)) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请输入正确的检测编号'));

                case 5:
                  if (shiziPicFileId) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请上传拭子图片'));

                case 7:
                  if (yangbenPicFileId) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请上传样本提取液图片'));

                case 9:
                  if (shijikaPicFileId) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请上传试剂卡图片'));

                case 11:
                  if (!(!resultType && resultType != 0)) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请选择检测结果'));

                case 13:
                  if (checkResultPicFleId) {
                    _context.next = 15;
                    break;
                  }

                  return _context.abrupt("return", _index3.toast.info('请上传结果图片'));

                case 15:
                  _taroWeapp2.default.setStorageSync('archive', '');
                  _context.next = 18;
                  return (0, _index4.post)('/checked/record/add', {
                    reagentCode: reagentCode,
                    checkResultPicFleId: checkResultPicFleId,
                    resultType: resultType,
                    shijikaPicFileId: shijikaPicFileId,
                    shiziPicFileId: shiziPicFileId,
                    yangbenPicFileId: yangbenPicFileId,
                    cuserId: cuserId
                  });

                case 18:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  if (data.code === 200) {
                    _index3.toast.success('操作成功');
                    (0, _index3.sleep)(600, function () {
                      return _taroWeapp2.default.navigateBack();
                    });
                  }

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function submit() {
          return _ref2.apply(this, arguments);
        };
      }();
      (0, _taroWeapp.useEffect)(function () {
        var archive = _taroWeapp2.default.getStorageSync('archive');
        if (archive) {
          setResultInfo(_extends({}, JSON.parse(archive)));
        } else {
          setResultInfo({
            cuserId: id,
            userName: userName
          });
        }
      }, []);
      var onUploadClick = function onUploadClick(type) {
        _taroWeapp2.default.chooseImage({
          count: 1,
          sourceType: ['camera'],
          success: function success(src) {
            var tempFilePaths = src.tempFilePaths;
            var tempFilesSize = src.tempFiles[0].size;
            if (tempFilesSize <= 5120000) {
              //图片小于或者等于2M时 可以执行获取图片
              for (var i = 0; i < tempFilePaths.length; i++) {
                _taroWeapp2.default.showLoading({
                  title: '上传中'
                });
                uploadFile(tempFilePaths[i], type);
              }
            } else {
              //图片大于2M，弹出一个提示框
              _taroWeapp2.default.showToast({
                title: '上传图片不能大于5兆!',
                icon: 'none'
              });
            }
          }
        });
      };
      var uploadFile = function uploadFile(imgUrl, type) {
        _taroWeapp2.default.uploadFile({
          header: {
            Authorization: _taroWeapp2.default.getStorageSync('token')
          },
          url: _config.apiUrl + '/oss/file/upload',
          filePath: imgUrl,
          name: 'file',
          formData: {
            requestType: type
          },
          success: function success(res) {
            _taroWeapp2.default.hideLoading();
            var result = JSON.parse(res.data);
            if (result.code === 200) {
              if (type === 5) {
                setResultInfo(function (info) {
                  return _extends({}, info, {
                    shiziPicFileId: result.result.fileId,
                    shiziUrl: result.result.url
                  });
                });
              } else if (type === 6) {
                setResultInfo(function (info) {
                  return _extends({}, info, {
                    shijikaPicFileId: result.result.fileId,
                    shijikaUrl: result.result.url
                  });
                });
              } else if (type === 7) {
                setResultInfo(function (info) {
                  return _extends({}, info, {
                    yangbenPicFileId: result.result.fileId,
                    yangbenUrl: result.result.url
                  });
                });
              } else {
                setResultInfo(function (info) {
                  return _extends({}, info, {
                    checkResultPicFleId: result.result.fileId,
                    resultUrl: result.result.url
                  });
                });
              }
            } else {
              _index3.toast.info(result.msg);
            }
          }
        });
      };
      (0, _taroWeapp.useEffect)(function () {
        _taroWeapp2.default.setStorageSync('archive', JSON.stringify(resultInfo));
      });
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({
        background: '#fff',
        padding: 'calc(20 * 100vw / 375)',
        paddingBottom: 'calc(15 * 100vw / 375)'
      });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ opacity: 0 });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ color: '#000' });

      var anonymousState__temp4 = __webpack_require__(/*! ./img/img_scan.png */ "./src/pages/other/uploadResult/img/img_scan.png");

      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)({ opacity: 0 });
      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)({ color: resultInfo.reagentCode ? '#000' : '#ccc' });

      this.anonymousFunc0 = function (e) {
        return setResultInfo(function (info) {
          return _extends({}, info, {
            reagentCode: e.detail.value.trim()
          });
        });
      };

      var anonymousState__temp7 = __webpack_require__(/*! ./img/img_scan.png */ "./src/pages/other/uploadResult/img/img_scan.png");

      this.anonymousFunc1 = function () {
        _taroWeapp2.default.scanCode({
          success: function success(res) {
            _taroWeapp2.default.showLoading({ title: '识别中...' });
            setResultInfo(function (info) {
              return _extends({}, info, {
                reagentCode: res.result
              });
            });
          },
          complete: function complete() {
            (0, _index3.sleep)(200, function () {
              return _taroWeapp2.default.hideLoading();
            });
          }
        });
      };

      var anonymousState__temp8 = resultInfo.shiziUrl || __webpack_require__(/*! ./img/img_camera.png */ "./src/pages/other/uploadResult/img/img_camera.png");

      this.anonymousFunc2 = function () {
        return onUploadClick(5);
      };

      var anonymousState__temp9 = _index3.sampleImg[0] + (0, _index2.getResizeUrl)({ width: 80, height: 120 });

      this.anonymousFunc3 = function () {
        return (0, _index3.enlarge)(_index3.sampleImg[0]);
      };

      var anonymousState__temp10 = resultInfo.yangbenUrl || __webpack_require__(/*! ./img/img_camera.png */ "./src/pages/other/uploadResult/img/img_camera.png");

      this.anonymousFunc4 = function () {
        return onUploadClick(7);
      };

      var anonymousState__temp11 = _index3.sampleImg[1] + (0, _index2.getResizeUrl)({ width: 120, height: 120 });

      this.anonymousFunc5 = function () {
        return (0, _index3.enlarge)(_index3.sampleImg[1]);
      };

      var anonymousState__temp12 = resultInfo.shijikaUrl || __webpack_require__(/*! ./img/img_camera.png */ "./src/pages/other/uploadResult/img/img_camera.png");

      this.anonymousFunc6 = function () {
        return onUploadClick(6);
      };

      var anonymousState__temp13 = _index3.sampleImg[2] + (0, _index2.getResizeUrl)({ width: 120, height: 120 });

      this.anonymousFunc7 = function () {
        return (0, _index3.enlarge)(_index3.sampleImg[2]);
      };

      var anonymousState__temp14 = (0, _taroWeapp.internal_inline_style)({
        marginTop: 'calc(8 * 100vw / 375)',
        background: '#fff',
        padding: 'calc(20 * 100vw / 375)',
        paddingTop: 'calc(15 * 100vw / 375)'
      });

      this.anonymousFunc8 = function () {
        return setResultInfo(function (info) {
          return _extends({}, info, {
            resultType: 1
          });
        });
      };

      var anonymousState__temp15 = __webpack_require__(/*! ./img/img_1.png */ "./src/pages/other/uploadResult/img/img_1.png");

      var anonymousState__temp16 = resultInfo.resultType === 1 ? __webpack_require__(/*! ./img/img_yse.png */ "./src/pages/other/uploadResult/img/img_yse.png") : __webpack_require__(/*! ./img/img_no.png */ "./src/pages/other/uploadResult/img/img_no.png");

      this.anonymousFunc9 = function () {
        return setResultInfo(function (info) {
          return _extends({}, info, {
            resultType: 2
          });
        });
      };

      var anonymousState__temp17 = __webpack_require__(/*! ./img/img_2.png */ "./src/pages/other/uploadResult/img/img_2.png");

      var anonymousState__temp18 = resultInfo.resultType === 2 ? __webpack_require__(/*! ./img/img_yse.png */ "./src/pages/other/uploadResult/img/img_yse.png") : __webpack_require__(/*! ./img/img_no.png */ "./src/pages/other/uploadResult/img/img_no.png");

      this.anonymousFunc10 = function () {
        return setResultInfo(function (info) {
          return _extends({}, info, {
            resultType: 0
          });
        });
      };

      var anonymousState__temp19 = __webpack_require__(/*! ./img/img_3.png */ "./src/pages/other/uploadResult/img/img_3.png");

      var anonymousState__temp20 = (0, _taroWeapp.internal_inline_style)({ marginRight: 0 });
      var anonymousState__temp21 = resultInfo.resultType === 0 ? __webpack_require__(/*! ./img/img_yse.png */ "./src/pages/other/uploadResult/img/img_yse.png") : __webpack_require__(/*! ./img/img_no.png */ "./src/pages/other/uploadResult/img/img_no.png");

      var anonymousState__temp22 = resultInfo.resultUrl || __webpack_require__(/*! ./img/img_camera.png */ "./src/pages/other/uploadResult/img/img_camera.png");

      this.anonymousFunc11 = function () {
        return onUploadClick(8);
      };

      var anonymousState__temp23 = _index3.sampleImg[3] + (0, _index2.getResizeUrl)({ width: 120, height: 120 });

      this.anonymousFunc12 = function () {
        return (0, _index3.enlarge)(_index3.sampleImg[3]);
      };

      this.anonymousFunc13 = function () {
        return setIsRead(true);
      };

      var anonymousState__temp24 = isRead ? __webpack_require__(/*! ./img/img_yse.png */ "./src/pages/other/uploadResult/img/img_yse.png") : __webpack_require__(/*! ./img/img_no.png */ "./src/pages/other/uploadResult/img/img_no.png");

      this.anonymousFunc14 = function () {
        if (!(0, _index3.requestOnOff)()) {
          return;
        }if (isRead) {
          submit();
        } else {
          _index3.toast.info('请确保您已阅读免责声明');
        }
      };

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
        anonymousState__temp13: anonymousState__temp13,
        anonymousState__temp14: anonymousState__temp14,
        anonymousState__temp15: anonymousState__temp15,
        anonymousState__temp16: anonymousState__temp16,
        anonymousState__temp17: anonymousState__temp17,
        anonymousState__temp18: anonymousState__temp18,
        anonymousState__temp19: anonymousState__temp19,
        anonymousState__temp20: anonymousState__temp20,
        anonymousState__temp21: anonymousState__temp21,
        anonymousState__temp22: anonymousState__temp22,
        anonymousState__temp23: anonymousState__temp23,
        anonymousState__temp24: anonymousState__temp24,
        styles: styles,
        resultInfo: resultInfo,
        userName: userName,
        isNewIphone: _index.isNewIphone
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
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }, {
    key: "anonymousFunc13",
    value: function anonymousFunc13(e) {
      ;
    }
  }, {
    key: "anonymousFunc14",
    value: function anonymousFunc14(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14"], _class.$$componentPath = "pages/other/uploadResult/index", _temp2);


Index.config = { navigationBarTitleText: '结果上传', navigationBarBackgroundColor: '#fff' };
exports.default = (0, _mobx.observer)(Index);

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/uploadResult/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/other/uploadResult/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/other/uploadResult/index.wxml";

/***/ }),

/***/ "./src/modules/@wmeimob/aliyun/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/@wmeimob/aliyun/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AliYun = function () {
  function AliYun() {
    _classCallCheck(this, AliYun);
  }

  _createClass(AliYun, null, [{
    key: "trunc",

    /**
     * 整数
     *
     * @static
     * @memberof AliYun
     */
    value: function trunc(nu) {
      return Math.trunc(nu) * AliYun.multiple;
    }
    /**
     * 获取剪接图片后缀
     *
     * @static
     * @param {{ width: number, height: number }} { width, height }
     * @returns
     * @memberof AliYun
     */

  }, {
    key: "getResizeUrl",
    value: function getResizeUrl(_ref) {
      var width = _ref.width,
          height = _ref.height;

      var url = "?x-oss-process=image/resize,m_fill";
      if (width) {
        url += ",w_" + AliYun.trunc(width);
      }
      if (height) {
        url += ",h_" + AliYun.trunc(height);
      }
      return url;
    }
    /**
     * 获取视频第一帧图片
     *
     * @static
     * @param {{ width: number, height: number }} { width, height }
     * @returns
     * @memberof AliYun
     */

  }, {
    key: "getVideoSnapshotUrl",
    value: function getVideoSnapshotUrl(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;

      var url = "?x-oss-process=video/snapshot,t_7000,f_jpg";
      if (width) {
        url += ",w_" + AliYun.trunc(width);
      }
      if (height) {
        url += ",h_" + AliYun.trunc(height);
      }
      return url;
    }
  }]);

  return AliYun;
}();
/**
 * 几倍图
 *
 * @static
 * @memberof AliYun
 */


AliYun.multiple = 2;
var getResizeUrl = AliYun.getResizeUrl,
    getVideoSnapshotUrl = AliYun.getVideoSnapshotUrl;
exports.getResizeUrl = getResizeUrl;
exports.getVideoSnapshotUrl = getVideoSnapshotUrl;

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_1.png":
/*!****************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_1.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_2.png":
/*!****************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_2.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAADKCAYAAADkZd+oAAAAAXNSR0IArs4c6QAAED5JREFUeF7tnXlwFFUex789k4NckJjlCmSF7KphRmOVAdStUk4pyhNk0a11ldJFWBUQcNEqywuxUKAURRRxFQTEWmVVPIviVNl1XS41moEttzgMQgKEACGBHDO99dpkyECSefO6Y03P+/Z/zLzfm/593u/Dr49JjwFuJEACUQkYUUcA2LVrV1EwGBwD4CoAhYZhnGeaZqpMLMeQQDwRMAyjzjTNo6KsAWz2er3vFhYWlkTbx3ZF2blzZ7FpmnNM0xwWbSK+TwJuJWAYxgbDMB7q16/f9rZyaFUU0zSTAoHAfMMw7jVN0+PxeJCenoG09Awkp6TA602CeI0bCbiNQCgUQjDYiIb6epyqrUFtbQ3Ea4ZhhEzTfNnn800zDKPx7LzOEaWkpCRHtCMAQwzDQFbnbHTJzobH43UbE+4vCUQlEAoFcfzYMVSfOAbTNMX4TeI0o6ioqKplcIQoTZ1krZDE6/WiW/c8pKTyVCQqbQ5wPYH6ujocqjiAYDBoyeLz+Ua07CwRopSWlr4IYJKQpEdePpKSklwPgAmQgCyBxsZGlB8oa5Zlod/vn9wcGxal6cR9CwBPj5692Ulk6XJcQhEQnaX84H6RU8gwjIHNJ/hhUQKBwHpxdatzlxzknJebUMkzGRKIhUDV0UqcOF4lTvA3+Hy+4SLWEqXpPsm34kpWr/w+vKIVC1WOTTgC4irYT2V7rathXq/3UnGfxRKltLR0JoDHMjOzkNu1e8IlzoRIIFYClYcrcPJktQh70u/3P94sykZxpatrtx5Iz8iMdU6OJ4GEI1BbcxKHD5VbV8D8fv/QZlEOAOiZ1/vXSE5OSbikmRAJxEqgoaEeB/b/KMIO+v3+PEuUQCBwWnx3K//8Ap6fxEqU4xOSgDg/Kdu3W5zQ1/l8vk7NHcW6JXl+398mZNJMigRUCOzb8z8rzO/3GxRFhSBjtCBAUbRYZiZplwBFsUuQ8VoQoChaLDOTtEuAotglyHgtCFAULZaZSdolQFHsEmS8FgQoihbLzCTtEqAodgkyXgsCFKWVZd6zezc++fgjbN26BRUV5Th16tQvWgxpaWno3r0HBgwYiOuuvwF9Cwo69PN1y1cFJkVpQa2hoQEvLVyAD1a/b/39QTxs4u+Cbho1GvdNmoLk5GRHd0m3fO3AoyhN9ETRPDhjOnZsb/NxTnY42469rLgYc+c955gsuuVrdwEoShPB5+c/i/ffE09mit9t9M1jMHXaA47soG752oVGUQCIY/S77rwj4nArPz8fEybeg+L+A5CRkWGXc0zxNTU12L5tK15dvAhlZWXhWHEYtmTpctvnLLrlGxP8NgZTFAALF7yAVaveDiMSkixa/BqysrKcYKw8R3V1Ne6ZOD5ClrFjb8WkKfcrzykCdcvXFqymYIoCYNztt2Hv3j1hnrOemo2rBw12gq/tOb74/DM8+sjD4Xn69OmLZStW2ppXt3xtwaIoZ/CNHDEs4hLwp2vW/eKHW20tpjgMu3bkNeG3xaXjNWs32Fp73fK1BYuinME36KrfRbD8fPOXTrB1bA6n98/p+RxLtGmieNw/HnoBiMeFaVl8Tu+f0/NRFKcJxOl8uhWObvk6UXbsKOwoSPRDTYriBAGKQlEk6ogdhaJQFIoiQYCiUBSJMmFHoSgUhaJIEKAoFEWiTNhRKApFoSgSBCgKRZEoE3YUikJRKIoEAYpCUSTKhB2FolAUiiJBgKJQFIkyYUehKBQlUUUp/f57rF+/Fl/v2IEjlUdQW1ODzMxM9O1bgMuvuNJ6FlaXLl0k0v95iG7fptUtX+lCaGegqzqKeBDdvLnPYMP6de3mntW5M2bMeAiDBg+RYqRb4eiWr1QRRBnkGlFOnz6Nv06fiu++K7FSMgwDF198CS686CKkpnbCkSOHsX3bNlRWHgm//8TMWRg8ZGhUTroVjm75Ri0AiQGuEWXhiy9g1Ts/PymlZ14ehASFhf0iUhQPdXtr5Qosef0163XxFJW/v/MPZGa2/zQV3QpHt3wlPIg6xBWiVFRU4A+3jLGeuyUervD60uXo1atXm8nNnfO09exgsU2ZOg1jxoxtF4RuhaNbvlEtkBjgClGWvbEk3CVuv2Mcxt89sd3U9u3diznPzLbGFPfvjz+Pn0BRWhCgKBJmnDXEFaJMn3a/9eREsS1dtgIFBb+JPdN2Is4unA+CQUfntzvZTV5vxBR2/3RXt3zt8hfxrhDl5lE3Wifp4mnua9dvgni0qJObboWjW75O1IorRLlm2GDU19cjNzcX763++dzDyU23wtEtXydqxRWiDB86COKKVm7ur/De6g+dyDtiDt0KR7d8nSgYV4gy6sbrUVV1FCkpKdahl7iH4uSmW+Holq8TteIKUSZPuhcl335j5fvmW29DPG0+2vavf25GbW0tvF4vhg4b3u5w3QpHt3yj1YrM+64QZfEri6wbiWKb+Jd78cfb/tRubocPH8Ytvx9t3Xe55JIiLHz5lZhEsXtVSQZ8LGOcvpzr9Hyx5CIzNh73zxWiiJ9kED9VILbs7GwsW74S2Tk5bTKfO+cZfPLxz+cy4heqxC9VtbfF48K03F+n98/p+WSKP5Yx8bh/rhBFQJ715BNYv26txbugoACPPj7znPspdXV1Vud5Y+kSa1zPnnl4Y/mb6NSpE0VpQSAeC7Ej/2OIRdK2xrpGlBPHj2PK5PuwZ89uKxdxL8UvvhR5wYVI7dTJ+plr8bX7o0crrffT0tMxf/4C9PP5onLSrXB0yzdqAUgMcI0oIpdjx47h6dlP4at/t//7Jb1698Zjj88850uTbfHQrXB0y1fCg6hDXCVKczZff70Dn23ciG++/RpHKyshfpVKfFP4ggsuxKAhQzBixEikpqZGTb55gG6Fo1u+0oXQzkBXiuJE4vF+TNyR+0dRYq8gisI/BebfzEt4Q1EoCkWhKBIEKApFkSgTdhSKQlEoigQBikJRJMqEHYWiUBSKIkGAolAUiTJhR6EoFIWiSBCgKBRFokzYUSgKRaEoEgQoCkWRKBN2FIpCUSiKBAGKQlEkyoQdhaJQFIoiQYCiUBSJMmFHoSgUhaJIEKAoFEWiTNhRKApFoSgSBCgKRZEoE3YUikJRKIoEAYpCUSTKxFUd5eynh0jkZw2J9ixh3Z5Kolu+snXS3jiKwo4S9T8SJwotljniUWRXifK3Vxefw/uHH/6L/3z1lfX65VdcaT0E7+zt7gnt/zhqPC5Myxyc3j+n54tFApmx8bh/rhKlNcgffrgaz86ba731wIwHceONo2TWImJMPC4MRTlDINqhc8wLrhBAUVo59NLtV4HXjLtToXQ6LmTksqURk1MUB1h3REehKA4sjI0pKIoNeG2FUpTYoZ59qMmOEp0hD7146AWKQlGiE6AoFEWiSthRKApFoSgSBHjDkTccJcqEHYWiUBSKIkGAolAUiTJhR6EoFIWiSBCgKBRFokzYUSgKRaEoEgQoCkWRKBN2FIpCUXQQRSLHqEP4NfsvozL6JQfE43q4vqM4sYDxuDAt83J6/5yez4k16Mh8ndg/isJDLx56SZhEUSgKRaEoEgQoCkWRKBN2FIpCUSiKBAGKQlEkyoQdhaJQFIoiQYCiUBSJMmFHoSgUhaJIEKAoFEWiTNhRKApFoSgSBCgKRZEoE3YUikJRKIoEAYpCUSTKhB2FolAUiiJBgKJQFIkyYUehKBSFokgQADByxDCcOnUqPPjTNeuQkZEhF9zBo2pqanDtyGvCn5KWlo41a9fb+lTd8rUFqymYHQXAuNtvw969e8I8Zz01G1cPGuwEX9tzfPH5Z3j0kYfD8/Tp0xfLVqy0Na9u+dqCRVHO4Fu44AWsWvV2+IX8/HwsWvwasrKynGCsPEd1dTXumTgeZWVl4TnGjr0Vk6bcrzynCNQtX1uwKMoZfHt278Zdd96BUCgUIcuEifeguP+AX/wwTBxubd+2Fa8uXhQhicfjwZKly9G3oMDW2uuWry1YFCUS3/Pzn8X7773rBNMOm2P0zWMwddoDjsyvW752ofEcpYlgQ0MDHpwxHTu2b7fLtEPiLysuxtx5zyE5OdmR+XXL1y40itKCoCielxYuwAer3484DLML2U68ONy6adRo3DdpimOSNO+PbvnaWQeK0go9cQz/yccfYevWLaioKI+4dGwHtmxsWloaunfvgQEDBuK662+wfU4S7XN1yzcaj9bepygq1BijHQGKot2SM2EVAhRFhRpjtCNAUbRbciasQoCiqFBjjHYEKIp2S86EVQhQFBVqjNGOAEXRbsmZsAoBiqJCjTHaEaAo2i05E1YhQFFUqDFGOwIURbslZ8IqBCiKCjXGaEeAomi35ExYhQBFUaHGGO0IUBTtlpwJqxCgKCrUGKMdAYqi3ZIzYRUCFEWFGmO0I0BRtFtyJqxCgKKoUGOMdgQoinZLzoRVCFAUFWqM0Y4ARdFuyZmwCgGKokKNMdoRoCjaLTkTViFAUVSoMUY7AhRFuyVnwioEKIoKNcZoR4CiaLfkTFiFAEVRocYY7QhQFO2WnAmrEKAoKtQYox0BiqLdkjNhFQIURYUaY7QjQFG0W3ImrEKAoqhQY4x2BCiKdkvOhFUIUBQVaozRjgBF0W7JmbAKAYqiQo0x2hGgKNotORNWIUBRVKgxRjsCFEW7JWfCKgQoigo1xmhHgKJot+RMWIUARVGhxhjtCFAU7ZacCasQoCgq1BijHQGKot2SM2EVAhRFhRpjtCNAUbRbciasQoCiqFBjjHYEKIp2S86EVQhQFBVqjNGOAEXRbsmZsAqBc0QJBAKnTdNMzT+/AB6PR2VOxpBAQhEIhUIo27cbhmHU+Xy+TobIrrS09ACAnnm9f43k5JSESpjJkIAKgYaGehzY/6MIPej3+/OaRdkIYEjXbj2QnpGpMi9jSCChCNTWnMThQ+Uip01+v39osygzATyWmZmF3K7dEyphJkMCKgQqD1fg5MlqEfqk3+9/3BJl165dRcFg8FtxftIr/3x4PF6VuRlDAglBIBQK4qeyfRDnKV6v99LCwsISSxSxBQKB9aZpDuvcJQc55+UmRMJMggRUCFQdrcSJ41XiRH6Dz+cbLuYIi7Jz585i0zS3APD06NkbKampKp/BGBJwNYH6ujqUH9wvcggZhjGwX79+2yNEEf8oLS19EcAkr9eLHnn5SEpKcnXS3HkSiIVAY2Mjyg+UIRgMirCFfr9/cnN8uKOIF0zTTAoEAmvFFTAhS7fueewssZDmWNcSEJ3kUMWBZkk2+Xy+EYZhNLYqinixpKQkx+v1vitkMQwDWZ2z0SU7hzciXVsC3PH2CIgT9uPHqlB94phoFGLopmAwOKaoqKiqZVxER2l+o6mzzDcM417TND3ialh6egbS0jOQnJICrzeJ4rD+XElAiBEMNqKhvh6namtQW1tjXd0yDCNkmubLPp9vWstO0mZHaZl90wn+HHE1zJVUuNMkIEFAXN0yDOOh5hP31kJa7ShnD2y6zzIGwFUACg3DOE98N0xiHziEBOKKgPjulmmaR8XtQwCbxWmGuE8SbSelRIk2Cd8ngUQn8H9MkIqOc6Qh/wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_3.png":
/*!****************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_3.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_camera.png":
/*!*********************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_camera.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_no.png":
/*!*****************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_no.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAsJJREFUWEfNlz1oU1EUx/8nfU0iCSkiYhcXMUIw1sJ9jakoFgeXTmJFxVWdXayD4CA4tC6ufqyiYMUpi4NUFI3hXqg1EjDi4lIVkYYEX+LrO3LqS6mxNaEhfd7lDe+ee373fN1zCB2uYrEYr9fr4wCOMvN+ALuIKCHizFwB8JGI3gB4GolEcul0utrJ0dRukzFmNzNfBnAGQKzdfv9/DcB9IppSSn34l8y6AOVyOVKpVK4BuMjMYSLyADwHkGPmV67rluPx+Hc5vFqtbrUsK0lEowDESoeZOUREDQA3E4nE1WQyWV8LZE2AQqEwGAqFHgPIioUBPLIs68rw8PD7TiwwNze3x3Xd6wBOABAdec/zjmcymYVW+b8A5ufn9zUajRyAnb5fzyql8p0obt1jjMky8z2JFwCfwuHw+NDQ0NvV+/4A8G9e8JXPxmKxiVQq9W0jypsypVJpW61WmwEwJhCe52VWW2IFQHy+uLg465tdvsds2/7ZjfKmrNa6H8ATHyI/MDAw1oyJFQBjzBQzT4rZY7FYptubt4L7lhDrSvpOK6Uks5YDBJJqAN4xcz8RHdyoz9tZy4+Jl0Qklt0rKboMoLW+A+AcgBnbtk+2O6ib/1rrhwAmANy1bfs8SYVzHGeBiLb09fWlOk21jUJIii4tLZWY+Uc0Gh0kY8wpZn5ARM+UUhKpPV/GmFlmPkJEpwXgFjNfkAAcGRm50XPtv2PuEjNPE9Ft0lpLkTkg5dO27RebAaC1PuSX9dcC8AXAdtd1B7PZ7OfNAMjn8zssy5Ky/FVc4DBzJBqNRtLptDwePV/FYjHsOE6diOrBAwTugsCDsJmGRDSplNr8NAy8EAVeigN/jP6L59iHCK4hEYDAWzKBCLQpbT4AgbblTYhAB5MmxHqjmed5OSJaczRj5tFQKNT9aLb6PQ5sOG1tCno1nv8Cp5sKfaeWm7UAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_scan.png":
/*!*******************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_scan.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAZlJREFUWEftljtIXEEUhr8zrg/EqKBFXCwEwWIrLSSVYd2dKS3EQhBCKqs0PrYSCxsrVyLY2QabtAGL3SksrASriCLaiIWgwRt8pBD0yAWr+ODCXq4W99bnnP+bb5iZK/l8viWTySwDY0AryXx/gPUgCObEWrsGTCaT+yRlIQQ4BzqBaxHZSwJEVfuBBuB3CHAL1IvIdrVa/ZQEgHPuRFW7geMUIDWQGggN/AXagE3v/XASx9BaewD0AfvinPuiqhPAovd+KwmAQqEwYoz5BqxKEoGvZbxPgPaZmwHq5HOcdu4xG5dLTYf/z3zWQHvp35Rw/z1OAMGMX5Sbf0YCaCtdW4NUQOPZIuUOqe8Pyo27kQDCoo7Zm0E10hOHBdW7/aD84Ul4ODueFdZA+fYAzrkZVf1qjJmvVCq/alhM5NZisRjmTQPL4VV8BbQAW977ochTaii01h4BvcBh+hqmBlID78LAKfARuBWRsxqOd+RWVe0C6lR1JzSwBJQid8dYqKqzksvlGrLZ7Bww+vhzGmPEi6MugB/e+5UH62T8bPOkXC4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/other/uploadResult/img/img_yse.png":
/*!******************************************************!*\
  !*** ./src/pages/other/uploadResult/img/img_yse.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAj9JREFUWEfNVz1ME2EYfp720kqvYs+EhEEX40aMTsJoXImDkxpXZcNo0rObRrdaE41MoqvRzcGwGsfipDFsxgUHIkOx3hXatH3MXW0t0HIH1nx8wy33vO/7fO/3/hIxz8R9ZVu1zVlBFyGdFXAK4HhHXFUC30B+Jvg+mRlbWn9AL45qRoHG7/w8nbCsAoVrgOwofOc/fRGv281msfrk2Ne9ZIYTmFfaOeI/lHibUCqe4e0ogQ1STytb9j0ssD5Ix0ACtutNptp6C3LmIIZ3yUjlRoKX/VJ2bee/XQScQv0MWs0lQCdHYrynhKtIWrOVYvpLv95tBMKbix9Hb7xrkqsN6ny/J/4SCN485X0YmduHuU8qVxrZC92Y6BFwXK8I4e5o3T5EG/GoUsoWwnwJPmGqJa2Vg0b7fkkH2dFuNaeCFA0J5Fz/BaUb+1X0L3iRLzdK9k0GFa7p19biFhmBdRKLLfFV2h5bCUjU/c2pJHVdwhyhdDxi9C07M8njbu2K1H4TTwjfRVzaKGU/DcLnXO8cxXeATsTRRyau0nH955DmogSCm4OaGWa8Kx+QgFiO5QlykU7eKwOYjiIAcqFSsm9F4gA4rv8M0nwM7DJzee8HgYkocAuJmerjzHIULsyqfG06iXZwsT2PgHXm8v5WHHdZtn00bovtBLb/K5oA64eBgOEnMB6ExtPQeCEyXoqNN6ND0Y4DEkYHkrBimR7JAg5mh9I/hdvoWN5tHkYXk14HM7ma9bdRc8vpjmb+v9bz34seiWayDsykAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/other/uploadResult/index.module.less":
/*!********************************************************!*\
  !*** ./src/pages/other/uploadResult/index.module.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"upload_page":"index-module__upload_page___3Tulm","required":"index-module__required___2N7Zk","scan":"index-module__scan___16P7U","key_left":"index-module__key_left___3k02m","value_right":"index-module__value_right___2okRE","place":"index-module__place___5Htko","serial":"index-module__serial___9bBAd","process_title":"index-module__process_title___3G8_0","img_title":"index-module__img_title___36EBw","img_upload":"index-module__img_upload___WDg1k","wait":"index-module__wait___1Co-q","img_choose":"index-module__img_choose___GF4O0","result_box":"index-module__result_box___3BJRp","read":"index-module__read___3Dte6","btn":"index-module__btn___1uruy"};

/***/ }),

/***/ "./src/pages/other/uploadResult/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/other/uploadResult/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/other/uploadResult/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/other/uploadResult/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/other/uploadResult/index.tsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pages/other/uploadResult/index.tsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/uploadResult/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/other/uploadResult/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pages/other/uploadResult/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/basketball/Desktop/外快/lizi/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/other/uploadResult/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_basketball_Desktop_lizi_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/other/uploadResult/index.tsx","runtime","taro","vendors","common"]]]);