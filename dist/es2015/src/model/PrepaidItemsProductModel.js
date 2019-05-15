'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ItemGroup = require('./ItemGroup');

var _ItemGroup2 = _interopRequireDefault(_ItemGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PrepaidItemsProductModel model module.
 * @module model/PrepaidItemsProductModel
 */
var PrepaidItemsProductModel = function () {
    /**
     * Constructs a new <code>PrepaidItemsProductModel</code>.
     * @alias module:model/PrepaidItemsProductModel
     * @class
     */

    function PrepaidItemsProductModel() {
        _classCallCheck(this, PrepaidItemsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.retail_price = undefined;
        this.currency = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.commission = undefined;
        this.vtc_id = undefined;
        this.itemgroup = undefined;
        this.stock_limit_max = undefined;
        this.stock_limit_min = undefined;
        this.taxable = undefined;
        this.type = undefined;
    }

    /**
    * Constructs a <code>PrepaidItemsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidItemsProductModel} obj Optional instance to populate.
    * @return {module:model/PrepaidItemsProductModel} The populated <code>PrepaidItemsProductModel</code> instance.
    */


    _createClass(PrepaidItemsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidItemsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('retail_price')) {
                    obj['retail_price'] = _ApiClient2.default.convertToType(data['retail_price'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('commission')) {
                    obj['commission'] = _ApiClient2.default.convertToType(data['commission'], 'Number');
                }
                if (data.hasOwnProperty('vtc_id')) {
                    obj['vtc_id'] = _ApiClient2.default.convertToType(data['vtc_id'], 'String');
                }
                if (data.hasOwnProperty('itemgroup')) {
                    obj['itemgroup'] = _ItemGroup2.default.constructFromObject(data['itemgroup']);
                }
                if (data.hasOwnProperty('stock_limit_max')) {
                    obj['stock_limit_max'] = _ApiClient2.default.convertToType(data['stock_limit_max'], 'Number');
                }
                if (data.hasOwnProperty('stock_limit_min')) {
                    obj['stock_limit_min'] = _ApiClient2.default.convertToType(data['stock_limit_min'], 'Number');
                }
                if (data.hasOwnProperty('taxable')) {
                    obj['taxable'] = _ApiClient2.default.convertToType(data['taxable'], 'Boolean');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of prepaid item
         * @member {String} object
         */


        /**
         * Id of prepaid item
         * @member {String} id
         */


        /**
         * Retail price
         * @member {Number} retail_price
         */


        /**
         * Currency
         * @member {String} currency
         */


        /**
         * Description
         * @member {String} description
         */


        /**
         * Logo
         * @member {String} logo
         */


        /**
         * Commission
         * @member {Number} commission
         */


        /**
         * Vtc id
         * @member {String} vtc_id
         */


        /**
         * Item group
         * @member {module:model/ItemGroup} itemgroup
         */


        /**
         * Stock limit max
         * @member {Number} stock_limit_max
         */


        /**
         * Stock limit min
         * @member {Number} stock_limit_min
         */


        /**
         * Taxable
         * @member {Boolean} taxable
         */


        /**
         * Type
         * @member {String} type
         */

    }]);

    return PrepaidItemsProductModel;
}();

exports.default = PrepaidItemsProductModel;