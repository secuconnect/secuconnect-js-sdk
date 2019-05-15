'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Contact = require('./Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentCustomersDTO model module.
 * @module model/PaymentCustomersDTO
 */
var PaymentCustomersDTO = function () {
    /**
     * Constructs a new <code>PaymentCustomersDTO</code>.
     * @alias module:model/PaymentCustomersDTO
     * @class
     */

    function PaymentCustomersDTO() {
        _classCallCheck(this, PaymentCustomersDTO);

        this.contact = undefined;
    }

    /**
    * Constructs a <code>PaymentCustomersDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentCustomersDTO} obj Optional instance to populate.
    * @return {module:model/PaymentCustomersDTO} The populated <code>PaymentCustomersDTO</code> instance.
    */


    _createClass(PaymentCustomersDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentCustomersDTO();

                if (data.hasOwnProperty('contact')) {
                    obj['contact'] = _Contact2.default.constructFromObject(data['contact']);
                }
            }
            return obj;
        }

        /**
         * PaymentCustomersDTO
         * @member {module:model/Contact} contact
         */

    }]);

    return PaymentCustomersDTO;
}();

exports.default = PaymentCustomersDTO;