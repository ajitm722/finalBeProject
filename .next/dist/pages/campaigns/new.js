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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\pages\\campaigns\\new.js?entry';
// as this file is in the campaign/new.js then the url will be 
// https://crowdcoin/campaign/new

//there are hell lot of things in this area read carefully

var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            // error message is used when the used enters some invalid input in the text box or anything wrong
            errorMessage: '',
            // this is used to show the user that the transaction is processing 
            loading: false,
            title: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.prev = 1;

                                //turn on the spinner to show we are performing the transactions
                                _this.setState({ loading: true, errorMessage: '' });

                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.title).send({
                                    from: accounts[0]
                                });

                            case 8:

                                //immediately after we sucessfully created the campaign we want o redirect to root 
                                _routes.Router.pushRoute('/');

                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](1);

                                // when ever we get an error we can change the errorMessage state property which will indeed 
                                // let the page reload and show some messge to the used so that user can come to know what went wrong
                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:

                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    //this state is defined when we created form
    //whenever the user canges the minimum contribution input then we want our page to be re rendered


    //this onSubmit is used when the form will be submitted


    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, this.state.minimumContribution, ' ', this.state.title, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Create A Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                placeholder: 'Enter minimum contribution'

                // this value is been attatched with the state minimum contribution as this will help 
                //render our page whenever the value is changes the minimumContribution gets the value of 
                //event.target.value
                , value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Title'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'Text',
                labelPosition: 'right',
                placeholder: 'Enter title'

                // this value is been attatched with the state minimum contribution as this will help 
                //render our page whenever the value is changes the minimumContribution gets the value of 
                //event.target.value
                , value: this.state.title,
                onChange: function onChange(event) {
                    return _this3.setState({ title: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops!',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.loading,
                type: 'submit', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwidGl0bGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUyxBQUFRLEFBQVUsQUFDM0IsQUFBUyxBQUNULEFBQVM7O0FBR1QsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUVqQixBQUFTLEFBQWM7Ozs7O0FBaEJ2QjtBQUNBOztBQUVBOztJLEFBZU07Ozs7Ozs7Ozs7Ozs7OzswTixBQUlGO2lDQUFNLEFBQ2tCLEFBQ3BCO0FBQ0E7MEJBSEUsQUFHVyxBQUNiO0FBQ0E7cUJBTEUsQUFLTyxBQUNUO21CLEFBTkUsQUFNSztBQU5MLEFBQ0YsaUIsQUFTSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBRE8sQUFDUCxBQUFNOztnREFJRjs7QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQU4zQixBQU1ILEFBQWMsQUFBOEI7O2dEQU56Qzt1Q0FRb0IsY0FBQSxBQUFLLElBUnpCLEFBUW9CLEFBQVM7O2lDQUExQjtBQVJILG9EQUFBO2dEQUFBO3lEQVdHLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxxQkFBcUIsTUFBQSxBQUFLLE1BQXBFLEFBQTBFLE9BQTFFLEFBQ0w7MENBQ1EsU0FiTixBQVdHLEFBQ0EsQUFDRyxBQUFTO0FBRFosQUFDRixpQ0FGRTs7aUNBS047O0FBQ0E7K0NBQUEsQUFBTyxVQWpCSixBQWlCSCxBQUFpQjs7Z0RBakJkO0FBQUE7O2lDQUFBO2dEQUFBO2dFQW9CSDs7QUFDQTtBQUNBO3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUF0QjFCLEFBc0JILEFBQWMsQUFBcUI7O2lDQUd2Qzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0F6QlIsQUF5QlAsQUFBYyxBQUFVOztpQ0F6QmpCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7OztBQVpYOztBQUNBO0FBVUE7Ozs7Ozs7O2lDQTZCUzt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSztBQURMO0FBQUEsYUFBQSxPQUNLLEFBQUssTUFEVixBQUNnQixxQkFBc0IsVUFBQSxBQUFLLE1BRDNDLEFBQ2lELEFBQzdDLHVCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFHQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBUUk7QUFSSjsrQkFRSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSx5Q0FBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkOzZCQUFZLEFBRVo7O0FBQ0E7QUFDQTtBQVBKO0FBQ0ksa0JBT0EsT0FBUyxLQUFBLEFBQUssTUFSbEIsQUFRd0IsQUFDcEI7MEJBQVUseUJBQUE7MkJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BQWpELEFBQU8sQUFBYyxBQUFtQztBQVR0RTs7OEJBQUE7Z0NBWlIsQUFRSSxBQUlJLEFBYUo7QUFiSTtpQ0FhSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSwwQkFBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkOzZCQUFZLEFBRVo7O0FBQ0E7QUFDQTtBQVBKO0FBQ0ksa0JBT0EsT0FBUyxLQUFBLEFBQUssTUFSbEIsQUFRd0IsQUFDcEI7MEJBQVUseUJBQUE7MkJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUFuQyxBQUFPLEFBQWMsQUFBcUI7QUFUeEQ7OzhCQUFBO2dDQTdCUixBQXlCSSxBQUlJLEFBaUJKO0FBakJJO2lDQWlCSixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7OEJBSHhCO2dDQTlDSixBQThDSSxBQU9BO0FBUEE7QUFDSSxnQ0FNSixBQUFDO3lCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjtzQkFGSixBQUVTLFVBQVMsU0FGbEI7OEJBQUE7Z0NBQUE7QUFBQTtBQUNJLGVBNURoQixBQUNJLEFBS0ksQUFxREksQUFVZjs7Ozs7QUFHTCxBLEFBbkgwQjs7a0JBbUgxQixBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2JlcHJvaiJ9