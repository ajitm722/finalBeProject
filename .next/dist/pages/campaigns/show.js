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
                approversCount = _props.approversCount,
                title = _props.title,
                reputationScore = _props.reputationScore;

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
            }, {
                header: reputationScore,
                meta: 'reputation score',
                description: 'reputation score is based on your frequency of news Truthfullness',
                style: {
                    overflowWrap: 'break-word'
                }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, this.props.orgName), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'View News')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary, title, reputationScore, totalApproversCount;
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
                                _context.next = 7;
                                return campaign.methods.orgName().call();

                            case 7:
                                title = _context.sent;
                                _context.next = 10;
                                return campaign.methods.reputationScore().call();

                            case 10:
                                reputationScore = _context.sent;
                                _context.next = 13;
                                return campaign.methods.approversCount().call();

                            case 13:
                                totalApproversCount = _context.sent;

                                console.log(totalApproversCount);
                                console.log(reputationScore);

                                return _context.abrupt('return', {
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4],
                                    address: props.query.address,
                                    orgName: title,
                                    reputationScore: reputationScore
                                });

                            case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwid2ViMyIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJ0aXRsZSIsInJlcHV0YXRpb25TY29yZSIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJvcmdOYW1lIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwidG90YWxBcHByb3ZlcnNDb3VudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFDVCxBQUFTLEFBQU07O0FBRWYsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7O0FBRXJCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFHWDs7Ozs7Ozs7Ozs7c0NBOEJZLEFBQ2xCO0FBRGtCO3lCQVVOLEtBVk0sQUFVRDtnQkFWQyxBQUdOLGlCQUhNLEFBR047Z0JBSE0sQUFJTixpQkFKTSxBQUlOO2dCQUpNLEFBS04sNkJBTE0sQUFLTjtnQkFMTSxBQU1OLHNCQU5NLEFBTU47Z0JBTk0sQUFPTix3QkFQTSxBQU9OO2dCQVBNLEFBUU4sZUFSTSxBQVFOO2dCQVJNLEFBU04seUJBVE0sQUFTTixBQUdKOztnQkFBTTt3QkFDRixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7O2tDQUxNLEFBQ1YsQUFJVSxBQUNXO0FBRFgsQUFDRjtBQUxSLEFBQ0ksYUFGTTt3QkFTVixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7O2tDQWJNLEFBU1YsQUFJVSxBQUNXO0FBRFgsQUFDRjtBQUxSLEFBQ0k7d0JBT0osQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaOztrQ0FyQk0sQUFpQlYsQUFJVSxBQUNXO0FBRFgsQUFDRjtBQUxSLEFBQ0k7d0JBT0osQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaOztrQ0E3Qk0sQUF5QlYsQUFJVSxBQUNXO0FBRFgsQUFDRjtBQUxSLEFBQ0k7d0JBUVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRC9CLEFBQ1ksQUFBNEIsQUFDcEM7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7O2tDQXJDTSxBQWlDVixBQUlVLEFBQ1c7QUFEWCxBQUNGO0FBTFIsQUFDSTt3QkFPSixBQUNZLEFBQ1I7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7O2tDQTdDUixBQUFjLEFBeUNWLEFBSVUsQUFDVyxBQUl6QjtBQUxjLEFBQ0Y7QUFMUixBQUNJO2lEQVFELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0gsQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFEZCxBQUNJLEFBQWdCLEFBRWhCLDBCQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFFSztBQUZMO29CQURKLEFBQ0ksQUFFSyxBQUFLLEFBS1YsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQVZaLEFBQ0ksQUFRSSxBQUNJLEFBSVI7QUFKUTtrQ0FJUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjsrQkFDUSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQXRCaEMsQUFDSSxBQUdJLEFBY0ksQUFDSSxBQUNJLEFBQ1EsQUFDSSxBQVVuQzs7Ozs7aUgsQUE5SDRCOzs7OztpQ0FDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFNLE1BQWxCLEFBQXdCLEFBQ2xCO0EsMkNBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7dUNBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O2lDQUE5QztBOzt1Q0FDYyxTQUFBLEFBQVMsUUFBVCxBQUFpQixVLEFBQWpCLEFBQTJCOztpQ0FBekM7QTs7dUNBQ3dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCLEFBQWpCLEFBQW1DOztpQ0FBM0Q7QTs7dUNBQzRCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOztpQ0FBOUQ7QSwrREFFTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7O3lEQUdhLFFBRGxCLEFBQ2tCLEFBQVEsQUFDN0I7NkNBQVMsUUFGTixBQUVNLEFBQVEsQUFDakI7a0RBQWMsUUFIWCxBQUdXLEFBQVEsQUFDdEI7b0RBQWdCLFFBSmIsQUFJYSxBQUFRLEFBQ3hCOzZDQUFTLFFBTE4sQUFLTSxBQUFRLEFBQ2pCOzZDQUFTLE1BQUEsQUFBTSxNQU5aLEFBTWtCLEFBQ3JCOzZDQVBHLEFBT00sQUFDVDtxRCxBQVJHLEFBUWM7QUFSZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJlLGdCLEFBQU0sQUFrSWpDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==