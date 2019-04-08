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
 * The SmartTransactionsShipmentDetails model module.
 * @module model/SmartTransactionsShipmentDetails
 */
var SmartTransactionsShipmentDetails = function () {
    /**
     * Constructs a new <code>SmartTransactionsShipmentDetails</code>.
     * @alias module:model/SmartTransactionsShipmentDetails
     * @class
     */

    function SmartTransactionsShipmentDetails() {
        _classCallCheck(this, SmartTransactionsShipmentDetails);

        this.shipped_at = undefined;
        this.shipped_by = undefined;
        this.tracking_code = undefined;
        this.invoice_number = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsShipmentDetails} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsShipmentDetails} The populated <code>SmartTransactionsShipmentDetails</code> instance.
    */


    _createClass(SmartTransactionsShipmentDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsShipmentDetails();

                if (data.hasOwnProperty('shipped_at')) {
                    obj['shipped_at'] = _ApiClient2.default.convertToType(data['shipped_at'], 'String');
                }
                if (data.hasOwnProperty('shipped_by')) {
                    obj['shipped_by'] = _ApiClient2.default.convertToType(data['shipped_by'], 'String');
                }
                if (data.hasOwnProperty('tracking_code')) {
                    obj['tracking_code'] = _ApiClient2.default.convertToType(data['tracking_code'], 'String');
                }
                if (data.hasOwnProperty('invoice_number')) {
                    obj['invoice_number'] = _ApiClient2.default.convertToType(data['invoice_number'], 'String');
                }
            }
            return obj;
        }

        /**
         * Shipment Date
         * @member {String} shipped_at
         */


        /**
         * Parcel Provider
         * @member {String} shipped_by
         */


        /**
         * Tracking Code
         * @member {String} tracking_code
         */


        /**
         * Invoice Number
         * @member {String} invoice_number
         */

    }]);

    return SmartTransactionsShipmentDetails;
}();

exports.default = SmartTransactionsShipmentDetails;