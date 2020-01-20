(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _reactLoadable = __webpack_require__(8);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

__webpack_require__(24);

var _navbar = __webpack_require__(25);

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = __webpack_require__(29);

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadableWarehousesPage = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, 31, 7));
  },
  render: function render(loaded, props) {
    var Component = loaded.default;
    return _react2.default.createElement(Component, props);
  },
  // loading: () => <Loader />
  loading: function loading() {
    return _react2.default.createElement('div', { className: 'padding-loader' });
  }
});

var LoadableProductsPage = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.t.bind(null, 59, 7));
  },
  render: function render(loaded, props) {
    var Component = loaded.default;
    return _react2.default.createElement(Component, props);
  },
  // loading: () => <Loader />
  loading: function loading() {
    return _react2.default.createElement('div', { className: 'padding-loader' });
  }
});

var LoadableOrdersPage = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.t.bind(null, 61, 7));
  },
  render: function render(loaded, props) {
    var Component = loaded.default;
    return _react2.default.createElement(Component, props);
  },
  // loading: () => <Loader />
  loading: function loading() {
    return _react2.default.createElement('div', { className: 'padding-loader' });
  }
});

var LoadablePurchaseOrdersPage = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.t.bind(null, 63, 7));
  },
  render: function render(loaded, props) {
    var Component = loaded.default;
    return _react2.default.createElement(Component, props);
  },
  // loading: () => <Loader />
  loading: function loading() {
    return _react2.default.createElement('div', { className: 'padding-loader' });
  }
});

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.componentWillMount = function () {};

    _this.componentDidMount = function () {};

    _this.shouldComponentUpdate = function (nextProps, nextState) {};

    _this.componentDidUpdate = function (prevProps, prevState) {};

    _this.componentWillUnmount = function () {};

    _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'home-container' },
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          { history: _reactRouterDom.browserHistory },
          _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_navbar2.default, null),
            _react2.default.createElement(_sidebar2.default, null),
            _react2.default.createElement(
              'div',
              { className: 'body' },
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/warehouses', component: LoadableWarehousesPage }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/products', component: LoadableProductsPage }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/orders', component: LoadableOrdersPage }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/purchase-orders', component: LoadablePurchaseOrdersPage })
              )
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


  return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactFeather = __webpack_require__(22);

