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
* The SecupayTransactionSetShippingInformationDTO model module.
* @module model/SecupayTransactionSetShippingInformationDTO
*/
var SecupayTransactionSetShippingInformationDTO = function () {
    /**
    * Constructs a new <code>SecupayTransactionSetShippingInformationDTO</code>.
    * @alias module:model/SecupayTransactionSetShippingInformationDTO
    * @class
    */

    function SecupayTransactionSetShippingInformationDTO() {
        _classCallCheck(this, SecupayTransactionSetShippingInformationDTO);

        this.carrier = undefined;
        this.tracking_id = undefined;
        this.invoice_number = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionSetShippingInformationDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionSetShippingInformationDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionSetShippingInformationDTO} The populated <code>SecupayTransactionSetShippingInformationDTO</code> instance.
    */


    _createClass(SecupayTransactionSetShippingInformationDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionSetShippingInformationDTO();

                if (data.hasOwnProperty('carrier')) {
                    obj['carrier'] = _ApiClient2.default.convertToType(data['carrier'], 'String');
                }
                if (data.hasOwnProperty('tracking_id')) {
                    obj['tracking_id'] = _ApiClient2.default.convertToType(data['tracking_id'], 'String');
                }
                if (data.hasOwnProperty('invoice_number')) {
                    obj['invoice_number'] = _ApiClient2.default.convertToType(data['invoice_number'], 'String');
                }
            }
            return obj;
        }

        /**
        * Shipping provider name
        * @member {String} carrier
        */

        /**
        * Tracking-ID
        * @member {String} tracking_id
        */

        /**
        * Merchants invoice number
        * @member {String} invoice_number
        */

    }]);

    return SecupayTransactionSetShippingInformationDTO;
}();

exports.default = SecupayTransactionSetShippingInformationDTO;