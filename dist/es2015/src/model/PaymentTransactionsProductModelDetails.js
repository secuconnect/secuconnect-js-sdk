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
* The PaymentTransactionsProductModelDetails model module.
* @module model/PaymentTransactionsProductModelDetails
*/
var PaymentTransactionsProductModelDetails = function () {
    /**
    * Constructs a new <code>PaymentTransactionsProductModelDetails</code>.
    * Transaction details
    * @alias module:model/PaymentTransactionsProductModelDetails
    * @class
    */

    function PaymentTransactionsProductModelDetails() {
        _classCallCheck(this, PaymentTransactionsProductModelDetails);

        this.amount = undefined;
        this.cleared = undefined;
        this.status = undefined;
        this.status_text = undefined;
        this.status_simple = undefined;
        this.status_text_simple = undefined;
        this.description = undefined;
        this.description_raw = undefined;
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModelDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModelDetails} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModelDetails} The populated <code>PaymentTransactionsProductModelDetails</code> instance.
    */


    _createClass(PaymentTransactionsProductModelDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionsProductModelDetails();

                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('cleared')) {
                    obj['cleared'] = _ApiClient2.default.convertToType(data['cleared'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'Number');
                }
                if (data.hasOwnProperty('status_text')) {
                    obj['status_text'] = _ApiClient2.default.convertToType(data['status_text'], 'String');
                }
                if (data.hasOwnProperty('status_simple')) {
                    obj['status_simple'] = _ApiClient2.default.convertToType(data['status_simple'], 'Number');
                }
                if (data.hasOwnProperty('status_text_simple')) {
                    obj['status_text_simple'] = _ApiClient2.default.convertToType(data['status_text_simple'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('description_raw')) {
                    obj['description_raw'] = _ApiClient2.default.convertToType(data['description_raw'], 'String');
                }
            }
            return obj;
        }

        /**
        * Total amount of payment in cents (or the smallest cash unit of the relevant currency)
        * @member {Number} amount
        */

        /**
        * Clearing status
        * @member {String} cleared
        */

        /**
        * Transaction status ID
        * @member {Number} status
        */

        /**
        * Transaction status description
        * @member {String} status_text
        */

        /**
        * Transaction simple-status ID
        * @member {Number} status_simple
        */

        /**
        * Transaction simple-status description
        * @member {String} status_text_simple
        */

        /**
        * Transaction description
        * @member {String} description
        */

        /**
        * Transaction description (plain text)
        * @member {String} description_raw
        */

    }]);

    return PaymentTransactionsProductModelDetails;
}();

exports.default = PaymentTransactionsProductModelDetails;