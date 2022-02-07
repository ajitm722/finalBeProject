'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\pages\\index.js?entry';


var CampaignIndex = function (_React$Component) {
    (0, _inherits3.default)(CampaignIndex, _React$Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',

        // this method only executes on the browser but if some one doesnt have metamask installed on their device 
        // we can use our server to get the data from contract this componentDiMOunt method is used to do the initial stuff so 
        // as next executes on its own server so at that server we will not have this initial data
        // for that we have getInitialProps method of React which will execute and works just like componendDidMount methods
        // async componentDidMount() {
        //     const campaigns = await factory.methods.getDeployedCampaigns().call();
        //     console.log(campaigns);
        // }


        // created-[1] this function is created using semantic ui library to display the campaigns
        // the below code for the card is taken from the semantic-ui docs they have good docs have a look
        //address here is nothing but the place where that address is placed.
        value: function renderCampaigns() {
            var items = [];
            for (var i = 0; i < this.props.title.length; i++) {
                items.push({
                    header: this.props.title[i],
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaigns[i], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    }, 'View Organization')),
                    fluid: true
                });
            }
            console.log(items);
            // const items = this.props.campaigns.map(address =>{
            //     return{
            //         header: address,
            //         description: <Link route={`/campaigns/${address}`}><a>View Organization</a></Link>,
            //         fluid: true
            //     };
            // });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // start reading from here 
            return (
                // we are taking wrapping the data inside the div to the layout and this entire div will be passed as
                //children to the layout .
                //this is kind of fragment where layout is the parent and the data inside the layout is 
                // the childrens which will be keep swapping.

                //then check out the layout
                _react2.default.createElement(_Layout2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, 'Organizations'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    content: 'Create Organization',
                    icon: 'add circle',
                    primary: true,
                    labelPosition: 'left',
                    floated: 'right',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }))), this.renderCampaigns()))
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var campaigns, title, promises;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context2.sent;

                                // console.log(campaigns);
                                title = [];
                                promises = campaigns.map(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(campaign) {
                                        var camp, summ;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        camp = (0, _campaign2.default)(campaign);
                                                        _context.next = 3;
                                                        return camp.methods.orgName().call();

                                                    case 3:
                                                        summ = _context.sent;
                                                        return _context.abrupt('return', summ);

                                                    case 5:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());
                                _context2.next = 7;
                                return _promise2.default.all(promises);

                            case 7:
                                title = _context2.sent;
                                return _context2.abrupt('return', { campaigns: campaigns, title: title });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react2.default.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwiaSIsInByb3BzIiwidGl0bGUiLCJsZW5ndGgiLCJwdXNoIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJjYW1wYWlnbnMiLCJmbHVpZCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwicHJvbWlzZXMiLCJtYXAiLCJjYW1wYWlnbiIsImNhbXAiLCJvcmdOYW1lIiwic3VtbSIsImFsbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7YUFlRjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFDQTtBQUNBOzswQ0FDaUIsQUFDYjtnQkFBSSxRQUFKLEFBQVUsQUFDVjtpQkFBSSxJQUFJLElBQVIsQUFBVSxHQUFHLElBQUUsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUExQixBQUFnQyxRQUFoQyxBQUF3QyxLQUFJLEFBQ3hDO3NCQUFBLEFBQU07NEJBQ00sS0FBQSxBQUFLLE1BQUwsQUFBVyxNQURaLEFBQ0MsQUFBaUIsQUFDekI7aURBQWEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF0QyxBQUEyQixBQUFxQjtzQ0FBaEQ7d0NBQUEsQUFBc0Q7QUFBdEQ7cUJBQUEsa0JBQXNELGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFGNUQsQUFFTSxBQUFzRCxBQUNuRTsyQkFISixBQUFXLEFBR0EsQUFFZDtBQUxjLEFBQ1A7QUFLUjtvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0gsQUFDSjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtnQ0FBQSxBQUFDOztrQ0FBRDtvQ0FBQSxBQUVJO0FBRko7QUFBQSxtQ0FFSSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxtQ0FDSSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBREosQUFDSSxBQUdBLGtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2tDQUFaO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxtQ0FDSSxBQUFDOzZCQUFELEFBQ1ksQUFDUjswQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFJSTttQ0FKSixBQUlrQixBQUNkOzZCQUxKLEFBS1k7O2tDQUxaO29DQU5aLEFBSUksQUFDSSxBQUNJLEFBYVA7QUFiTztBQUNJLDJCQWhCeEIsQUFPSSxBQUVJLEFBbUJLLEFBQUssQUFRckI7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FwRjJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7aUNBQXpEO0Esc0RBQ047O0FBQ0k7QSx3QyxBQUFNLEFBRUo7QSxxREFBVyxBQUFVLGdCQUFWO3lIQUFjLGlCQUFBLEFBQU0sVUFBTjtrREFBQTtzR0FBQTtzREFBQTtpRkFBQTt5REFDckI7QUFEcUIsK0RBQ2Qsd0JBRGMsQUFDZCxBQUFTO3dFQURLOytEQUVSLEtBQUEsQUFBSyxRQUFMLEFBQWEsVUFGTCxBQUVSLEFBQXVCOzt5REFBcEM7QUFGcUIsd0VBQUE7eUZBQUEsQUFHcEI7O3lEQUhvQjt5REFBQTt3RUFBQTs7QUFBQTtvREFBQTtBQUFkOzt5REFBQTtpRUFBQTtBQUFBO0EsbUNBQUE7O3VDQUtILGtCQUFBLEFBQVEsSSxBQUFSLEFBQVk7O2lDQUExQjtBO2tFQUNPLEVBQUUsV0FBRixXQUFhLE8sQUFBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWJhLGdCQTBGNUIsQSxBQTFGa0M7O2tCQTBGbEMsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2JlcHJvaiJ9