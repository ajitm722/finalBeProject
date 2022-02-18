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

var _firestore = require('firebase/firestore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _firebase = require('../firebase/firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\components\\RecentNews.js';


var RecentNews = function (_React$Component) {
  (0, _inherits3.default)(RecentNews, _React$Component);

  function RecentNews() {
    (0, _classCallCheck3.default)(this, RecentNews);

    return (0, _possibleConstructorReturn3.default)(this, (RecentNews.__proto__ || (0, _getPrototypeOf2.default)(RecentNews)).apply(this, arguments));
  }

  (0, _createClass3.default)(RecentNews, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Next stars: ', this.props.recentNews);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var storageAndFirestore, collectionRef, q, recentNews, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _firebase.loadDB)();

              case 2:
                storageAndFirestore = _context.sent;

                console.log("connecting to firestore");
                collectionRef = (0, _firestore.collection)(storageAndFirestore.firestore, "recentNews");
                q = (0, _firestore.query)(collectionRef, (0, _firestore.orderBy)("timestamp", "desc"));
                recentNews = [];
                data = (0, _firestore.onSnapshot)(q, function (QuerySnapshot) {
                  recentNews.push(QuerySnapshot);
                });
                return _context.abrupt('return', { recentNews: recentNews });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RecentNews;
}(_react2.default.Component);

exports.default = RecentNews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlY2VudE5ld3MuanMiXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImxpbWl0Iiwib25TbmFwc2hvdCIsIm9yZGVyQnkiLCJxdWVyeSIsIlF1ZXJ5U25hcHNob3QiLCJSZWFjdCIsImxvYWREQiIsIlJlY2VudE5ld3MiLCJwcm9wcyIsInJlY2VudE5ld3MiLCJzdG9yYWdlQW5kRmlyZXN0b3JlIiwiY29uc29sZSIsImxvZyIsImNvbGxlY3Rpb25SZWYiLCJmaXJlc3RvcmUiLCJxIiwiZGF0YSIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVksQUFBTyxBQUFZLEFBQVMsQUFBTzs7QUFDeEQsQUFBTzs7OztBQUNQLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs2QkFhSyxBQUNQOzZCQUFPLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBQWtCLHFCQUFBLEFBQUssTUFBOUIsQUFBTyxBQUE2QixBQUNyQzs7Ozs7Ozs7Ozs7O3VCLEFBYm1DOzttQkFBNUI7QSwrQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBLGdDQUFnQiwyQkFBVyxvQkFBWCxBQUErQixXLEFBQS9CLEFBQTBDLEFBQzFEO0Esb0JBQUksc0JBQUEsQUFBTSxlQUFlLHdCQUFBLEFBQVEsYSxBQUE3QixBQUFxQixBQUFxQixBQUM5QztBLDZCLEFBQWEsQUFDYjtBLGtEQUFPLEFBQVcsR0FBRyxVQUFBLEFBQUMsZUFBZ0IsQUFDeEM7NkJBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ25CO0EsQUFGWSxpQkFBQTtpREFHTixFQUFFLFksQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVZjLGdCLEFBQU0sQUFrQi9COztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlY2VudE5ld3MuanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==