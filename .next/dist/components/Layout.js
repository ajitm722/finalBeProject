'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\beproj\\components\\Layout.js';

// this head tag allows us to put the data in the head section of html document

//here props is the children or the data inside layout tag in the index.js or any other file that uses layout
exports.default = function (props) {
    return (

        // This container is again from semantic ui this container is used to wrap around the data to a max width
        _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        }, _react2.default.createElement(_head2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css', integrity: 'sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==', crossOrigin: 'anonymous', referrerPolicy: 'no-referrer', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            }
        })), _react2.default.createElement(_Header2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }), props.children)
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkhlYWQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBR1QsQUFBTzs7Ozs7Ozs7QUFEUDs7QUFHQSxBQUNBO2tCQUFlLGlCQUFTLEFBQ3BCO0FBRUk7O0FBQ0E7d0JBQUEsQUFBQzs7MEJBQUQ7NEJBQUEsQUFLSTtBQUxKO0FBQUEsMkJBS0ksQUFBQzs7MEJBQUQ7NEJBQUEsQUFDSTtBQURKO0FBQUEsbURBQ1UsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsNkVBQTRFLFdBQXhHLEFBQWtILG1HQUFrRyxhQUFwTixBQUFnTyxhQUFZLGdCQUE1TyxBQUEyUDswQkFBM1A7NEJBTlIsQUFLSSxBQUNJLEFBS0o7QUFMSTs2QkFLSixBQUFDOzswQkFBRDs0QkFYSixBQVdJLEFBRUM7QUFGRDtBQUFBLGtCQWRSLEFBR0ksQUFhVyxBQUdsQjs7QUFwQkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L2Jsb2NrY2hhaW4vYmVwcm9qIn0=