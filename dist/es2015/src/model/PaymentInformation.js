'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentInformation model module.
* @module model/PaymentInformation
*/
var PaymentInformation = function () {
    /**
    * Constructs a new <code>PaymentInformation</code>.
    * Payment information
    * @alias module:model/PaymentInformation
    * @class
    */

    function PaymentInformation() {
        _classCallCheck(this, PaymentInformation);

        this.owner = undefined;
        this.iban = undefined;
        this.bic = undefined;
    }

    /**
    * Constructs a <code>PaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentInformation} obj Optional instance to populate.
    * @return {module:model/PaymentInformation} The populated <code>PaymentInformation</code> instance.
    */


    _createClass(PaymentInformation, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentInformation();

                if (data.hasOwnProperty('owner')) {
                    obj['owner'] = _ApiClient2.default.convertToType(data['owner'], 'String');
                }
                if (data.hasOwnProperty('iban')) {
                    obj['iban'] = _ApiClient2.default.convertToType(data['iban'], 'String');
                }
                if (data.hasOwnProperty('bic')) {
                    obj['bic'] = _ApiClient2.default.convertToType(data['bic'], 'String');
                }
            }
            return obj;
        }

        /**
        * Owner
        * @member {String} owner
        */

        /**
        * IBAN
        * @member {String} iban
        */

        /**
        * BIC
        * @member {String} bic
        */

    }]);

    return PaymentInformation;
}();

exports.default = PaymentInformation;