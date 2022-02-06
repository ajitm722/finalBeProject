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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
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
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;
                                _context2.next = 6;
                                return campaign.methods.disapproveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
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
            var c = a + b;
            var d = _this.props.totalApproversCount;
            var ret = c + "/" + d;
            return ret;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {

            var readyToFinalize = this.props.request.approvalCount > this.props.approversCount / 2;

            return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: this.props.request.complete, positive: readyToFinalize && !this.props.request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, this.props.id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, this.props.request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.props.request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, this.votes), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Approve-', this.props.request.approvalCount)), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onDisapprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Disapprove-', this.props.request.disapprovalCount)));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJY29uIiwiTGFiZWwiLCJNZW51IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwiZXZlbnQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25EaXNhcHByb3ZlIiwiZGlzYXBwcm92ZVJlcXVlc3QiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0Iiwidm90ZXMiLCJhIiwicmVxdWVzdCIsImFwcHJvdmFsQ291bnQiLCJiIiwiZGlzYXBwcm92YWxDb3VudCIsImMiLCJkIiwidG90YWxBcHByb3ZlcnNDb3VudCIsInJldCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmVyc0NvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQU8sQUFBTSxBQUFPOztBQUNuQyxBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFjOzs7Ozs7OztBQUNyQjtBQUNBOztJLEFBQ007Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO2lHQUFZLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDRjtBQURFLDJDQUNTLHdCQUFTLE1BQUEsQUFBSyxNQUR2QixBQUNTLEFBQW9CO2dEQUQ3Qjt1Q0FFZSxjQUFBLEFBQUssSUFGcEIsQUFFZSxBQUFTOztpQ0FBMUI7QUFGRSxvREFBQTtnREFBQTtnREFHRixBQUFTLFFBQVQsQUFBaUIs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QUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsV0FBbkIsQUFBOEIsdUJBQU0sQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDOzhCQUExQztnQ0FBQTtBQUFBO2FBQUEsRUFDeEIsaUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFWaEMsQUFRSSxBQUN5QyxBQUNMLEFBS3BDLGlDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFBUSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7OEJBQXpDO2dDQUFBO0FBQUE7YUFBQSxFQUN2QixvQkFBQSxBQUFLLE1BQUwsQUFBVyxRQWxCdkMsQUFDSSxBQWVJLEFBQzJDLEFBQ0osQUFPbEQ7Ozs7O0EsQUFoRW9CLEFBbUV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6IkQ6L2Jsb2NrY2hhaW4vYmVwcm9qIn0=