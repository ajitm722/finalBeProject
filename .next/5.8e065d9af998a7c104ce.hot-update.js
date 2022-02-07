webpackHotUpdate(5,{

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(1015);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(612);

var _Layout = __webpack_require__(1655);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1002);

var _campaign = __webpack_require__(1012);

var _campaign2 = _interopRequireDefault(_campaign);

var _CampaignModel = __webpack_require__(1673);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\blockchain\\beproj\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\blockchain\\beproj\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44ZTA2NWQ5YWY5OThhN2MxMDRjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZWVjNWVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCBDYW1wYWlnbk1vZGVsIGZyb20gJy4uL21vZGVsL0NhbXBhaWduTW9kZWwnO1xyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbXBhaWducyk7XHJcbiAgICAgICAgdmFyIHRpdGxlPVtdO1xyXG4gICAgICAgIHZhciByZXB1dGF0aW9uU2NvcmU9W107XHJcblxyXG4gICAgICAgIHZhciBjYW1wYWlnbk9iamVjdD1bXTtcclxuICAgICAgICBjYW1wYWlnbk9iamVjdCA9IGNhbXBhaWducy5tYXAoYWRkcmVzcz0+e1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENhbXBhaWduTW9kZWwoYWRkcmVzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbXBhaWduT2JqZWN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXNPYmpzID0gY2FtcGFpZ25PYmplY3QubWFwKGFzeW5jIG9iaj0+e1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wT2JqID0gYXdhaXQgb2JqLmluaXRpbGl6ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGVtcE9iajtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzT2Jqcyk7XHJcblxyXG4gICAgICAgIGNhbXBhaWduT2JqZWN0LnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgaWYoYS5yZXB1dGF0aW9uU2NvcmU8Yi5yZXB1dGF0aW9uU2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihhLnJlcHV0YXRpb25TY29yZT5iLnJlcHV0YXRpb25TY29yZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0c1wiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbXBhaWduT2JqZWN0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdHNcIilcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcHJvbWlzZXMgPSBjYW1wYWlnbnMubWFwKGFzeW5jIGNhbXBhaWduPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGNhbXAgPSBDYW1wYWlnbihjYW1wYWlnbik7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHN1bW0gPSBhd2FpdCBjYW1wLm1ldGhvZHMub3JnTmFtZSgpLmNhbGwoKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHN1bW07XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aXRsZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cclxuICAgICAgICAvLyBjb25zdCBwcm9taXNlc1JTID0gY2FtcGFpZ25zLm1hcChhc3luYyBjYW1wYWlnbj0+e1xyXG4gICAgICAgIC8vICAgICBjb25zdCBjYW1wID0gQ2FtcGFpZ24oY2FtcGFpZ24pO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBycyA9IGF3YWl0IGNhbXAubWV0aG9kcy5yZXB1dGF0aW9uU2NvcmUoKS5jYWxsKCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBycztcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHJlcHV0YXRpb25TY29yZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzUlMpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB0aXRsZVJzID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpPTA7IGk8cmVwdXRhdGlvblNjb3JlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvLyAgICAgdGl0bGVScy5wdXNoKHt0aXRsZTogdGl0bGVbaV0sIHJlcHV0YXRpb25TY29yZTogcmVwdXRhdGlvblNjb3JlW2ldfSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aXRsZVJzLnNvcnQoKGEsIGIpPT57XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBiLnJlcHV0YXRpb25TY29yZS1hLnJlcHV0YXRpb25TY29yZTtcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgY2FtcGFpZ25PYmplY3QgfTtcclxuICAgICAgICAvLyByZXR1cm4ge2NhbXBhaWduT2JqZWN0c307XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzIG1ldGhvZCBvbmx5IGV4ZWN1dGVzIG9uIHRoZSBicm93c2VyIGJ1dCBpZiBzb21lIG9uZSBkb2VzbnQgaGF2ZSBtZXRhbWFzayBpbnN0YWxsZWQgb24gdGhlaXIgZGV2aWNlIFxyXG4gICAgLy8gd2UgY2FuIHVzZSBvdXIgc2VydmVyIHRvIGdldCB0aGUgZGF0YSBmcm9tIGNvbnRyYWN0IHRoaXMgY29tcG9uZW50RGlNT3VudCBtZXRob2QgaXMgdXNlZCB0byBkbyB0aGUgaW5pdGlhbCBzdHVmZiBzbyBcclxuICAgIC8vIGFzIG5leHQgZXhlY3V0ZXMgb24gaXRzIG93biBzZXJ2ZXIgc28gYXQgdGhhdCBzZXJ2ZXIgd2Ugd2lsbCBub3QgaGF2ZSB0aGlzIGluaXRpYWwgZGF0YVxyXG4gICAgLy8gZm9yIHRoYXQgd2UgaGF2ZSBnZXRJbml0aWFsUHJvcHMgbWV0aG9kIG9mIFJlYWN0IHdoaWNoIHdpbGwgZXhlY3V0ZSBhbmQgd29ya3MganVzdCBsaWtlIGNvbXBvbmVuZERpZE1vdW50IG1ldGhvZHNcclxuICAgIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBjcmVhdGVkLVsxXSB0aGlzIGZ1bmN0aW9uIGlzIGNyZWF0ZWQgdXNpbmcgc2VtYW50aWMgdWkgbGlicmFyeSB0byBkaXNwbGF5IHRoZSBjYW1wYWlnbnNcclxuICAgIC8vIHRoZSBiZWxvdyBjb2RlIGZvciB0aGUgY2FyZCBpcyB0YWtlbiBmcm9tIHRoZSBzZW1hbnRpYy11aSBkb2NzIHRoZXkgaGF2ZSBnb29kIGRvY3MgaGF2ZSBhIGxvb2tcclxuICAgIC8vYWRkcmVzcyBoZXJlIGlzIG5vdGhpbmcgYnV0IHRoZSBwbGFjZSB3aGVyZSB0aGF0IGFkZHJlc3MgaXMgcGxhY2VkLlxyXG4gICAgcmVuZGVyQ2FtcGFpZ25zKCl7XHJcbiAgICAgICAgdmFyIGl0ZW1zPVtdO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMucHJvcHMuY2FtcGFpZ25PYmplY3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogdGhpcy5wcm9wcy5jYW1wYWlnbk9iamVjdFtpXS5vcmdOYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuY2FtcGFpZ25PYmplY3RbaV0uYWRkcmVzc31gfT48YT5WaWV3IE9yZ2FuaXphdGlvbjwvYT48L0xpbms+LFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAgICAgICAvLyBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+e1xyXG4gICAgICAgIC8vICAgICByZXR1cm57XHJcbiAgICAgICAgLy8gICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgLy8gICAgICAgICBkZXNjcmlwdGlvbjogPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT48YT5WaWV3IE9yZ2FuaXphdGlvbjwvYT48L0xpbms+LFxyXG4gICAgICAgIC8vICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vIHN0YXJ0IHJlYWRpbmcgZnJvbSBoZXJlIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIHdlIGFyZSB0YWtpbmcgd3JhcHBpbmcgdGhlIGRhdGEgaW5zaWRlIHRoZSBkaXYgdG8gdGhlIGxheW91dCBhbmQgdGhpcyBlbnRpcmUgZGl2IHdpbGwgYmUgcGFzc2VkIGFzXHJcbiAgICAgICAgICAgIC8vY2hpbGRyZW4gdG8gdGhlIGxheW91dCAuXHJcbiAgICAgICAgICAgIC8vdGhpcyBpcyBraW5kIG9mIGZyYWdtZW50IHdoZXJlIGxheW91dCBpcyB0aGUgcGFyZW50IGFuZCB0aGUgZGF0YSBpbnNpZGUgdGhlIGxheW91dCBpcyBcclxuICAgICAgICAgICAgLy8gdGhlIGNoaWxkcmVucyB3aGljaCB3aWxsIGJlIGtlZXAgc3dhcHBpbmcuXHJcblxyXG4gICAgICAgICAgICAvL3RoZW4gY2hlY2sgb3V0IHRoZSBsYXlvdXRcclxuICAgICAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Pcmdhbml6YXRpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qVGhpcyBidXR0b24gY29kZSBpcyBhZ2FpbiB0YWtlbiBmcm9tIHNlbWFudGljIHVpIGRvY3VtZW50YXRpb24gICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgT3JnYW5pemF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBjYWxsaW5nIHRoZSByZW5kZXJDYW1wYWlnbiB0byBzaG93IHRoZSBvcGVuIGNhbXBhaWduIHRoYXQgd2UgZ290IGZyb20gdGhlIGdldEluaXRpYWxwcm9wcyBtZXRob2RcclxuICAgICAgICAgICAgICAgICAgICBieSBtYWtpbmcgYSBjYWxsIHRvIGNvbnRyYWN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBYUE7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFqSEE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOURBO0FBQ0E7QUEwSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==