'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _firebase = require('../../firebase/firebase');

var _firestore = require('firebase/firestore');

var _storage = require('firebase/storage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\pages\\campaigns\\new.js?entry';
// as this file is in the campaign/new.js then the url will be 
// https://crowdcoin/campaign/new

//there are hell lot of things in this area read carefully

var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            // error message is used when the used enters some invalid input in the text box or anything wrong
            errorMessage: '',
            // this is used to show the user that the transaction is processing 
            loading: false,
            title: "",
            orgImg: "",
            orgImgUrl: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, storage, reference, uploadTask;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.prev = 1;

                                //turn on the spinner to show we are performing the transactions
                                _this.setState({ loading: true, errorMessage: '' });
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;

                                console.log(accounts[0]);
                                if (_this.state.orgImg === '') {
                                    console.error('not an image, the image file is a ' + (0, _typeof3.default)(_this.state.orgImg));
                                }
                                console.log("came till here");

                                //upload image to firebase storage then get the url then add this to firestore organization collections
                                _context.next = 11;
                                return (0, _firebase.loadDB)();

                            case 11:
                                storage = _context.sent;

                                console.log("now upload will start");
                                reference = (0, _storage.ref)(storage, '/images/' + accounts[0]);
                                uploadTask = (0, _storage.uploadBytesResumable)(reference, _this.state.orgImg);

                                uploadTask.on('state_changed', function (snapshot) {
                                    console.log(snapshot);
                                }, function (err) {
                                    console.log("while uploading" + err);
                                }, function () {
                                    (0, _storage.getDownloadURL)(uploadTask.snapshot.ref).then(function (fireBaseUrl) {
                                        console.log(fireBaseUrl);
                                        _this.setState({ orgImgUrl: fireBaseUrl });
                                    });
                                });
                                console.log("orgImgUrl is: " + _this.state.orgImgUrl);
                                // now here we can create a campaign by using the createCampaign function in our campaign factory contract
                                // we are sending a transaction in here
                                _context.next = 19;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.title).send({
                                    from: accounts[0]
                                });

                            case 19:
                                //immediately after we sucessfully created the campaign we want o redirect to root 
                                _routes.Router.pushRoute('/');

                                _context.next = 25;
                                break;

                            case 22:
                                _context.prev = 22;
                                _context.t0 = _context['catch'](1);

                                // when ever we get an error we can change the errorMessage state property which will indeed 
                                // let the page reload and show some messge to the used so that user can come to know what went wrong
                                _this.setState({ errorMessage: _context.t0.message });

                            case 25:

                                _this.setState({ loading: false });

                            case 26:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 22]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    //this state is defined when we created form
    //whenever the user canges the minimum contribution input then we want our page to be re rendered

    //this onSubmit is used when the form will be submitted


    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, this.state.minimumContribution, ' ', this.state.title, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Create A Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                placeholder: 'Enter minimum contribution'

                // this value is been attatched with the state minimum contribution as this will help 
                //render our page whenever the value is changes the minimumContribution gets the value of 
                //event.target.value
                , value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, 'Title'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'Text',
                labelPosition: 'right',
                placeholder: 'Enter title'

                // this value is been attatched with the state minimum contribution as this will help 
                //render our page whenever the value is changes the minimumContribution gets the value of 
                //event.target.value
                , value: this.state.title,
                onChange: function onChange(event) {
                    return _this3.setState({ title: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, 'Title'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'Text',
                labelPosition: 'right',
                placeholder: 'add file',
                type: 'file'
                // this value is been attatched with the state minimum contribution as this will help 
                //render our page whenever the value is changes the minimumContribution gets the value of 
                //event.target.value
                , onChange: function onChange(event) {
                    return _this3.setState({ orgImg: event.target.files[0] });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops!',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.loading,
                type: 'submit', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwibG9hZERCIiwiY29sbGVjdGlvbiIsInJlZiIsInVwbG9hZEJ5dGVzUmVzdW1hYmxlIiwiZ2V0RG93bmxvYWRVUkwiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJ0aXRsZSIsIm9yZ0ltZyIsIm9yZ0ltZ1VybCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0b3JhZ2UiLCJyZWZlcmVuY2UiLCJ1cGxvYWRUYXNrIiwib24iLCJzbmFwc2hvdCIsImVyciIsInRoZW4iLCJmaXJlQmFzZVVybCIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUVuQixBQUFTLEFBQVEsQUFBVSxBQUMzQixBQUFTLEFBQ1QsQUFBUzs7QUFHVCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQVMsQUFBYzs7QUFFdkIsQUFBUSxBQUFhOztBQUNyQixBQUFTOztBQUNULEFBQVMsQUFBSyxBQUFzQjs7Ozs7QUFwQnBDO0FBQ0E7O0FBRUE7O0ksQUFtQk07Ozs7Ozs7Ozs7Ozs7OzswTixBQUlGO2lDQUFNLEFBQ2tCLEFBQ3BC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QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDs2QkFBWSxBQUVaOztBQUNBO0FBQ0E7QUFQSjtBQUNJLGtCQU9BLE9BQVMsS0FBQSxBQUFLLE1BUmxCLEFBUXdCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFqRCxBQUFPLEFBQWMsQUFBbUM7QUFUdEU7OzhCQUFBO2dDQVpSLEFBUUksQUFJSSxBQWFKO0FBYkk7aUNBYUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsMEJBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDs2QkFBWSxBQUVaOztBQUNBO0FBQ0E7QUFQSjtBQUNJLGtCQU9BLE9BQVMsS0FBQSxBQUFLLE1BUmxCLEFBUXdCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBbkMsQUFBTyxBQUFjLEFBQXFCO0FBVHhEOzs4QkFBQTtnQ0E3QlIsQUF5QkksQUFJSSxBQWFKO0FBYkk7aUNBYUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsMEJBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDs2QkFISixBQUdnQixBQUNaO3NCQUFLLEFBQ0w7QUFDQTtBQUNBO0FBUEo7QUFDSSxrQkFPQSxVQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsUUFBUSxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQTNDLEFBQU8sQUFBYyxBQUFTLEFBQW1CO0FBUi9EOzs4QkFBQTtnQ0E5Q1IsQUEwQ0ksQUFJSSxBQWVKO0FBZkk7aUNBZUosQUFBQzt1QkFBRCxBQUVJO3dCQUZKLEFBRVcsQUFDUDt5QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0I7OzhCQUh4QjtnQ0E3REosQUE2REksQUFPQTtBQVBBO0FBQ0ksZ0NBTUosQUFBQzt5QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7c0JBRkosQUFFUyxVQUFTLFNBRmxCOzhCQUFBO2dDQUFBO0FBQUE7QUFDSSxlQTVFaEIsQUFDSSxBQU1JLEFBb0VJLEFBVWY7Ozs7O0EsQUE3SnFCLEFBZ0sxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==