'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\components\\RequestRow.js';

// props - key-index, request-Request struct, address-campaign address, id-index, 
// totalApproversCount=total number of people subscribed to this campaign

var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.setState({ loading: true });
                                _context.prev = 1;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 12;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](1);

                            case 12:
                                _this.setState({ loading: false });
                                window.location.reload();

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onDisapprove = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _this.setState({ loading: true });
                                _context2.prev = 1;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context2.sent;
                                _context2.next = 8;
                                return campaign.methods.disapproveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context2.next = 12;
                                break;

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2['catch'](1);

                            case 12:
                                _this.setState({ loading: false });
                                window.location.reload();

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[1, 10]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.onFinalize = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context3.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context3.sent;
                                _context3.next = 6;
                                return campaign.methods.finalizeRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            }));

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        }(), _this.votes = function () {
            var a = _this.props.request.approvalCount;
            var b = _this.props.request.disapprovalCount;
            var c = +a + +b;
            var d = _this.props.totalApproversCount;
            var ret = c + "/" + d;
            console.log("votes called");
            console.log(ret);
            return ret;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {

            var readyToFinalize = this.props.request.approvalCount > this.props.approversCount / 2;
            var isTrue = this.props.request.trueValue == 1;
            var isFalse = this.props.request.trueValue == 2;
            return _react2.default.createElement(_semanticUiReact.Table.Row, { positive: isTrue, negative: isFalse, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.props.id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, this.props.request.newsTitle), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('a', { href: this.props.request.description, target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Click here to read full news')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, this.votes()), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, this.props.request.trueValue != 0 ? null : _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Approve-', this.props.request.approvalCount)), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, this.props.request.trueValue != 0 ? null : _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, color: 'teal', basic: true, onClick: this.onDisapprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'Disapprove-', this.props.request.disapprovalCount)));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJY29uIiwiTGFiZWwiLCJNZW51IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nIiwib25BcHByb3ZlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9uRGlzYXBwcm92ZSIsImRpc2FwcHJvdmVSZXF1ZXN0Iiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsInZvdGVzIiwiYSIsInJlcXVlc3QiLCJhcHByb3ZhbENvdW50IiwiYiIsImRpc2FwcHJvdmFsQ291bnQiLCJjIiwiZCIsInRvdGFsQXBwcm92ZXJzQ291bnQiLCJyZXQiLCJjb25zb2xlIiwibG9nIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92ZXJzQ291bnQiLCJpc1RydWUiLCJ0cnVlVmFsdWUiLCJpc0ZhbHNlIiwibmV3c1RpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBTyxBQUFNLEFBQU87O0FBQ25DLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWM7Ozs7Ozs7O0FBQ3JCO0FBQ0E7O0ksQUFDTTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRUY7cUIsQUFBTSxBQUNPO0FBRFAsQUFDRixpQixBQUdKO2lHQUFZLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQURQLEFBQ1Is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SjthQUFBLGtCQUVLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUZ0QixBQUVJLEFBQXdCLEFBQ3hCLHFCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsUUFINUIsQUFHSSxBQUFnQyxBQUNoQyw0QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQVk7QUFBWjtBQUFBLCtCQUFZLGNBQUEsT0FBRyxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBcEIsQUFBNEIsYUFBYSxRQUF6QyxBQUFnRDs4QkFBaEQ7Z0NBQUE7QUFBQTtlQUpoQixBQUlJLEFBQVksQUFDWixrREFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQUxKLEFBS0ksQUFBYSxBQUFLLEFBRWxCLDBCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixhQUFuQixBQUE4QixJQUE5QixBQUFrQyx1QkFBTSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsT0FBckMsQUFBMkMsU0FBUSxPQUFuRCxNQUF5RCxTQUFTLEtBQWxFLEFBQXVFOzhCQUF2RTtnQ0FBQTtBQUFBO2FBQUEsRUFDNUIsaUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFUaEMsQUFPSSxBQUM2QyxBQUNULEFBS3BDLGlDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixhQUFuQixBQUE4QixJQUE5QixBQUFrQyx1QkFBUSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsT0FBckMsQUFBMkMsUUFBTyxPQUFsRCxNQUF3RCxTQUFTLEtBQWpFLEFBQXNFOzhCQUF0RTtnQ0FBQTtBQUFBO2FBQUEsRUFDM0Isb0JBQUEsQUFBSyxNQUFMLEFBQVcsUUFqQnZDLEFBQ0ksQUFjSSxBQUMrQyxBQUNSLEFBT2xEOzs7OztBQUdMLEEsQUF2RnlCOztrQkF1RnpCLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2JlcHJvaiJ9