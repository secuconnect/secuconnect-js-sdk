'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentCustomersProductModel = require('./PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentCustomersList model module.
 * @module model/PaymentCustomersList
 */
var PaymentCustomersList = function () {
    /**
     * Constructs a new <code>PaymentCustomersList</code>.
     * @alias module:model/PaymentCustomersList
     * @class
     */

    function PaymentCustomersList() {
        _classCallCheck(this, PaymentCustomersList);

        this.count = undefined;
        this.data = undefined;
    }

    /**
    * Constructs a <code>PaymentCustomersList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentCustomersList} obj Optional instance to populate.
    * @return {module:model/PaymentCustomersList} The populated <code>PaymentCustomersList</code> instance.
    */


    _createClass(PaymentCustomersList, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentCustomersList();

                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_PaymentCustomersProductModel2.default]);
                }
            }
            return obj;
        }

        /**
         * Number of existing payment customers
         * @member {Number} count
         */


        /**
         * GET Payment/Customers
         * @member {Array.<module:model/PaymentCustomersProductModel>} data
         */

    }]);

    return PaymentCustomersList;
}();

exports.default = PaymentCustomersList;