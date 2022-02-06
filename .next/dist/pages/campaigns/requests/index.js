"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\blockchain\\beproj\\pages\\campaigns\\requests\\index.js?entry";


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: "renderRows",

        //used to render row for each request
        value: function renderRows() {
            var _this2 = this;

            return this.props.myrequests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    request: request,
                    address: _this2.props.address,
                    id: index,
                    totalApproversCount: _this2.props.totalApproversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, "Requests "), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, "Add Request"))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, "ID"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, "Amount"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, "Recipient"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, "Voted/Total"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, "Approve"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, "Disapprove"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, this.renderRows())), _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, "Found ", this.props.requestCount, " requests"));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, myrequests, i, currReq, totalApproversCount;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;

                                console.log(address);
                                campaign = (0, _campaign2.default)(address);

                                //total number of news

                                _context.next = 5;
                                return campaign.methods.getRequestCount().call();

                            case 5:
                                requestCount = _context.sent;

                                console.log(requestCount);

                                myrequests = [];
                                i = 0;

                            case 9:
                                if (!(i < requestCount)) {
                                    _context.next = 17;
                                    break;
                                }

                                _context.next = 12;
                                return campaign.methods.requests(i).call();

                            case 12:
                                currReq = _context.sent;

                                myrequests.push(currReq);

                            case 14:
                                i++;
                                _context.next = 9;
                                break;

                            case 17:
                                console.log(myrequests);

                                //this is some fancy js inshort it gets us all the request from our contract
                                //we have to use this because solidity doesnt have facility to return Request struct
                                // const requests = await Promise.all(
                                //     Array(requestCount).fill().map((element, index)=>{
                                //         return campaign.methods.requests(index).call()
                                //     })
                                // );
                                // const first = await campaign.methods.requests(1).call();
                                // console.log(first);
                                // // getting the total number of approvers for the approval count column in request row
                                _context.next = 20;
                                return campaign.methods.approversCount().call();

                            case 20:
                                totalApproversCount = _context.sent;
                                return _context.abrupt("return", { address: address, requestCount: requestCount, myrequests: myrequests, totalApproversCount: totalApproversCount });

                            case 22:
                            case "end":
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

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkxpbmsiLCJDYW1wYWlnbiIsIkljb24iLCJMYWJlbCIsIk1lbnUiLCJUYWJsZSIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsIm15cmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwidG90YWxBcHByb3ZlcnNDb3VudCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiaSIsInJlcXVlc3RzIiwiY3VyclJlcSIsInB1c2giLCJhcHByb3ZlcnNDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjLEFBQ3JCLEFBQVMsQUFBTSxBQUFPLEFBQU07Ozs7QUFDNUIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7YUFvQ0Y7OztxQ0FDWTt5QkFDUjs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUSxBQUMvQzt1Q0FDSSxBQUFDO3lCQUFELEFBQ1MsQUFDTDs2QkFGSixBQUVhLEFBQ1Q7NkJBQVMsT0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCO3dCQUpKLEFBSVEsQUFDSjt5Q0FBcUIsT0FBQSxBQUFLLE1BTDlCLEFBS29DOztrQ0FMcEM7b0NBREosQUFDSSxBQVFQO0FBUk87QUFDSSxpQkFESjtBQUZSLEFBQU8sQUFXVixhQVhVOzs7O2lDQWFILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOEJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUMsY0FBeEMsQUFBdUMsQUFBZTs4QkFBdEQ7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBS1Isa0NBQUEsQUFBQyx3Q0FBTSxRQUFQOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsZ0NBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFMSixBQUtJLEFBQ0EsZ0NBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFUWixBQUNJLEFBQ0ksQUFPSSxBQUlSLGlDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBdEJSLEFBU0ksQUFhSSxBQUNLLEFBQUssQUFJZCxnQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDVyxlQUFBLEFBQUssTUFEaEIsQUFDc0IsY0E3QjlCLEFBQ0ksQUEyQkksQUFTWDs7Ozs7aUgsQUF2RjRCOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTUFDMUIsQSxBQURROzt3Q0FDUixBQUFRLElBQVIsQUFBWSxBQUNOO0EsMkNBQVcsd0IsQUFBQSxBQUFTLEFBRTFCOzs7Ozt1Q0FDMkIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0IsQUFBakIsQUFBbUM7O2lDQUF4RDtBLHdEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUVSOztBLDZDQUVJLEEsQUFGUztBLG9DLEFBRVA7OztzQ0FBRyxJLEFBQUU7Ozs7Ozt1Q0FDVyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixHLEFBQTFCLEFBQTZCOztpQ0FBN0M7QSxtREFDTjs7MkNBQUEsQUFBVyxLQUFYLEFBQWdCOztpQ0FGUztBOzs7O2lDQUk3Qjt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O3VDQUNrQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7aUNBQTlEO0E7aUVBSUMsRUFBRSxTQUFGLFNBQVcsY0FBWCxjQUF5QixZQUF6QixZQUFxQyxxQixBQUFyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEZixBLEFBNUYyQjs7a0JBNEYzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2Jsb2NrY2hhaW4vYmVwcm9qIn0=