'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ItemGroup = require('./ItemGroup');

var _ItemGroup2 = _interopRequireDefault(_ItemGroup);

var _PrepaidSalesItem = require('./PrepaidSalesItem');

var _PrepaidSalesItem2 = _interopRequireDefault(_PrepaidSalesItem);

var _PrepaidSalesSmartDevice = require('./PrepaidSalesSmartDevice');

var _PrepaidSalesSmartDevice2 = _interopRequireDefault(_PrepaidSalesSmartDevice);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PrepaidSalesProductModel model module.
 * @module model/PrepaidSalesProductModel
 */
var PrepaidSalesProductModel = function () {
    /**
     * Constructs a new <code>PrepaidSalesProductModel</code>.
     * @alias module:model/PrepaidSalesProductModel
     * @class
     */

    function PrepaidSalesProductModel() {
        _classCallCheck(this, PrepaidSalesProductModel);

        this.object = undefined;
        this.id = undefined;
        this.status = undefined;
        this.stock = undefined;
        this.item = undefined;
        this.itemgroup = undefined;
        this.smart_device = undefined;
        this.merchant = undefined;
        this.store = undefined;
        this.contract = undefined;
        this.created = undefined;
        this.demo = undefined;
        this.description = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.commission = undefined;
        this.commission_currency = undefined;
        this.code = undefined;
        this.serial = undefined;
        this.cardnumber = undefined;
        this.expire_date = undefined;
        this.provider_delivery_number = undefined;
        this.receipt_header = undefined;
        this.receipt_customer = undefined;
        this.receipt_zvt = undefined;
        this.receipt_dealer = undefined;
        this.vtc_tid = undefined;
    }

    /**
    * Constructs a <code>PrepaidSalesProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesProductModel} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesProductModel} The populated <code>PrepaidSalesProductModel</code> instance.
    */


    _createClass(PrepaidSalesProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidSalesProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('stock')) {
                    obj['stock'] = _ProductInstanceUID2.default.constructFromObject(data['stock']);
                }
                if (data.hasOwnProperty('item')) {
                    obj['item'] = _PrepaidSalesItem2.default.constructFromObject(data['item']);
                }
                if (data.hasOwnProperty('itemgroup')) {
                    obj['itemgroup'] = _ItemGroup2.default.constructFromObject(data['itemgroup']);
                }
                if (data.hasOwnProperty('smart_device')) {
                    obj['smart_device'] = _PrepaidSalesSmartDevice2.default.constructFromObject(data['smart_device']);
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ProductInstanceUID2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _Store2.default.constructFromObject(data['store']);
                }
                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ProductInstanceUID2.default.constructFromObject(data['contract']);
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('demo')) {
                    obj['demo'] = _ApiClient2.default.convertToType(data['demo'], 'Boolean');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('commission')) {
                    obj['commission'] = _ApiClient2.default.convertToType(data['commission'], 'Number');
                }
                if (data.hasOwnProperty('commission_currency')) {
                    obj['commission_currency'] = _ApiClient2.default.convertToType(data['commission_currency'], 'String');
                }
                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('serial')) {
                    obj['serial'] = _ApiClient2.default.convertToType(data['serial'], 'String');
                }
                if (data.hasOwnProperty('cardnumber')) {
                    obj['cardnumber'] = _ApiClient2.default.convertToType(data['cardnumber'], 'String');
                }
                if (data.hasOwnProperty('expire_date')) {
                    obj['expire_date'] = _ApiClient2.default.convertToType(data['expire_date'], 'String');
                }
                if (data.hasOwnProperty('provider_delivery_number')) {
                    obj['provider_delivery_number'] = _ApiClient2.default.convertToType(data['provider_delivery_number'], 'String');
                }
                if (data.hasOwnProperty('receipt_header')) {
                    obj['receipt_header'] = _ApiClient2.default.convertToType(data['receipt_header'], 'String');
                }
                if (data.hasOwnProperty('receipt_customer')) {
                    obj['receipt_customer'] = _ApiClient2.default.convertToType(data['receipt_customer'], 'String');
                }
                if (data.hasOwnProperty('receipt_zvt')) {
                    obj['receipt_zvt'] = _ApiClient2.default.convertToType(data['receipt_zvt'], 'String');
                }
                if (data.hasOwnProperty('receipt_dealer')) {
                    obj['receipt_dealer'] = _ApiClient2.default.convertToType(data['receipt_dealer'], 'String');
                }
                if (data.hasOwnProperty('vtc_tid')) {
                    obj['vtc_tid'] = _ApiClient2.default.convertToType(data['vtc_tid'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of prepaid sale
         * @member {String} object
         */


        /**
         * Id of prepaid sale
         * @member {String} id
         */


        /**
         * Status
         * @member {String} status
         */


        /**
         * Prepaid stock
         * @member {module:model/ProductInstanceUID} stock
         */


        /**
         * Prepaid item
         * @member {module:model/PrepaidSalesItem} item
         */


        /**
         * Prepaid item group
         * @member {module:model/ItemGroup} itemgroup
         */


        /**
         * Smart device
         * @member {module:model/PrepaidSalesSmartDevice} smart_device
         */


        /**
         * General merchant
         * @member {module:model/ProductInstanceUID} merchant
         */


        /**
         * General store
         * @member {module:model/Store} store
         */


        /**
         * Prepaid contract
         * @member {module:model/ProductInstanceUID} contract
         */


        /**
         * Prepaid sale creation date
         * @member {String} created
         */


        /**
         * Demo
         * @member {Boolean} demo
         */


        /**
         * Description
         * @member {String} description
         */


        /**
         * Amount
         * @member {Number} amount
         */


        /**
         * Currency
         * @member {String} currency
         */


        /**
         * Commission
         * @member {Number} commission
         */


        /**
         * Commission currency
         * @member {String} commission_currency
         */


        /**
         * Code
         * @member {String} code
         */


        /**
         * Serial
         * @member {String} serial
         */


        /**
         * Card number
         * @member {String} cardnumber
         */


        /**
         * Expire date
         * @member {String} expire_date
         */


        /**
         * Provider delivery number
         * @member {String} provider_delivery_number
         */


        /**
         * Receipt header
         * @member {String} receipt_header
         */


        /**
         * Receipt customer
         * @member {String} receipt_customer
         */


        /**
         * Receipt zvt
         * @member {String} receipt_zvt
         */


        /**
         * Receipt dealer
         * @member {String} receipt_dealer
         */


        /**
         * Vtc tid
         * @member {String} vtc_tid
         */

    }]);

    return PrepaidSalesProductModel;
}();

exports.default = PrepaidSalesProductModel;