'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Printer2 = require('./Printer');

var _Printer3 = _interopRequireDefault(_Printer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImitationDevicePrinter = function (_Printer) {
    _inherits(ImitationDevicePrinter, _Printer);

    function ImitationDevicePrinter() {
        _classCallCheck(this, ImitationDevicePrinter);

        return _possibleConstructorReturn(this, (ImitationDevicePrinter.__proto__ || Object.getPrototypeOf(ImitationDevicePrinter)).apply(this, arguments));
    }

    _createClass(ImitationDevicePrinter, [{
        key: 'printUserCode',

        /**
         * Function to print user code for imitation device from an obtained token.
         *
         * @param token
         */
        value: function printUserCode(token) {
            if (token.user_code === undefined || token.verification_url === undefined) {
                console.log('Something went wrong. Please try to obtain user code again.');
            } else {
                console.log('Your user code is: ' + token.user_code + '\n' + 'Your verification url is: ' + token.verification_url + '\n');
            }
        }
    }]);

    return ImitationDevicePrinter;
}(_Printer3.default);

exports.default = ImitationDevicePrinter;