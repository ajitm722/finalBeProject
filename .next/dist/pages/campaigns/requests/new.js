"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\blockchain\\beproj\\pages\\campaigns\\requests\\new.js?entry";


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            newsTitle: '',
            recipient: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, newsTitle, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, newsTitle = _this$state.newsTitle, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(newsTitle, description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 10:

                                // navigate back to the request lists
                                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:

                                _this.setState({ loading: false });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, "Back")), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, "Create a Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, "News Title"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.newsTitle,
                onChange: function onChange(event) {
                    return _this3.setState({ newsTitle: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, "Value in Ether"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, "Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.loading,
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, "Create")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJuZXdzVGl0bGUiLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO21CQUFNLEFBQ0ksQUFDTjt5QkFGRSxBQUVVLEFBQ1o7dUJBSEUsQUFHUSxBQUNWO3VCQUpFLEFBSVEsQUFDVjtxQkFMRSxBQUtNLEFBQ1I7MEIsQUFORSxBQU1XO0FBTlgsQUFDRixpQixBQWNKO2lHQUFTLGlCQUFBLEFBQU8sT0FBUDtxRkFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ0w7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxjQUE3QixBQUFjLEFBQTRC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QUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLEFBQUM7dUJBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25COzBCQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVSxNQUFBLEFBQU0sT0FBdEMsQUFBTyxBQUFjLEFBQXdCO0FBRjNEOzs4QkFBQTtnQ0ExQlIsQUF3QkksQUFFSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs4QkFIeEI7Z0NBaENKLEFBZ0NJLEFBUUE7QUFSQTtBQUNJLGdDQU9KLEFBQUM7eUJBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDcEI7eUJBRkE7OEJBQUE7Z0NBQUE7QUFBQTtBQUNBLGVBckRaLEFBRUksQUFVSSxBQXdDSSxBQVNmOzs7OzttSCxBQS9GNEI7Ozs7O2lDQUNqQjtBLDBDQUFZLE0sQUFBTSxNLEFBQWxCO2tFQUVELEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEZmLEEsQUE1R3lCOztrQkE0R3pCLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2Jsb2NrY2hhaW4vYmVwcm9qIn0=