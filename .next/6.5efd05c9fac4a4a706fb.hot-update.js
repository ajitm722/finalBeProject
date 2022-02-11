webpackHotUpdate(6,{

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _campaign = __webpack_require__(1682);

var _campaign2 = _interopRequireDefault(_campaign);

var _storage = __webpack_require__(1680);

var _firebase = __webpack_require__(1676);

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

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\blockchain\\beproj\\model\\CampaignModel.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\blockchain\\beproj\\model\\CampaignModel.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi41ZWZkMDVjOWZhYzRhNGE3MDZmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWwvQ2FtcGFpZ25Nb2RlbC5qcz8yNWQ4OWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCBnZXREb3dubG9hZFVSTCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7bG9hZERCfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbXBhaWduTW9kZWx7XHJcbiAgICBtYW5hZ2VyO1xyXG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjtcclxuICAgIGFwcHJvdmVyc0NvdW50O1xyXG4gICAgcmVwdXRhdGlvblNjb3JlO1xyXG4gICAgYWRkcmVzcztcclxuICAgIG9yZ05hbWU7XHJcbiAgICBjYW1wYWlnbk9iajtcclxuICAgIGltYWdlVXJsO1xyXG4gICAgY29uc3RydWN0b3IoYWRkcmVzcyl7XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgIH1cclxuICAgIGluaXRpbGl6ZSA9IGFzeW5jKCkgPT57XHJcbiAgICAgICAgdGhpcy5jYW1wYWlnbk9iaiA9IENhbXBhaWduKHRoaXMuYWRkcmVzcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gYXdhaXQgdGhpcy5jYW1wYWlnbk9iai5tZXRob2RzLm1hbmFnZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgdGhpcy5taW5pbXVtQ29udHJpYnV0aW9uID0gYXdhaXQgdGhpcy5jYW1wYWlnbk9iai5tZXRob2RzLm1pbmltdW1Db250cmlidXRpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgdGhpcy5hcHByb3ZlcnNDb3VudCA9IGF3YWl0IHRoaXMuY2FtcGFpZ25PYmoubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuICAgICAgICB0aGlzLnJlcHV0YXRpb25TY29yZSA9IGF3YWl0IHRoaXMuY2FtcGFpZ25PYmoubWV0aG9kcy5yZXB1dGF0aW9uU2NvcmUoKS5jYWxsKCk7XHJcbiAgICAgICAgdGhpcy5vcmdOYW1lID0gYXdhaXQgdGhpcy5jYW1wYWlnbk9iai5tZXRob2RzLm9yZ05hbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGxvYWREQigpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJzUmVmID0gcmVmKHN0b3JhZ2UsIGBpbWFnZXMvJHt0aGlzLm1hbmFnZXJ9YCk7XHJcbiAgICAgICAgZ2V0RG93bmxvYWRVUkwoc3RhcnNSZWYpXHJcbiAgICAgICAgLnRoZW4oKHVybCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZSB1cmwgZnJvbSBtb2RlbCBcIisgdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHVybDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZGVsL0NhbXBhaWduTW9kZWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFOQTtBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBUEE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUFBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQVhBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQURBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=