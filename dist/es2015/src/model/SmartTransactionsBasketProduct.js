'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartTransactionsBasketProductGroup = require('./SmartTransactionsBasketProductGroup');

var _SmartTransactionsBasketProductGroup2 = _interopRequireDefault(_SmartTransactionsBasketProductGroup);

var _SmartTransactionsSubBasketProduct = require('./SmartTransactionsSubBasketProduct');

var _SmartTransactionsSubBasketProduct2 = _interopRequireDefault(_SmartTransactionsSubBasketProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartTransactionsBasketProduct model module.
 * @module model/SmartTransactionsBasketProduct
 */
var SmartTransactionsBasketProduct = function () {
    /**
     * Constructs a new <code>SmartTransactionsBasketProduct</code>.
     * @alias module:model/SmartTransactionsBasketProduct
     * @class
     */

    function SmartTransactionsBasketProduct() {
        _classCallCheck(this, SmartTransactionsBasketProduct);

        this.id = undefined;
        this.parent = undefined;
        this.item_type = undefined;
        this.desc = undefined;
        this.articleNumber = undefined;
        this.serialNumber = undefined;
        this.ean = undefined;
        this.quantity = undefined;
        this.priceOne = undefined;
        this.sum = undefined;
        this.tax = undefined;
        this.reference_id = undefined;
        this.contract_id = undefined;
        this.group = undefined;
        this.sub_basket = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsBasketProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketProduct} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketProduct} The populated <code>SmartTransactionsBasketProduct</code> instance.
    */


    _createClass(SmartTransactionsBasketProduct, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsBasketProduct();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('parent')) {
                    obj['parent'] = _ApiClient2.default.convertToType(data['parent'], 'Number');
                }
                if (data.hasOwnProperty('item_type')) {
                    obj['item_type'] = _ApiClient2.default.convertToType(data['item_type'], 'String');
                }
                if (data.hasOwnProperty('desc')) {
                    obj['desc'] = _ApiClient2.default.convertToType(data['desc'], 'String');
                }
                if (data.hasOwnProperty('articleNumber')) {
                    obj['articleNumber'] = _ApiClient2.default.convertToType(data['articleNumber'], 'String');
                }
                if (data.hasOwnProperty('serialNumber')) {
                    obj['serialNumber'] = _ApiClient2.default.convertToType(data['serialNumber'], 'String');
                }
                if (data.hasOwnProperty('ean')) {
                    obj['ean'] = _ApiClient2.default.convertToType(data['ean'], 'String');
                }
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('priceOne')) {
                    obj['priceOne'] = _ApiClient2.default.convertToType(data['priceOne'], 'Number');
                }
                if (data.hasOwnProperty('sum')) {
                    obj['sum'] = _ApiClient2.default.convertToType(data['sum'], 'Number');
                }
                if (data.hasOwnProperty('tax')) {
                    obj['tax'] = _ApiClient2.default.convertToType(data['tax'], 'Number');
                }
                if (data.hasOwnProperty('reference_id')) {
                    obj['reference_id'] = _ApiClient2.default.convertToType(data['reference_id'], 'String');
                }
                if (data.hasOwnProperty('contract_id')) {
                    obj['contract_id'] = _ApiClient2.default.convertToType(data['contract_id'], 'String');
                }
                if (data.hasOwnProperty('group')) {
                    obj['group'] = _ApiClient2.default.convertToType(data['group'], [_SmartTransactionsBasketProductGroup2.default]);
                }
                if (data.hasOwnProperty('sub_basket')) {
                    obj['sub_basket'] = _ApiClient2.default.convertToType(data['sub_basket'], [_SmartTransactionsSubBasketProduct2.default]);
                }
            }
            return obj;
        }

        /**
         * Product id
         * @member {Number} id
         */


        /**
         * Parent
         * @member {Number} parent
         */


        /**
         * Category of item
         * @member {String} item_type
         */


        /**
         * Desc
         * @member {String} desc
         */


        /**
         * Article number
         * @member {String} articleNumber
         */


        /**
         * The serialnumber of the scanned posa card
         * @member {String} serialNumber
         */


        /**
         * international article number
         * @member {String} ean
         */


        /**
         * Quantity
         * @member {Number} quantity
         */


        /**
         * Price one
         * @member {Number} priceOne
         */


        /**
         * it is the value of the sum of the product with all items in sub_basket
         * @member {Number} sum
         */


        /**
         * Tax
         * @member {Number} tax
         */


        /**
         * The reference_id must be unique, it's a Reference for to the reference_id of SmartTransactionsSubBasketProduct [example: SmartTransactionsBasketProduct->reference_id is 1000 then all SmartTransactionsSubBasketProduct must have unique reference_id like 1000.1, 1000.2 etc.]
         * @member {String} reference_id
         */


        /**
         * contract id
         * @member {String} contract_id
         */


        /**
         * Group
         * @member {Array.<module:model/SmartTransactionsBasketProductGroup>} group
         */


        /**
         * sub basket Product
         * @member {Array.<module:model/SmartTransactionsSubBasketProduct>} sub_basket
         */

    }]);

    return SmartTransactionsBasketProduct;
}();

exports.default = SmartTransactionsBasketProduct;