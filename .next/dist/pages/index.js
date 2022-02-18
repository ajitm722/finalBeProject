'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _RecentNews = require('../components/RecentNews');

var _RecentNews2 = _interopRequireDefault(_RecentNews);

var _firestore = require('firebase/firestore');

var _firebase = require('../firebase/firebase');

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
                            lineNumber: 102
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102
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
                    lineNumber: 115
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
                        lineNumber: 127
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130
                    }
                }, 'Organizations'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 133
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    content: 'Create Organization',
                    icon: 'add circle',
                    primary: true,
                    labelPosition: 'left',
                    floated: 'right',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                    }
                }))), this.renderCampaigns(), _react2.default.createElement(_RecentNews2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151
                    }
                })))
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var campaigns, title, reputationScore, campaignObject, promisesObjs, storageAndFirestore, collectionRef, q, querySnapshot, recentNews;
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

                                _context2.next = 13;
                                return (0, _firebase.loadDB)();

                            case 13:
                                storageAndFirestore = _context2.sent;

                                console.log("connecting to firestore");
                                collectionRef = (0, _firestore.collection)(storageAndFirestore.firestore, "recentNews");
                                q = (0, _firestore.query)(collectionRef);
                                _context2.next = 19;
                                return (0, _firestore.getDocs)(q);

                            case 19:
                                querySnapshot = _context2.sent;
                                recentNews = [];

                                querySnapshot.forEach(function (doc) {
                                    recentNews.push((0, _extends3.default)({}, doc.data()));
                                });
                                console.log(recentNews);
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


                                return _context2.abrupt('return', { campaignObject: campaignObject, recentNews: recentNews });

                            case 24:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25Nb2RlbCIsIlJlY2VudE5ld3MiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIm9uU25hcHNob3QiLCJvcmRlckJ5IiwicXVlcnkiLCJsb2FkREIiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJpIiwicHJvcHMiLCJjYW1wYWlnbk9iamVjdCIsImxlbmd0aCIsInB1c2giLCJoZWFkZXIiLCJvcmdOYW1lIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY2FtcGFpZ25zIiwidGl0bGUiLCJyZXB1dGF0aW9uU2NvcmUiLCJtYXAiLCJwcm9taXNlc09ianMiLCJvYmoiLCJpbml0aWxpemUiLCJ0ZW1wT2JqIiwiYWxsIiwic29ydCIsImEiLCJiIiwic3RvcmFnZUFuZEZpcmVzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0aW9uUmVmIiwiZmlyZXN0b3JlIiwicSIsInF1ZXJ5U25hcHNob3QiLCJyZWNlbnROZXdzIiwiZm9yRWFjaCIsImRvYyIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUyxBQUFZLEFBQVMsQUFBWSxBQUFTOztBQUNuRCxBQUFTLEFBQWM7Ozs7Ozs7SSxBQUNqQjs7Ozs7Ozs7OzthQXlFRjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFDQTtBQUNBOzswQ0FDaUIsQUFDYjtnQkFBSSxRQUFKLEFBQVUsQUFDVjtpQkFBSSxJQUFJLElBQVIsQUFBVSxHQUFHLElBQUUsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUExQixBQUF5QyxRQUF6QyxBQUFpRCxLQUFJLEFBQ2pEO3NCQUFBLEFBQU07NEJBQ00sS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLEdBRDNCLEFBQzhCLEFBQ3JDO2lEQUFhLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixHQUFyRCxBQUF3RDtzQ0FBeEQ7d0NBQUEsQUFBbUU7QUFBbkU7cUJBQUEsa0JBQW1FLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFGekUsQUFFTSxBQUFtRSxBQUNoRjsyQkFISixBQUFXLEFBR0EsQUFFZDtBQUxjLEFBQ1A7QUFLUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0gsQUFDSjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtnQ0FBQSxBQUFDOztrQ0FBRDtvQ0FBQSxBQUVJO0FBRko7QUFBQSxtQ0FFSSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxtQ0FDSSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBREosQUFDSSxBQUdBLGtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2tDQUFaO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxtQ0FDSSxBQUFDOzZCQUFELEFBQ1ksQUFDUjswQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFJSTttQ0FKSixBQUlrQixBQUNkOzZCQUxKLEFBS1k7O2tDQUxaO29DQU5aLEFBSUksQUFDSSxBQUNJLEFBYVA7QUFiTztBQUNJLDJCQVBoQixBQW1CSyxBQUFLLEFBR04sbUNBQUEsQUFBQzs7a0NBQUQ7b0NBL0JaLEFBT0ksQUFFSSxBQXNCSSxBQU1mO0FBTmU7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O3VDQXpJWSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O2lDQUF6RDtBLHNEQUNOOztBQUNJO0Esd0NBQ0EsQSxBQURNO0Esa0RBR04sQSxBQUZnQjtBLGlEQUdwQixBLEFBRG1COzsyREFDRixBQUFVLElBQUksbUJBQVMsQUFDcEM7MkNBQU8sQUFBSSw0QkFBWCxBQUFPLEFBQWtCLEFBQzVCO0FBRkQsQUFBaUIsQUFJakIsaUNBSmlCOztBQU1YOztBLDhEQUFlLEFBQWUsZ0JBQWY7eUhBQW1CLGlCQUFBLEFBQU0sS0FBTjs0Q0FBQTtzR0FBQTtzREFBQTtpRkFBQTt5REFBQTt3RUFBQTsrREFDZCxJQURjLEFBQ2QsQUFBSTs7eURBQXBCO0FBRDhCLDJFQUFBO3lGQUFBLEFBRTdCOzt5REFGNkI7eURBQUE7d0VBQUE7O0FBQUE7b0RBQUE7QUFBbkI7O3lEQUFBO2lFQUFBO0FBQUE7QSxtQ0FBQTs7dUNBSWYsa0JBQUEsQUFBUSxJLEFBQVIsQUFBWTs7aUNBRWxCOzsrQ0FBQSxBQUFlLEtBQUssVUFBQSxBQUFDLEdBQUQsQUFBRyxHQUFJLEFBQ3ZCO3dDQUFHLEVBQUEsQUFBRSxrQkFBZ0IsRUFBckIsQUFBdUIsaUJBQWdCLEFBQ25DOytDQUFBLEFBQU8sQUFDVjtBQUZELDJDQUdLLElBQUcsRUFBQSxBQUFFLGtCQUFnQixFQUFyQixBQUF1QixpQkFBZ0IsQUFDeEM7K0NBQU8sQ0FBUCxBQUFRLEFBQ1g7QUFDRDsyQ0FBQSxBQUFPLEFBQ1Y7QUFSRDs7O3VDLEFBVWtDOztpQ0FBNUI7QSxnRUFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBLGdEQUFnQiwyQkFBVyxvQkFBWCxBQUErQixXLEFBQS9CLEFBQTBDLEFBQzFEO0Esb0NBQUksc0IsQUFBQSxBQUFNOzt1Q0FDWSx3QixBQUFBLEFBQVE7O2lDQUE5QjtBLDBEQUNBO0EsNkNBQ04sQSxBQURpQjs7OENBQ2pCLEFBQWMsUUFBUSxVQUFBLEFBQUMsS0FBTSxBQUN6QjsrQ0FBQSxBQUFXLGdDQUFTLElBQXBCLEFBQW9CLEFBQUksQUFDM0I7QUFGRCxBQUdBO3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOzs7O2tFQUlPLEVBQUUsZ0JBQUYsZ0JBQWtCLFksQUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0RWEsZ0IsQUFBTSxBQXFKbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==