"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampaignModel = function CampaignModel(address) {
    var _this = this;

    (0, _classCallCheck3.default)(this, CampaignModel);

    this.initilize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _this.campaignObj = (0, _campaign2.default)(_this.address);

                        _context.next = 3;
                        return _this.campaignObj.methods.manager().call();

                    case 3:
                        _this.manager = _context.sent;
                        _context.next = 6;
                        return _this.campaignObj.methods.minimumContribution().call();

                    case 6:
                        _this.minimumContribution = _context.sent;
                        _context.next = 9;
                        return _this.campaignObj.methods.approversCount().call();

                    case 9:
                        _this.approversCount = _context.sent;
                        _context.next = 12;
                        return _this.campaignObj.methods.reputationScore().call();

                    case 12:
                        _this.reputationScore = _context.sent;
                        _context.next = 15;
                        return _this.campaignObj.methods.orgName().call();

                    case 15:
                        _this.orgName = _context.sent;

                    case 16:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.address = address;
};

exports.default = CampaignModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsXFxDYW1wYWlnbk1vZGVsLmpzIl0sIm5hbWVzIjpbIkNhbXBhaWduIiwiQ2FtcGFpZ25Nb2RlbCIsImFkZHJlc3MiLCJpbml0aWxpemUiLCJjYW1wYWlnbk9iaiIsIm1ldGhvZHMiLCJtYW5hZ2VyIiwiY2FsbCIsIm1pbmltdW1Db250cmlidXRpb24iLCJhcHByb3ZlcnNDb3VudCIsInJlcHV0YXRpb25TY29yZSIsIm9yZ05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7Ozs7O0lBRXFCLEEsZ0JBUWpCLHVCQUFZLEFBQVosU0FBb0I7Z0JBQUE7O3dDQUFBOztTQUdwQixBQUhvQixxRkFHUixtQkFBQTtzRUFBQTtzQkFBQTtpREFBQTt5QkFDUjs4QkFBSyxBQUFMLGNBQW1CLHdCQUFTLE1BQUssQUFBZCxBQUFuQixBQURROzt3Q0FBQTsrQkFHYSxNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsVUFBbUMsQUFBbkMsQUFIYjs7eUJBR1I7OEJBQUssQUFIRyxtQkFBQTt3Q0FBQTsrQkFJeUIsTUFBSyxBQUFMLFlBQWlCLEFBQWpCLFFBQXlCLEFBQXpCLHNCQUErQyxBQUEvQyxBQUp6Qjs7eUJBSVI7OEJBQUssQUFKRywrQkFBQTt3Q0FBQTsrQkFLb0IsTUFBSyxBQUFMLFlBQWlCLEFBQWpCLFFBQXlCLEFBQXpCLGlCQUEwQyxBQUExQyxBQUxwQjs7eUJBS1I7OEJBQUssQUFMRywwQkFBQTt3Q0FBQTsrQkFNcUIsTUFBSyxBQUFMLFlBQWlCLEFBQWpCLFFBQXlCLEFBQXpCLGtCQUEyQyxBQUEzQyxBQU5yQjs7eUJBTVI7OEJBQUssQUFORywyQkFBQTt3Q0FBQTsrQkFPYSxNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsVUFBbUMsQUFBbkMsQUFQYjs7eUJBT1I7OEJBQUssQUFQRyxtQkFBQTs7eUJBQUE7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QUFIUSxBQUNoQjs7U0FBSyxBQUFMLFVBQWUsQUFBZixBQUNIO0E7O2tCQVZnQixBIiwiZmlsZSI6IkNhbXBhaWduTW9kZWwuanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==