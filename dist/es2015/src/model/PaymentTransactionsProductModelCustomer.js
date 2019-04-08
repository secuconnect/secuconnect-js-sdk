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
 * The PaymentTransactionsProductModelCustomer model module.
 * @module model/PaymentTransactionsProductModelCustomer
 */
var PaymentTransactionsProductModelCustomer = function () {
    /**
     * Constructs a new <code>PaymentTransactionsProductModelCustomer</code>.
     * PaymentTransactionsProductModel
     * @alias module:model/PaymentTransactionsProductModelCustomer
     * @class
     */

    function PaymentTransactionsProductModelCustomer() {
        _classCallCheck(this, PaymentTransactionsProductModelCustomer);

        this.companyname = undefined;
        this.salutation = undefined;
        this.title = undefined;
        this.forename = undefined;
        this.surname = undefined;
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModelCustomer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModelCustomer} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModelCustomer} The populated <code>PaymentTransactionsProductModelCustomer</code> instance.
    */


    _createClass(PaymentTransactionsProductModelCustomer, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionsProductModelCustomer();

                if (data.hasOwnProperty('companyname')) {
                    obj['companyname'] = _ApiClient2.default.convertToType(data['companyname'], 'String');
                }
                if (data.hasOwnProperty('salutation')) {
                    obj['salutation'] = _ApiClient2.default.convertToType(data['salutation'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('forename')) {
                    obj['forename'] = _ApiClient2.default.convertToType(data['forename'], 'String');
                }
                if (data.hasOwnProperty('surname')) {
                    obj['surname'] = _ApiClient2.default.convertToType(data['surname'], 'String');
                }
            }
            return obj;
        }

        /**
         * Customer company name
         * @member {String} companyname
         */


        /**
         * Customer salutation
         * @member {String} salutation
         */


        /**
         * Customer title
         * @member {String} title
         */


        /**
         * Customer forename
         * @member {String} forename
         */


        /**
         * Customer surname
         * @member {String} surname
         */

    }]);

    return PaymentTransactionsProductModelCustomer;
}();

exports.default = PaymentTransactionsProductModelCustomer;