'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _BankAccountDescriptor = require('./BankAccountDescriptor');

var _BankAccountDescriptor2 = _interopRequireDefault(_BankAccountDescriptor);

var _PaymentContainerMandate = require('./PaymentContainerMandate');

var _PaymentContainerMandate2 = _interopRequireDefault(_PaymentContainerMandate);

var _PaymentContractsProductModel = require('./PaymentContractsProductModel');

var _PaymentContractsProductModel2 = _interopRequireDefault(_PaymentContractsProductModel);

var _PaymentCustomersProductModel = require('./PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentContainersProductModel model module.
 * @module model/PaymentContainersProductModel
 */
var PaymentContainersProductModel = function () {
    /**
     * Constructs a new <code>PaymentContainersProductModel</code>.
     * @alias module:model/PaymentContainersProductModel
     * @class
     */

    function PaymentContainersProductModel() {
        _classCallCheck(this, PaymentContainersProductModel);

        this.object = undefined;
        this.id = undefined;
        this.contract = undefined;
        this.customer = undefined;
        this.assign = undefined;
        this.type = undefined;
        this.public = undefined;
        this.private = undefined;
        this.created = undefined;
        this.updated = undefined;
        this.mandate = undefined;
    }

    /**
    * Constructs a <code>PaymentContainersProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentContainersProductModel} The populated <code>PaymentContainersProductModel</code> instance.
    */


    _createClass(PaymentContainersProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContainersProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _PaymentContractsProductModel2.default.constructFromObject(data['contract']);
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('assign')) {
                    obj['assign'] = _ProductInstanceUID2.default.constructFromObject(data['assign']);
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('public')) {
                    obj['public'] = _BankAccountDescriptor2.default.constructFromObject(data['public']);
                }
                if (data.hasOwnProperty('private')) {
                    obj['private'] = _BankAccountDescriptor2.default.constructFromObject(data['private']);
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'String');
                }
                if (data.hasOwnProperty('mandate')) {
                    obj['mandate'] = _PaymentContainerMandate2.default.constructFromObject(data['mandate']);
                }
            }
            return obj;
        }

        /**
         * Object of payment container
         * @member {String} object
         */


        /**
         * Id of payment container
         * @member {String} id
         */


        /**
         * Payment container contract
         * @member {module:model/PaymentContractsProductModel} contract
         */


        /**
         * Payment container customer
         * @member {module:model/PaymentCustomersProductModel} customer
         */


        /**
         * Assign to
         * @member {module:model/ProductInstanceUID} assign
         */


        /**
         * Type of payment container
         * @member {String} type
         */


        /**
         * Public payment instrument data
         * @member {module:model/BankAccountDescriptor} public
         */


        /**
         * Private payment instrument data
         * @member {module:model/BankAccountDescriptor} private
         */


        /**
         * Creation date
         * @member {String} created
         */


        /**
         * Last update date
         * @member {String} updated
         */


        /**
         * Payment container mandate
         * @member {module:model/PaymentContainerMandate} mandate
         */

    }]);

    return PaymentContainersProductModel;
}();

exports.default = PaymentContainersProductModel;