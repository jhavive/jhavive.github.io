(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],Array(31).concat([
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(32);

var _Table = __webpack_require__(33);

var _api = __webpack_require__(45);

var _NewWarehouse = __webpack_require__(46);

var _NewWarehouse2 = _interopRequireDefault(_NewWarehouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Warehouses = function (_React$Component) {
    _inherits(Warehouses, _React$Component);

    function Warehouses(props) {
        _classCallCheck(this, Warehouses);

        var _this = _possibleConstructorReturn(this, (Warehouses.__proto__ || Object.getPrototypeOf(Warehouses)).call(this, props));

        _this.state = {
            warehouses: []
        };

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {
            (0, _api.get)('http://localhost:8000/warehouses/').then(function (response) {
                console.log(JSON.parse(response));
                _this.setState({
                    warehouses: JSON.parse(response)
                });
            });
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return true;
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            return true;
        };

        _this.componentWillUnmount = function () {};

        _this.getRow = function () {
            for (var i = 0; i < _this.state.warehouses.length; i++) {
                var item = _this.state.warehouses[i];
                console.log(item);
                return _react2.default.createElement(
                    _Table.TR,
                    {
                        accordian: true,
                        accordianContent: _react2.default.createElement(
                            'div',
                            { className: 'accordianBody' },
                            _react2.default.createElement(
                                'div',
                                { style: { marginBottom: '14px' } },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Customer Id '
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    123
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { marginBottom: '14px' } },
                                _react2.default.createElement(
                                    'span',
                                    {
                                        className: 'button'
                                    },
                                    'Show All'
                                )
                            )
                        )
                    },
                    _react2.default.createElement(
                        _Table.TD,
                        null,
                        item.fields.name
                    ),
                    _react2.default.createElement(
                        _Table.TD,
                        null,
                        item.fields.location
                    )
                );
            }
        };

        _this.render = function () {
            return _react2.default.createElement(
                'section',
                { className: 'warehouse-component' },
                _react2.default.createElement(_NewWarehouse2.default, null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _Table.Table,
                    null,
                    _react2.default.createElement(
                        _Table.TableHeader,
                        null,
                        _react2.default.createElement(
                            _Table.TR,
                            null,
                            _react2.default.createElement(
                                _Table.TH,
                                null,
                                'One'
                            ),
                            _react2.default.createElement(
                                _Table.TH,
                                { showMobile: true },
                                'Two'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Table.TableBody,
                        null,
                        _this.state.warehouses.length && _this.getRow()
                    )
                )
            );
        };

        return _this;
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    /* render is called to paint the dom */


    return Warehouses;
}(_react2.default.Component);

exports.default = Warehouses;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TH = exports.TR = exports.TD = exports.TableBody = exports.TableHeader = exports.Table = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

var _TableHeader = __webpack_require__(35);

var _TableBody = __webpack_require__(37);

var _TD = __webpack_require__(39);

var _TR = __webpack_require__(41);

var _TH = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(props) {
  return _react2.default.createElement(
    'table',
    { className: 'table-container' },
    props.children
  );
};

exports.Table = Table;
exports.TableHeader = _TableHeader.TableHeader;
exports.TableBody = _TableBody.TableBody;
exports.TD = _TD.TD;
exports.TR = _TR.TR;
exports.TH = _TH.TH;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeader = exports.TableHeader = function TableHeader(props) {
  return (
    // <div className="table-header-container">
    _react2.default.createElement(
      'thead',
      _extends({ className: 'table-header-container' }, props),
      props.children
    )
    // </div>

  );
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = exports.TableBody = function TableBody(props) {
  return _react2.default.createElement(
    'tbody',
    props,
    props.children
  );
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TD = exports.TD = function TD(props) {
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if (props.showMobile) {
      return _react2.default.createElement(
        'td',
        _extends({ className: 'td-container showMobile' }, props),
        props.children
      );
    } else {
      return null;
    }
  } else {
    return _react2.default.createElement(
      'td',
      _extends({ className: 'td-container' }, props),
      props.children
    );
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TR = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TR = exports.TR = function (_React$Component) {
  _inherits(TR, _React$Component);

  function TR() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TR);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TR.__proto__ || Object.getPrototypeOf(TR)).call.apply(_ref, [this].concat(args))), _this), _this.openAccordian = function (event) {
      var element = event.currentTarget;
      if (element.className.includes('accordian-open')) {
        element.classList.remove('accordian-open');
        element.classList.add('accordian-closed');
      } else if (element.className.includes('accordian-closed')) {
        element.classList.remove('accordian-closed');
        element.classList.add('accordian-open');
      } else {
        element.classList.add('accordian-open');
      }
    }, _this.render = function () {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'tr',
          _extends({ className: 'tr-container' }, _this.props, { onClick: _this.props.accordian ? function (event) {
              return _this.openAccordian(event);
            } : null }),
          _this.props.children
        ),
        _this.props.accordian && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && _react2.default.createElement(
          'tr',
          { className: 'accordian' },
          _react2.default.createElement(
            'td',
            { colspan: '100%' },
            _this.props.accordianContent
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TR;
}(_react2.default.Component);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TH = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TH = exports.TH = function TH(props) {
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if (props.showMobile) {
      return _react2.default.createElement(
        'th',
        _extends({ className: 'th-container showMobile' }, props),
        props.children
      );
    } else {
      return null;
    }
  } else {
    return _react2.default.createElement(
      'th',
      _extends({ className: 'th-container' }, props),
      props.children
    );
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import { showSnackBar, showLoginTenant } from "../actions";
// import {  showLoginTenant } from '../'

var jsonHandling = exports.jsonHandling = function jsonHandling(response) {
    if (response.status / 100 !== 2 && response.status / 100 !== 3) {
        throw Error(response.statusText);
    }
    try {
        return response.json();
    } catch (e) {
        response;
    }
};

var createConfig = function createConfig(type) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var config = {
        method: type,
        headers: headers
    };
    if (type === 'post' || type === 'put') {
        config.body = JSON.stringify(body);
        if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return config;
};

var getHeader = function getHeader() {
    return { "Authorization": 'Token ' + window.localStorage.getItem('token') };
};

var request = function request(url, config) {
    return fetch(url, config).then(function (response) {
        switch (response.status) {
            case 401:
            case 403:
                break;
            case 400:
                throw new Error(response.status);
            case 500:
                // dispatch(showSnackBar("OOPS!! Some error occured"))
                throw new Error(response.status);
            default:
                return response.json();
        }
    }).catch(function (e) {
        console.log(e);
        throw new Error(0);
    });
};

var login = exports.login = function login() {
    return request(url, createConfig(post, header));
};

var get = exports.get = function get(url) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return request(url, createConfig('get', headers));
};

var post = exports.post = function post(url, body) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return request(url, createConfig('post', headers, body));
};

var putRequest = exports.putRequest = function putRequest(url, body) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return request(url, createConfig('put', headers, body));
};

var deleteRequest = exports.deleteRequest = function deleteRequest(url) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return request(url, createConfig('delete', headers));
};

var adminGet = exports.adminGet = function adminGet(url) {
    return request(url, createConfig('get', getHeader()));
};

var adminPost = exports.adminPost = function adminPost(url, body) {
    return request(url, createConfig('post', getHeader(), body));
};

var adminPut = exports.adminPut = function adminPut(url, body) {
    return request(url, createConfig('put', getHeader(), body));
};

var adminDelete = exports.adminDelete = function adminDelete(url) {
    return request(url, createConfig('delete', getHeader()));
};

// export const logoutAdmin = () => {
//   let auth = window.gapi.auth2.getAuthInstance();
//   auth.signOut().then(function () {
//     auth.disconnect();
//     window.location.reload()
//   });
// }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(47);

var _Buttons = __webpack_require__(48);

var _Modal = __webpack_require__(50);

var _Modal2 = _interopRequireDefault(_Modal);

var _Input = __webpack_require__(52);

var _Input2 = _interopRequireDefault(_Input);

var _Loader = __webpack_require__(54);

var _Success = __webpack_require__(55);

var _Failure = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewWarehouse = function (_React$Component) {
    _inherits(NewWarehouse, _React$Component);

    function NewWarehouse(props) {
        _classCallCheck(this, NewWarehouse);

        var _this = _possibleConstructorReturn(this, (NewWarehouse.__proto__ || Object.getPrototypeOf(NewWarehouse)).call(this, props));

        _this.state = {
            openModal: false,
            modalState: true
        };

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {};

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return true;
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            return true;
        };

        _this.componentWillUnmount = function () {};

        _this.openWarehouseModal = function (e) {
            _this.setState({
                openModal: true
            });
        };

        _this.closeWarehouseModal = function (e) {
            console.log("hello");
            _this.setState({
                openModal: false
            });
        };

        _this.render = function () {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'top' },
                    _react2.default.createElement(
                        _Buttons.Button,
                        { type: 'dark', onClick: function onClick(e) {
                                _this.openWarehouseModal(e);
                            } },
                        'New WareHouse'
                    )
                ),
                _react2.default.createElement(
                    _Modal2.default,
                    {
                        open: _this.state.openModal,
                        closeModal: _this.closeWarehouseModal
                    },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'modal-header' },
                        _react2.default.createElement(
                            'span',
                            { 'class': 'close', onClick: function onClick(e) {
                                    _this.closeModal(e);
                                } },
                            '\xD7'
                        ),
                        _react2.default.createElement(
                            'h2',
                            null,
                            'New Warehouse'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'modal-body' },
                        _react2.default.createElement(_Success.Success, {
                            height: '500',
                            width: '500'
                        }),
                        _react2.default.createElement(_Failure.Failure, {
                            height: '500',
                            width: '500' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'modal-footer' },
                        _react2.default.createElement(
                            _Buttons.Button,
                            { type: 'dark', onClick: function onClick(e) {
                                    _this.submitForm(e);
                                } },
                            'Submit'
                        )
                    )
                )
            );
        };

        return _this;
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    /* render is called to paint the dom */


    return NewWarehouse;
}(_react2.default.Component);

