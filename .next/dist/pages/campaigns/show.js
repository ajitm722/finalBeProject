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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_React$Component) {
    (0, _inherits3.default)(CampaignShow, _React$Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            // this entire code is taken from semantic ui
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created this campaign and can create request to withdraw money',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute atleast this much to become a approver',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract and send it to recipient, request must be approved by a approver',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who have already donated to the campaign',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Current balance of campaign (ether)',
                description: 'Balance is how much money the campaign has to spend',
                style: {
                    overflowWrap: 'break-word'
                }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'Organization'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'View News')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // when we click on the campaign we pass the address in the query and this address term is written in route.js file
                                // from the query we are taking the address and accessing the contract through the contract instance 
                                // then calling the getSummary method to get the summary data from the campaign.sol file.
                                // the summary contains minimum contribution, balance, requests, contributioncount, manager address
                                console.log(props.query.address);
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 4;
                                return campaign.methods.getSummary().call();

                            case 4:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4],
                                    address: props.query.address
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react2.default.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwid2ViMyIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUNULEFBQVMsQUFBTTs7QUFFZixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7QUFFckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUdYOzs7Ozs7Ozs7OztzQ0F3QlksQUFDbEI7QUFEa0I7eUJBUU4sS0FSTSxBQVFEO2dCQVJDLEFBR04saUJBSE0sQUFHTjtnQkFITSxBQUlOLGlCQUpNLEFBSU47Z0JBSk0sQUFLTiw2QkFMTSxBQUtOO2dCQUxNLEFBTU4sc0JBTk0sQUFNTjtnQkFOTSxBQU9OLHdCQVBNLEFBT04sQUFHSjs7Z0JBQU07d0JBQ0YsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaOztrQ0FMTSxBQUNWLEFBSVUsQUFDVztBQURYLEFBQ0Y7QUFMUixBQUNJLGFBRk07d0JBU1YsQUFDVyxBQUNQ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