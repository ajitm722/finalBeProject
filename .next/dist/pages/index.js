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

var _CampaignModel = require('../model/CampaignModel');

var _CampaignModel2 = _interopRequireDefault(_CampaignModel);

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
            for (var i = 0; i < this.props.campaignObject.length; i++) {
                items.push({
                    header: this.props.campaignObject[i].orgName,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignObject[i].address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        }
                    }, 'View Organization')),
                    fluid: true
                });
            }
            // console.log(items);
            // const items = this.props.campaigns.map(address =>{
            //     return{
            //         header: address,
            //         description: <Link route={`/campaigns/${address}`}><a>View Organization</a></Link>,
            //         fluid: true
            //     };
            // });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
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
                        lineNumber: 115
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                    }
                }, 'Organizations'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    content: 'Create Organization',
                    icon: 'add circle',
                    primary: true,
                    labelPosition: 'left',
                    floated: 'right',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                    }
                }))), this.renderCampaigns()))
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var campaigns, title, reputationScore, campaignObject, promisesObjs;
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
                                reputationScore = [];
                                campaignObject = [];

                                campaignObject = campaigns.map(function (address) {
                                    return new _CampaignModel2.default(address);
                                });

                                // console.log(campaignObject);

                                promisesObjs = campaignObject.map(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(obj) {
                                        var tempObj;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return obj.initilize();

                                                    case 2:
                                                        tempObj = _context.sent;
                                                        return _context.abrupt('return', tempObj);

                                                    case 4:
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
                                _context2.next = 10;
                                return _promise2.default.all(promisesObjs);

                            case 10:

                                campaignObject.sort(function (a, b) {
                                    if (a.reputationScore < b.reputationScore) {
                                        return 1;
                                    } else if (a.reputationScore > b.reputationScore) {
                                        return -1;
                                    }
                                    return 0;
                                });

                                // console.log("objects")
                                // console.log(campaignObject);
                                // console.log("objects")

                                // const promises = campaigns.map(async campaign=>{
                                //     const camp = Campaign(campaign);
                                //     const summ = await camp.methods.orgName().call();
                                //     return summ;
                                // })
                                // title = await Promise.all(promises)

                                // const promisesRS = campaigns.map(async campaign=>{
                                //     const camp = Campaign(campaign);
                                //     const rs = await camp.methods.reputationScore().call();
                                //     return rs;
                                // })
                                // reputationScore = await Promise.all(promisesRS);

                                // const titleRs = [];
                                // for(var i=0; i<reputationScore.length; i++){
                                //     titleRs.push({title: title[i], reputationScore: reputationScore[i]});
                                // }

                                // titleRs.sort((a, b)=>{
                                //     return b.reputationScore-a.reputationScore;
                                // })


                                return _context2.abrupt('return', { campaignObject: campaignObject });

                            case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25Nb2RlbCIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsImkiLCJwcm9wcyIsImNhbXBhaWduT2JqZWN0IiwibGVuZ3RoIiwicHVzaCIsImhlYWRlciIsIm9yZ05hbWUiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjYW1wYWlnbnMiLCJ0aXRsZSIsInJlcHV0YXRpb25TY29yZSIsIm1hcCIsInByb21pc2VzT2JqcyIsIm9iaiIsImluaXRpbGl6ZSIsInRlbXBPYmoiLCJhbGwiLCJzb3J0IiwiYSIsImIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBbUI7Ozs7Ozs7OztJLEFBQ3BCOzs7Ozs7Ozs7O2FBZ0VGOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUNBO0FBQ0E7OzBDQUNpQixBQUNiO2dCQUFJLFFBQUosQUFBVSxBQUNWO2lCQUFJLElBQUksSUFBUixBQUFVLEdBQUcsSUFBRSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQTFCLEFBQXlDLFFBQXpDLEFBQWlELEtBQUksQUFDakQ7c0JBQUEsQUFBTTs0QkFDTSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsR0FEM0IsQUFDOEIsQUFDckM7aURBQWEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLEdBQXJELEFBQXdEO3NDQUF4RDt3Q0FBQSxBQUFtRTtBQUFuRTtxQkFBQSxrQkFBbUUsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUZ6RSxBQUVNLEFBQW1FLEFBQ2hGOzJCQUhKLEFBQVcsQUFHQSxBQUVkO0FBTGMsQUFDUDtBQUtSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7aURBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHSCxBQUNKO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO2dDQUFBLEFBQUM7O2tDQUFEO29DQUFBLEFBRUk7QUFGSjtBQUFBLG1DQUVJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFESixBQUNJLEFBR0Esa0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7a0NBQVo7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLEFBQUM7NkJBQUQsQUFDWSxBQUNSOzBCQUZKLEFBRVMsQUFDTDs2QkFISixBQUlJO21DQUpKLEFBSWtCLEFBQ2Q7NkJBTEosQUFLWTs7a0NBTFo7b0NBTlosQUFJSSxBQUNJLEFBQ0ksQUFhUDtBQWJPO0FBQ0ksMkJBaEJ4QixBQU9JLEFBRUksQUFtQkssQUFBSyxBQVFyQjs7Ozs7Ozs7Ozs7Ozs7O3VDQXJJMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOztpQ0FBekQ7QSxzREFDTjs7QUFDSTtBLHdDQUNBLEEsQUFETTtBLGtELEFBQ1UsQUFFaEI7QSxpREFDSixBLEFBRG1COzsyREFDRixBQUFVLElBQUksbUJBQVMsQUFDcEM7MkNBQU8sQUFBSSw0QkFBWCxBQUFPLEFBQWtCLEFBQzVCO0FBRkQsQUFBaUIsQUFJakIsaUNBSmlCOztBQU1YOztBLDhEQUFlLEFBQWUsZ0JBQWY7eUhBQW1CLGlCQUFBLEFBQU0sS0FBTjs0Q0FBQTtzR0FBQTtzREFBQTtpRkFBQTt5REFBQTt3RUFBQTsrREFDZCxJQURjLEFBQ2QsQUFBSTs7eURBQXBCO0FBRDhCLDJFQUFBO3lGQUFBLEFBRTdCOzt5REFGNkI7eURBQUE7d0VBQUE7O0FBQUE7b0RBQUE7QUFBbkI7O3lEQUFBO2lFQUFBO0FBQUE7QSxtQ0FBQTs7dUNBSWYsa0JBQUEsQUFBUSxJLEFBQVIsQUFBWTs7aUNBRWxCOzsrQ0FBQSxBQUFlLEtBQUssVUFBQSxBQUFDLEdBQUQsQUFBRyxHQUFJLEFBQ3ZCO3dDQUFHLEVBQUEsQUFBRSxrQkFBZ0IsRUFBckIsQUFBdUIsaUJBQWdCLEFBQ25DOytDQUFBLEFBQU8sQUFDVjtBQUZELDJDQUdLLElBQUcsRUFBQSxBQUFFLGtCQUFnQixFQUFyQixBQUF1QixpQkFBZ0IsQUFDeEM7K0NBQU8sQ0FBUCxBQUFRLEFBQ1g7QUFDRDsyQ0FBQSxBQUFPLEFBQ1Y7QUFSRCxBQVdBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7Ozs7a0VBSU8sRUFBRSxnQixBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0RhLGdCQTJJNUIsQSxBQTNJa0M7O2tCQTJJbEMsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2JlcHJvaiJ9