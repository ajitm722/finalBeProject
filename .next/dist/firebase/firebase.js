"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadDB = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var _storage = require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var loadDB = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var firebaseConfig, app, firestore, storage;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        firebaseConfig = {
                            apiKey: "AIzaSyBgMM7f6G8BbLpGRRyn-adJIp9SXhucScg",
                            authDomain: "beproject-b8b64.firebaseapp.com",
                            projectId: "beproject-b8b64",
                            storageBucket: "beproject-b8b64.appspot.com",
                            messagingSenderId: "1025134775840",
                            appId: "1:1025134775840:web:21348ef5ea4794fa0b7645",
                            measurementId: "G-J534FWW8K3"
                        };

                        // Initialize Firebase

                        app = (0, _app.initializeApp)(firebaseConfig);
                        firestore = (0, _firestore.getFirestore)();
                        storage = (0, _storage.getStorage)();
                        return _context.abrupt("return", { storage: storage, firestore: firestore });

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function loadDB() {
        return _ref.apply(this, arguments);
    };
}();
exports.loadDB = loadDB;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlXFxmaXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0U3RvcmFnZSIsImxvYWREQiIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxBQUFROzs7Ozs7QUFKUjs7QUFLQTtBQUNBOztBQUVBLElBQU0scUJBQUE7d0ZBQVMsbUJBQUE7NENBQUE7c0VBQUE7c0JBQUE7aURBQUE7eUJBQ0w7QUFESztvQ0FDWSxBQUNYLEFBQ1I7d0NBRm1CLEFBRVAsQUFDWjt1Q0FIbUIsQUFHUixBQUNYOzJDQUptQixBQUlKLEFBQ2Y7K0NBTG1CLEFBS0EsQUFDbkI7bUNBTm1CLEFBTVosQUFDUDsyQ0FSTyxBQUNZLEFBT0osQUFHakI7QUFWcUIsQUFDbkI7O0FBVUk7O0FBWkcsOEJBWUcsd0JBWkgsQUFZRyxBQUFjLEFBQ3BCO0FBYkcsb0NBQUEsQUFhUyxBQUNaO0FBZEcsa0NBQUEsQUFjTzt5REFDVCxFQUFDLFNBQUQsU0FBVSxXQWZSLEFBZUY7O3lCQWZFO3lCQUFBO3dDQUFBOztBQUFBO29CQUFBO0FBQVQ7OzZCQUFBO2dDQUFBO0FBQUE7QUFBTixBQWlCQTtRQUFBLEFBQVEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==