exports.default = NewWarehouse;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = function Button(props) {
    return _react2.default.createElement(
        'button',
        _extends({ className: 'custom-button ' + props.type }, props),
        props.children
    );
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            open: false,
            type: ''
        };

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {

            var modal = document.getElementById("myModal");

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            _this.setState({
                open: _this.props.open
            });
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return true;
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            return true;
        };

        _this.componentWillUnmount = function () {};

        _this.closeModal = function (e) {
            // let span = e.target;
            // let modal = span.parentNode.parentNode.parentNode
            // // When the user clicks on <span> (x), close the modal
            // span.onclick = function() {
            //     modal.style.display = "none";
            // }
            _this.props.closeModal();
        };

        _this.render = function () {
            if (_this.props.open) {
                return (
                    // The Modal
                    _react2.default.createElement(
                        'div',
                        { id: 'myModal', 'class': 'modal' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'modal-content' },
                            _this.props.children
                        )
                    )
                );
            } else {
                return null;
            }
        };

        return _this;
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    /* render is called to paint the dom */


    return Modal;
}(_react2.default.Component);

exports.default = Modal;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @param {disabled} boolean -  Default value is none
 * @param {max} number -  Default value is none
 * @param {min} number -  Default value is none
 * @param {size} number -  Default value is none
 * @param {step} number -  Default value is none
 * @param {maxLength} number -  Default value is none
 * @param {pattern} string -  Default value is none
 * @param {readonly} string -  Default value is none
 * @param {required} boolean -  Default value is none
 * @param {value} string -  Default value is none
 * @param {type} string -  Default value is none
 */

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value || ''
    }, _this.onBlur = function (value) {
      _this.setState({ value: value });
      _this.props.onChange(value);
    }, _this.onChange = function (e) {
      var value = e.target.value;
      var type = _this.props.type;

      if (value === '') {
        _this.onBlur(value);
        return;
      }
      switch (type) {
        case 'number':
        case 'otp':
          _this.isNumber(value) && parseInt(value) >= 0 && _this.onBlur(value);
          return;
        case 'phone':
          _this.isNumber(value) && parseInt(value) >= 1 && _this.onBlur(value);
          return;
        default:
          _this.onBlur(value);
      }
    }, _this.isNumber = function (val) {
      return !isNaN(val);
    }, _this.setType = function (type) {
      switch (type) {
        case 'text':
        case 'name':
        case 'number':
        case 'phone':
          return 'text';
        case 'date':
          return 'date';
        default:
          return 'text';
      }
    }, _this.maxLength = function (type) {
      switch (type) {
        case 'phone':
          return 10;
        default:
          return '';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          max = _props.max,
          min = _props.min,
          maxLength = _props.maxLength,
          pattern = _props.pattern,
          readonly = _props.readonly,
          required = _props.required,
          size = _props.size,
          step = _props.step,
          value = _props.value,
          type = _props.type,
          placeholder = _props.placeholder;

      return _react2.default.createElement(
        'div',
        { className: 'inputBox' },
        _react2.default.createElement('input', {
          type: this.setType(type),
          disabled: disabled,
          max: max,
          maxLength: this.maxLength(type),
          min: min,
          pattern: pattern,
          readOnly: readonly,
          required: required,
          size: size,
          step: step,
          value: this.state.value,
          onChange: function onChange(e) {
            return _this2.onChange(e);
          }
          // onBlur={this.onBlur}
          , placeholder: placeholder
        })
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

exports.default = Input;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loader = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = exports.Loader = function Loader(props) {
    return _react2.default.createElement(
        "div",
        { "class": "loader loader--style7", title: "6" },
        _react2.default.createElement(
            "svg",
            { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px",
                width: props.width * 5, height: props.height, viewBox: "0 0 " + props.height + " " + props.width * 4 },
            _react2.default.createElement(
                "rect",
                { x: "0", y: "0", width: props.width, height: props.height - 4, fill: props.fill || "#fff" },
                _react2.default.createElement("animate", { attributeName: "opacity", attributeType: "XML",
                    values: "1; .2; 1",
                    begin: "0s", dur: "0.6s", repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: props.width * 1 + 4, y: "0", width: props.width, height: props.height - 4, fill: props.fill || "#fff" },
                _react2.default.createElement("animate", { attributeName: "opacity", attributeType: "XML",
                    values: "1; .2; 1",
                    begin: "0.2s", dur: "0.6s", repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: props.width * 2 + 8, y: "0", width: props.width, height: props.height - 4, fill: props.fill || "#fff" },
                _react2.default.createElement("animate", { attributeName: "opacity", attributeType: "XML",
                    values: "1; .2; 1",
                    begin: "0.4s", dur: "0.6s", repeatCount: "indefinite" })
            )
        )
    );
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Success = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Success = exports.Success = function Success(props) {
    return _react2.default.createElement(
        'svg',
        { id: 'successAnimation', 'class': 'animated', xmlns: 'http://www.w3.org/2000/svg', width: (props.width || '70') + 'px', height: (props.height || '70') + 'px', viewBox: '0 0 70 70' },
        _react2.default.createElement('path', { id: 'successAnimationResult', fill: '#D8D8D8', d: 'M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z' }),
        _react2.default.createElement('circle', { id: 'successAnimationCircle', cx: props.width / 2, cy: props.width / 2, r: props.width / 2, stroke: '#979797', 'stroke-width': '2', 'stroke-linecap': 'round', fill: 'transparent' }),
        _react2.default.createElement('polyline', { id: 'successAnimationCheck', stroke: '#979797', 'stroke-width': '2', points: '23 34 34 43 47 27', fill: 'transparent' })
    )
    // <div className="success-container" style={{ width: `${ props.width || '40px' }`, height: `${ props.width || '40px' }`}}>
    //     <div class="o-circle c-container__circle o-circle__sign--success"  style={{ width: `${ props.width || '40px' }`, height: `${ props.width || '40px' }`}}>
    //         <div class="o-circle__sign"  style={{ width:"3px",height:`${ (props.width * 0.7) || '27px' }`}}></div>  
    //     </div>
    // </div>

    // <div className="success-container" style={{width:  `${ props.width || '40' }px`, height:  `${ props.width || '40' }px`}}>
    //     <div class="o-circle c-container__circle o-circle__sign--success"  style={{width: `${ props.width || '40' }px`, height: `${ props.width || '40' }px`}}>
    //         <div class="o-circle__sign"   style={{width: '4px', height: `${ props.width * 0.65 || '25' }px`}}></div>  
    //     </div>
    // </div>

    ;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Failure = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Failure = exports.Failure = function Failure(props) {
    return _react2.default.createElement(
        'div',
        { className: 'failure-container' },
        _react2.default.createElement(
            'div',
            { 'class': 'o-circle c-container__circle o-circle__sign--failure', style: { width: (props.width || '40') + 'px', height: (props.width || '40') + 'px' } },
            _react2.default.createElement('div', { 'class': 'o-circle__sign', style: { width: "5px", height: (props.width * 0.7 || '27') + 'px' } })
        )
    );
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
])]);