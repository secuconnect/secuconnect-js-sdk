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
 * The PaymentContainersDTOPrivate model module.
 * @module model/PaymentContainersDTOPrivate
 */
var PaymentContainersDTOPrivate = function () {
    /**
     * Constructs a new <code>PaymentContainersDTOPrivate</code>.
     * 
     * @alias module:model/PaymentContainersDTOPrivate
     * @class
     */

    function PaymentContainersDTOPrivate() {
        _classCallCheck(this, PaymentContainersDTOPrivate);

        this.owner = undefined;
        this.iban = undefined;
        this.bic = undefined;
    }

    /**
    * Constructs a <code>PaymentContainersDTOPrivate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersDTOPrivate} obj Optional instance to populate.
    * @return {module:model/PaymentContainersDTOPrivate} The populated <code>PaymentContainersDTOPrivate</code> instance.
    */


    _createClass(PaymentContainersDTOPrivate, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContainersDTOPrivate();

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
         * PaymentContainersDTO
         * @member {String} owner
         */


        /**
         * PaymentContainersDTO
         * @member {String} iban
         */


        /**
         * PaymentContainersDTO
         * @member {String} bic
         */

    }]);

    return PaymentContainersDTOPrivate;
}();

exports.default = PaymentContainersDTOPrivate;