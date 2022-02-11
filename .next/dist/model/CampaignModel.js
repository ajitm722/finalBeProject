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

var _storage = require("firebase/storage");

var _firebase = require("../firebase/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampaignModel = function CampaignModel(address) {
    var _this = this;

    (0, _classCallCheck3.default)(this, CampaignModel);

    this.initilize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var storage, starsRef;
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
                        _context.next = 18;
                        return (0, _firebase.loadDB)();

                    case 18:
                        storage = _context.sent;
                        starsRef = (0, _storage.ref)(storage, "images/" + _this.manager);

                        (0, _storage.getDownloadURL)(starsRef).then(function (url) {
                            console.log("image url from model " + url);
                            _this.imageUrl = url;
                        }).catch(function (err) {
                            console.log(err);
                        });

                    case 21:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.address = address;
};

exports.default = CampaignModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsXFxDYW1wYWlnbk1vZGVsLmpzIl0sIm5hbWVzIjpbIkNhbXBhaWduIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwibG9hZERCIiwiQ2FtcGFpZ25Nb2RlbCIsImFkZHJlc3MiLCJpbml0aWxpemUiLCJjYW1wYWlnbk9iaiIsIm1ldGhvZHMiLCJtYW5hZ2VyIiwiY2FsbCIsIm1pbmltdW1Db250cmlidXRpb24iLCJhcHByb3ZlcnNDb3VudCIsInJlcHV0YXRpb25TY29yZSIsIm9yZ05hbWUiLCJzdG9yYWdlIiwic3RhcnNSZWYiLCJ0aGVuIiwidXJsIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwiY2F0Y2giLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7OztBQUNBLEFBQVMsQUFBVCxBQUFxQixBQUFyQixBQUEwQixBQUExQjs7QUFDQSxBQUFRLEFBQVIsQUFBcUIsQUFBckI7Ozs7SUFFcUIsQSxnQkFTakIsdUJBQVksQUFBWixTQUFvQjtnQkFBQTs7d0NBQUE7O1NBR3BCLEFBSG9CLHFGQUdSLG1CQUFBO3FCQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUNSOzhCQUFLLEFBQUwsY0FBbUIsd0JBQVMsTUFBSyxBQUFkLEFBQW5CLEFBRFE7O3dDQUFBOytCQUdhLE1BQUssQUFBTCxZQUFpQixBQUFqQixRQUF5QixBQUF6QixVQUFtQyxBQUFuQyxBQUhiOzt5QkFHUjs4QkFBSyxBQUhHLG1CQUFBO3dDQUFBOytCQUl5QixNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsc0JBQStDLEFBQS9DLEFBSnpCOzt5QkFJUjs4QkFBSyxBQUpHLCtCQUFBO3dDQUFBOytCQUtvQixNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsaUJBQTBDLEFBQTFDLEFBTHBCOzt5QkFLUjs4QkFBSyxBQUxHLDBCQUFBO3dDQUFBOytCQU1xQixNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsa0JBQTJDLEFBQTNDLEFBTnJCOzt5QkFNUjs4QkFBSyxBQU5HLDJCQUFBO3dDQUFBOytCQU9hLE1BQUssQUFBTCxZQUFpQixBQUFqQixRQUF5QixBQUF6QixVQUFtQyxBQUFuQyxBQVBiOzt5QkFPUjs4QkFBSyxBQVBHLG1CQUFBO3dDQUFBOytCQVFjLEFBUmQ7O3lCQVFGO0FBUkUsMkNBU0Y7QUFURSxtQ0FTUyxrQkFBSSxBQUFKLHFCQUF1QixNQUFLLEFBQTVCLEFBVFQsQUFVUjs7cURBQWUsQUFBZixVQUNDLEFBREQsS0FDTSxVQUFDLEFBQUQsS0FBTyxBQUNUO29DQUFRLEFBQVIsSUFBWSwwQkFBeUIsQUFBckMsQUFDQTtrQ0FBSyxBQUFMLFdBQWdCLEFBQWhCLEFBQ0g7QUFKRCwyQkFLQyxBQUxELE1BS08sVUFBQyxBQUFELEtBQU8sQUFDVjtvQ0FBUSxBQUFSLElBQVksQUFBWixBQUNIO0FBUEQsQUFWUTs7eUJBQUE7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QUFIUSxBQUNoQjs7U0FBSyxBQUFMLFVBQWUsQUFBZixBQUNIO0E7O2tCQVhnQixBIiwiZmlsZSI6IkNhbXBhaWduTW9kZWwuanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==