var _SearchBar = __webpack_require__(27);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {};

        _this.shouldComponentUpdate = function (nextProps, nextState) {};

        _this.componentDidUpdate = function (prevProps, prevState) {};

        _this.componentWillUnmount = function () {};

        _this.render = function () {
            return _react2.default.createElement(
                'header',
                { 'class': 'navbar-component' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'navbar-collapse' },
                    _react2.default.createElement(
                        'ul',
                        { 'class': 'navbar-nav left' },
                        _react2.default.createElement(
                            'li',
                            { 'class': 'nav-item' },
                            _react2.default.createElement(_SearchBar2.default, null)
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { 'class': 'navbar-nav' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'div',
                                { 'class': 'dropdown' },
                                _react2.default.createElement(
                                    'a',
                                    { 'class': 'dropdown-toggle', href: 'javascript:', 'data-toggle': 'dropdown' },
                                    _react2.default.createElement(_reactFeather.Bell, { size: 18 }),
                                    _react2.default.createElement(_reactFeather.ChevronDown, { size: 14 })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'dropdown-menu dropdown-menu-right notification' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'noti-head' },
                                        _react2.default.createElement(
                                            'h6',
                                            { 'class': 'd-inline-block m-b-0' },
                                            'Notifications'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'float-right' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:', 'class': 'm-r-10' },
                                                'mark as read'
                                            ),
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:' },
                                                'clear all'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { 'class': 'noti-body' },
                                        _react2.default.createElement(
                                            'li',
                                            { 'class': 'n-title' },
                                            _react2.default.createElement(
                                                'p',
                                                { 'class': 'm-b-0' },
                                                'NEW'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { 'class': 'notification' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'media' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { 'class': 'media-body' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        _react2.default.createElement(
                                                            'strong',
                                                            null,
                                                            'John Doe'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { 'class': 'n-time text-muted' },
                                                            _react2.default.createElement('i', { 'class': 'icon feather icon-clock m-r-10' }),
                                                            '30 min'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'New ticket Added'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { 'class': 'n-title' },
                                            _react2.default.createElement(
                                                'p',
                                                { 'class': 'm-b-0' },
                                                'EARLIER'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { 'class': 'notification' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'media' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { 'class': 'media-body' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        _react2.default.createElement(
                                                            'strong',
                                                            null,
                                                            'Joseph William'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { 'class': 'n-time text-muted' },
                                                            _react2.default.createElement('i', { 'class': 'icon feather icon-clock m-r-10' }),
                                                            '30 min'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Prchace New Theme and make payment'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { 'class': 'notification' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'media' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { 'class': 'media-body' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        _react2.default.createElement(
                                                            'strong',
                                                            null,
                                                            'Sara Soudein'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { 'class': 'n-time text-muted' },
                                                            _react2.default.createElement('i', { 'class': 'icon feather icon-clock m-r-10' }),
                                                            '30 min'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'currently login'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'noti-footer' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:' },
                                            'show all'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'div',
                                { 'class': 'dropdown drp-user' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:', 'class': 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                    _react2.default.createElement(_reactFeather.Settings, { size: 18 }),
                                    _react2.default.createElement(_reactFeather.ChevronDown, { size: 14 })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'dropdown-menu dropdown-menu-right profile-notification' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'pro-head' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'John Doe'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'auth-signin.html', 'class': 'dud-logout', title: 'Logout' },
                                            _react2.default.createElement('i', { 'class': 'feather icon-log-out' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { 'class': 'pro-body' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:', 'class': 'dropdown-item' },
                                                _react2.default.createElement('i', { 'class': 'feather icon-settings' }),
                                                ' Settings'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:', 'class': 'dropdown-item' },
                                                _react2.default.createElement('i', { 'class': 'feather icon-user' }),
                                                ' Profile'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'message.html', 'class': 'dropdown-item' },
                                                _react2.default.createElement('i', { 'class': 'feather icon-mail' }),
                                                ' My Messages'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'auth-signin.html', 'class': 'dropdown-item' },
                                                _react2.default.createElement('i', { 'class': 'feather icon-lock' }),
                                                ' Lock Screen'
                                            )
                                        )
                                    )
                                )
                            )
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


    return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {};

        _this.shouldComponentUpdate = function (nextProps, nextState) {};

        _this.componentDidUpdate = function (prevProps, prevState) {};

        _this.componentWillUnmount = function () {};

        _this.openSearch = function (event) {
            //     $('.search').addClass('active');
            // //                 $('.line-1').css({
            // //                         'transform': 'rotate(45deg)',
            // //                         'top': '0px',
            // //                         'left': '0px'
            // //                 });
            // //                 $('.line-2').css({
            // //                         'height':'40px',
            // //                         'opacity':'1'
            // //                 });
            console.log(event.target);
            event.target.classList.add("active");
            var parentNode = event.target.parentNode;
            parentNode.getElementsByClassName('line-1')[0].style.opacity = '0';
            // parentNode.getElementsByClassName('line-1')[0].style.top = '0px'
            // parentNode.getElementsByClassName('line-1')[0].style.left = '0px'
        };

        _this.closeSearch = function (event) {
            // $('.line-1, .line-2').click(function() {
            //                 $('.search').removeClass('active').val('');
            //                 $('.line-1').css({
            //                         'transform': 'rotate(-45deg)',
            //                         'top': '-20px',
            //                         'left': '45px'
            //                 });
            //                 $('.line-2').css({
            //                         'height':'0px',
            //                         'opacity':'0'
            //                 });

            //         });

            console.log(event.target);
            event.target.classList.remove("active");
            var parentNode = event.target.parentNode;
            parentNode.getElementsByClassName('line-1')[0].style.opacity = '1';
        };

        _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'searchbar-container' },
                _react2.default.createElement(
                    'main',
                    null,
                    _react2.default.createElement('input', { type: 'text', 'class': 'search', onClick: function onClick(e) {
                            return _this.openSearch(e);
                        }, onBlur: function onBlur(e) {
                            return _this.closeSearch(e);
                        }, placeholder: 'Search' }),
                    _react2.default.createElement('div', { 'class': 'line-1' })
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


    return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _reactFeather = __webpack_require__(22);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {
            var els = document.getElementsByClassName('pcoded-hasmenu');

            var _loop = function _loop(i) {
                var element = els[i];
                element.addEventListener("click", function (e) {
                    console.log(e.target.parentNode);
                    if (e.target.tagName !== 'a' && e.target.parentNode.className !== 'submenu-item') {

                        element.classList.toggle("pcoded-trigger");
                        // element.getElementsByClassName('pcoded-submenu')[0].classList.toggle('active')
                        var a = element.getElementsByClassName('pcoded-submenu');
                        var b = element.getElementsByClassName('pcoded-submenu-active');
                        if (a.length) {
                            console.log(a.length);
                            a[0].className = 'pcoded-submenu-active';
                        } else {
                            console.log(b.length);
                            b[0].className = 'pcoded-submenu';
                        }
                    }
                }, true);
            };

            for (var i = 0; i < els.length; i++) {
                _loop(i);
            }
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {};

        _this.componentDidUpdate = function (prevProps, prevState) {};

        _this.componentWillUnmount = function () {};

        _this.render = function () {
            return _react2.default.createElement(
                'nav',
                { 'class': 'sidebar-container' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'navbar-wrapper' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'navbar-brand header-logo' },
                        _react2.default.createElement(
                            'a',
                            { href: 'index.html', 'class': 'b-brand' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'b-bg' },
                                _react2.default.createElement('i', { 'class': 'feather icon-trending-up' })
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { 'class': 'mobile-menu', id: 'mobile-collapse', href: 'javascript:' },
                            _react2.default.createElement('span', null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'navbar-content scroll-div' },
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'ul',
                            { 'class': 'nav pcoded-inner-navbar' },
                            _react2.default.createElement(
                                'li',
                                { 'data-username': 'basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds', 'class': 'nav-item pcoded-hasmenu' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:', 'class': 'nav-link ' },
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'pcoded-micon' },
                                        _react2.default.createElement(_reactFeather.Users, null)
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'pcoded-mtext' },
                                        'Customers'
                                    )
                                ),
                                _react2.default.createElement('ul', { 'class': 'pcoded-submenu' })
                            ),
                            _react2.default.createElement(
                                'li',
                                { 'data-username': 'basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds', 'class': 'nav-item pcoded-hasmenu' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:', 'class': 'nav-link ' },
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'pcoded-micon' },
                                        _react2.default.createElement(_reactFeather.Box, null)
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'pcoded-mtext' },
                                        'Inventory'
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'pcoded-submenu' },
                                    _react2.default.createElement(
                                        'li',
                                        { 'class': 'submenu-item' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: 'warehouses', 'class': '' },
                                            'Warehouses'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { 'class': 'submenu-item' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: 'products', 'class': '' },
                                            'Products'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { 'class': 'submenu-item' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: 'purchase-orders', 'class': '' },
                                            'Purchase Order'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { 'class': 'submenu-item' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: 'orders', 'class': '' },
                                            'Orders'
                                        )
                                    )
                                )
                            )
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


    return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);