webpackHotUpdate(6,{

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(103);

var _extends3 = _interopRequireDefault(_extends2);

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

var _factory = __webpack_require__(1679);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(510);

var _Layout = __webpack_require__(1015);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(863);

var _campaign = __webpack_require__(873);

var _campaign2 = _interopRequireDefault(_campaign);

var _CampaignModel = __webpack_require__(1681);

var _CampaignModel2 = _interopRequireDefault(_CampaignModel);

var _RecentNews = __webpack_require__(1696);

var _RecentNews2 = _interopRequireDefault(_RecentNews);

var _firestore = __webpack_require__(1685);

var _firebase = __webpack_require__(1683);

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

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\blockchain\\beproj\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\blockchain\\beproj\\pages\\index.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lNzk0ZDc3ZTIzZmQzNDg0NzM0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MmNmZmE1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCBDYW1wYWlnbk1vZGVsIGZyb20gJy4uL21vZGVsL0NhbXBhaWduTW9kZWwnO1xyXG5pbXBvcnQgUmVjZW50TmV3cyBmcm9tICcuLi9jb21wb25lbnRzL1JlY2VudE5ld3MnO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBvblNuYXBzaG90LCBvcmRlckJ5LCBxdWVyeSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGxvYWREQiB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlJztcclxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xyXG4gICAgICAgIHZhciB0aXRsZT1bXTtcclxuICAgICAgICB2YXIgcmVwdXRhdGlvblNjb3JlPVtdO1xyXG5cclxuICAgICAgICB2YXIgY2FtcGFpZ25PYmplY3Q9W107XHJcbiAgICAgICAgY2FtcGFpZ25PYmplY3QgPSBjYW1wYWlnbnMubWFwKGFkZHJlc3M9PntcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYW1wYWlnbk1vZGVsKGFkZHJlc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1wYWlnbk9iamVjdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzT2JqcyA9IGNhbXBhaWduT2JqZWN0Lm1hcChhc3luYyBvYmo9PntcclxuICAgICAgICAgICAgY29uc3QgdGVtcE9iaiA9IGF3YWl0IG9iai5pbml0aWxpemUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBPYmo7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlc09ianMpO1xyXG5cclxuICAgICAgICBjYW1wYWlnbk9iamVjdC5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgIGlmKGEucmVwdXRhdGlvblNjb3JlPGIucmVwdXRhdGlvblNjb3JlKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYS5yZXB1dGF0aW9uU2NvcmU+Yi5yZXB1dGF0aW9uU2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VBbmRGaXJlc3RvcmUgPSBhd2FpdCBsb2FkREIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RpbmcgdG8gZmlyZXN0b3JlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKHN0b3JhZ2VBbmRGaXJlc3RvcmUuZmlyZXN0b3JlLCBcInJlY2VudE5ld3NcIik7XHJcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb25SZWYpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xyXG4gICAgICAgIGNvbnN0IHJlY2VudE5ld3M9W107XHJcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpPT57XHJcbiAgICAgICAgICAgIHJlY2VudE5ld3MucHVzaCh7Li4uZG9jLmRhdGEoKX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVjZW50TmV3cylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdHNcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1wYWlnbk9iamVjdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvYmplY3RzXCIpXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHByb21pc2VzID0gY2FtcGFpZ25zLm1hcChhc3luYyBjYW1wYWlnbj0+e1xyXG4gICAgICAgIC8vICAgICBjb25zdCBjYW1wID0gQ2FtcGFpZ24oY2FtcGFpZ24pO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBzdW1tID0gYXdhaXQgY2FtcC5tZXRob2RzLm9yZ05hbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBzdW1tO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGl0bGUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcHJvbWlzZXNSUyA9IGNhbXBhaWducy5tYXAoYXN5bmMgY2FtcGFpZ249PntcclxuICAgICAgICAvLyAgICAgY29uc3QgY2FtcCA9IENhbXBhaWduKGNhbXBhaWduKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgcnMgPSBhd2FpdCBjYW1wLm1ldGhvZHMucmVwdXRhdGlvblNjb3JlKCkuY2FsbCgpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gcnM7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyByZXB1dGF0aW9uU2NvcmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlc1JTKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgdGl0bGVScyA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaT0wOyBpPHJlcHV0YXRpb25TY29yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlUnMucHVzaCh7dGl0bGU6IHRpdGxlW2ldLCByZXB1dGF0aW9uU2NvcmU6IHJlcHV0YXRpb25TY29yZVtpXX0pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGl0bGVScy5zb3J0KChhLCBiKT0+e1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gYi5yZXB1dGF0aW9uU2NvcmUtYS5yZXB1dGF0aW9uU2NvcmU7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB7IGNhbXBhaWduT2JqZWN0LCByZWNlbnROZXdzIH07XHJcbiAgICAgICAgLy8gcmV0dXJuIHtjYW1wYWlnbk9iamVjdHN9O1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcyBtZXRob2Qgb25seSBleGVjdXRlcyBvbiB0aGUgYnJvd3NlciBidXQgaWYgc29tZSBvbmUgZG9lc250IGhhdmUgbWV0YW1hc2sgaW5zdGFsbGVkIG9uIHRoZWlyIGRldmljZSBcclxuICAgIC8vIHdlIGNhbiB1c2Ugb3VyIHNlcnZlciB0byBnZXQgdGhlIGRhdGEgZnJvbSBjb250cmFjdCB0aGlzIGNvbXBvbmVudERpTU91bnQgbWV0aG9kIGlzIHVzZWQgdG8gZG8gdGhlIGluaXRpYWwgc3R1ZmYgc28gXHJcbiAgICAvLyBhcyBuZXh0IGV4ZWN1dGVzIG9uIGl0cyBvd24gc2VydmVyIHNvIGF0IHRoYXQgc2VydmVyIHdlIHdpbGwgbm90IGhhdmUgdGhpcyBpbml0aWFsIGRhdGFcclxuICAgIC8vIGZvciB0aGF0IHdlIGhhdmUgZ2V0SW5pdGlhbFByb3BzIG1ldGhvZCBvZiBSZWFjdCB3aGljaCB3aWxsIGV4ZWN1dGUgYW5kIHdvcmtzIGp1c3QgbGlrZSBjb21wb25lbmREaWRNb3VudCBtZXRob2RzXHJcbiAgICAvLyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coY2FtcGFpZ25zKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gY3JlYXRlZC1bMV0gdGhpcyBmdW5jdGlvbiBpcyBjcmVhdGVkIHVzaW5nIHNlbWFudGljIHVpIGxpYnJhcnkgdG8gZGlzcGxheSB0aGUgY2FtcGFpZ25zXHJcbiAgICAvLyB0aGUgYmVsb3cgY29kZSBmb3IgdGhlIGNhcmQgaXMgdGFrZW4gZnJvbSB0aGUgc2VtYW50aWMtdWkgZG9jcyB0aGV5IGhhdmUgZ29vZCBkb2NzIGhhdmUgYSBsb29rXHJcbiAgICAvL2FkZHJlc3MgaGVyZSBpcyBub3RoaW5nIGJ1dCB0aGUgcGxhY2Ugd2hlcmUgdGhhdCBhZGRyZXNzIGlzIHBsYWNlZC5cclxuICAgIHJlbmRlckNhbXBhaWducygpe1xyXG4gICAgICAgIHZhciBpdGVtcz1bXTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnByb3BzLmNhbXBhaWduT2JqZWN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHRoaXMucHJvcHMuY2FtcGFpZ25PYmplY3RbaV0ub3JnTmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmNhbXBhaWduT2JqZWN0W2ldLmFkZHJlc3N9YH0+PGE+VmlldyBPcmdhbml6YXRpb248L2E+PC9MaW5rPixcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtcyk7XHJcbiAgICAgICAgLy8gY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PntcclxuICAgICAgICAvLyAgICAgcmV0dXJue1xyXG4gICAgICAgIC8vICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgIC8vICAgICAgICAgZGVzY3JpcHRpb246IDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+PGE+VmlldyBPcmdhbml6YXRpb248L2E+PC9MaW5rPixcclxuICAgICAgICAvLyAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvLyBzdGFydCByZWFkaW5nIGZyb20gaGVyZSBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyB3ZSBhcmUgdGFraW5nIHdyYXBwaW5nIHRoZSBkYXRhIGluc2lkZSB0aGUgZGl2IHRvIHRoZSBsYXlvdXQgYW5kIHRoaXMgZW50aXJlIGRpdiB3aWxsIGJlIHBhc3NlZCBhc1xyXG4gICAgICAgICAgICAvL2NoaWxkcmVuIHRvIHRoZSBsYXlvdXQgLlxyXG4gICAgICAgICAgICAvL3RoaXMgaXMga2luZCBvZiBmcmFnbWVudCB3aGVyZSBsYXlvdXQgaXMgdGhlIHBhcmVudCBhbmQgdGhlIGRhdGEgaW5zaWRlIHRoZSBsYXlvdXQgaXMgXHJcbiAgICAgICAgICAgIC8vIHRoZSBjaGlsZHJlbnMgd2hpY2ggd2lsbCBiZSBrZWVwIHN3YXBwaW5nLlxyXG5cclxuICAgICAgICAgICAgLy90aGVuIGNoZWNrIG91dCB0aGUgbGF5b3V0XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+T3JnYW5pemF0aW9uczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlRoaXMgYnV0dG9uIGNvZGUgaXMgYWdhaW4gdGFrZW4gZnJvbSBzZW1hbnRpYyB1aSBkb2N1bWVudGF0aW9uICAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbnMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIE9yZ2FuaXphdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogY2FsbGluZyB0aGUgcmVuZGVyQ2FtcGFpZ24gdG8gc2hvdyB0aGUgb3BlbiBjYW1wYWlnbiB0aGF0IHdlIGdvdCBmcm9tIHRoZSBnZXRJbml0aWFscHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgYnkgbWFraW5nIGEgY2FsbCB0byBjb250cmFjdCAqL31cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWNlbnROZXdzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBYUE7QUFiQTtBQUNBOztBQWVBO0FBTUE7QUFOQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUF6SUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBUkE7QUFDQTs7OztBQVNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZFQTtBQUNBO0FBb0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=