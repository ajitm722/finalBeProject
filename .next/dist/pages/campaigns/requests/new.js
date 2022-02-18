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

var _firebase = require("../../../firebase/firebase");

var _firestore = require("firebase/firestore");

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
                var campaign, _this$state, newsTitle, description, value, recipient, accounts, response, lastIdx, storageAndFirestore, collectionRef, docRef;

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
                                response = _context.sent;
                                _context.next = 13;
                                return campaign.methods.requestArrayLength().call();

                            case 13:
                                lastIdx = _context.sent;

                                //put this news into recentpost collection
                                //recentpost collection contains data, this.props.address which is org address and news index which is 
                                //inside response 
                                console.log("yo yo response is");
                                console.log(response);
                                console.log("last index is", lastIdx);

                                _context.next = 19;
                                return (0, _firebase.loadDB)();

                            case 19:
                                storageAndFirestore = _context.sent;
                                collectionRef = (0, _firestore.collection)(storageAndFirestore.firestore, "recentNews");
                                _context.next = 23;
                                return (0, _firestore.addDoc)(collectionRef, {
                                    timestamp: (0, _firestore.serverTimestamp)(),
                                    orgAddress: _this.props.address,
                                    newsIdx: lastIdx
                                });

                            case 23:
                                docRef = _context.sent;

                                alert("news with id " + docRef.id + " is added Successfully");

                                // navigate back to the request lists
                                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");

                                _context.next = 31;
                                break;

                            case 28:
                                _context.prev = 28;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 31:

                                _this.setState({ loading: false });

                            case 32:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 28]]);
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
                    lineNumber: 78
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, "Back")), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, "Create a Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, "News Title"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.newsTitle,
                onChange: function onChange(event) {
                    return _this3.setState({ newsTitle: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, "Value in Ether"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, "Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.loading,
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsImxvYWREQiIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJzZXJ2ZXJUaW1lc3RhbXAiLCJSZXF1ZXN0TmV3Iiwic3RhdGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwibmV3c1RpdGxlIiwicmVjaXBpZW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJyZXNwb25zZSIsInJlcXVlc3RBcnJheUxlbmd0aCIsImNhbGwiLCJsYXN0SWR4IiwiY29uc29sZSIsImxvZyIsInN0b3JhZ2VBbmRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uUmVmIiwiZmlyZXN0b3JlIiwidGltZXN0YW1wIiwib3JnQWRkcmVzcyIsIm5ld3NJZHgiLCJkb2NSZWYiLCJhbGVydCIsImlkIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVM7O0FBQ2hDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQWE7O0FBQ3JCLEFBQVMsQUFBUSxBQUFZOzs7Ozs7O0ks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dUJBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25COzBCQUFXLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVSxNQUFBLEFBQU0sT0FBdkMsQUFBTyxBQUFjLEFBQXlCO0FBRjdEOzs4QkFBQTtnQ0FIWixBQUNJLEFBRVEsQUFLUjtBQUxRO0FBQ0ksaUNBSVgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQzt1QkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDbkI7MEJBQVcseUJBQUE7MkJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFZLE1BQUEsQUFBTSxPQUF6QyxBQUFPLEFBQWMsQUFBMkI7QUFGL0Q7OzhCQUFBO2dDQVZSLEFBUUksQUFFSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQSxBQUFDO3VCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNuQjswQkFBVSx5QkFBQTsyQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQWxDLEFBQU8sQUFBYyxBQUFvQjtBQUZ2RDs7OEJBQUE7Z0NBbEJSLEFBZ0JJLEFBRUksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOEJBQUEsQUFBQzt1QkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDbkI7MEJBQVUseUJBQUE7MkJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFVLE1BQUEsQUFBTSxPQUF0QyxBQUFPLEFBQWMsQUFBd0I7QUFGM0Q7OzhCQUFBO2dDQTFCUixBQXdCSSxBQUVJLEFBTUo7QUFOSTtBQUNJLGlDQUtSLEFBQUM7dUJBQUQsQUFFSTt3QkFGSixBQUVXLEFBQ1A7eUJBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCOzhCQUh4QjtnQ0FoQ0osQUFnQ0ksQUFRQTtBQVJBO0FBQ0ksZ0NBT0osQUFBQzt5QkFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNwQjt5QkFGQTs4QkFBQTtnQ0FBQTtBQUFBO0FBQ0EsZUFyRFosQUFFSSxBQVVJLEFBd0NJLEFBU2Y7Ozs7O21ILEFBcEg0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE0sQUFBbEI7a0VBRUQsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSGYsQSxBQWpJeUI7O2tCQWlJekIsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==