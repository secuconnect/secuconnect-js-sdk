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
* The SecupayBasketItem model module.
* @module model/SecupayBasketItem
*/
var SecupayBasketItem = function () {
    /**
    * Constructs a new <code>SecupayBasketItem</code>.
    * Item describing single position in basket in transaction
    * @alias module:model/SecupayBasketItem
    * @class
    */

    function SecupayBasketItem() {
        _classCallCheck(this, SecupayBasketItem);

        this.article_number = undefined;
        this.quantity = undefined;
        this.name = undefined;
        this.model = undefined;
        this.ean = undefined;
        this.tax = undefined;
        this.total = undefined;
        this.price = undefined;
        this.apikey = undefined;
        this.transaction_hash = undefined;
        this.contract_id = undefined;
        this.reference_id = undefined;
        this.sub_basket = undefined;
    }

    /**
    * Constructs a <code>SecupayBasketItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayBasketItem} obj Optional instance to populate.
    * @return {module:model/SecupayBasketItem} The populated <code>SecupayBasketItem</code> instance.
    */


    _createClass(SecupayBasketItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayBasketItem();

                if (data.hasOwnProperty('article_number')) {
                    obj['article_number'] = _ApiClient2.default.convertToType(data['article_number'], 'String');
                }
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('model')) {
                    obj['model'] = _ApiClient2.default.convertToType(data['model'], 'String');
                }
                if (data.hasOwnProperty('ean')) {
                    obj['ean'] = _ApiClient2.default.convertToType(data['ean'], 'String');
                }
                if (data.hasOwnProperty('tax')) {
                    obj['tax'] = _ApiClient2.default.convertToType(data['tax'], 'String');
                }
                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('price')) {
                    obj['price'] = _ApiClient2.default.convertToType(data['price'], 'Number');
                }
                if (data.hasOwnProperty('apikey')) {
                    obj['apikey'] = _ApiClient2.default.convertToType(data['apikey'], 'String');
                }
                if (data.hasOwnProperty('transaction_hash')) {
                    obj['transaction_hash'] = _ApiClient2.default.convertToType(data['transaction_hash'], 'String');
                }
                if (data.hasOwnProperty('contract_id')) {
                    obj['contract_id'] = _ApiClient2.default.convertToType(data['contract_id'], 'String');
                }
                if (data.hasOwnProperty('reference_id')) {
                    obj['reference_id'] = _ApiClient2.default.convertToType(data['reference_id'], 'String');
                }
                if (data.hasOwnProperty('sub_basket')) {
                    obj['sub_basket'] = _ApiClient2.default.convertToType(data['sub_basket'], [SecupayBasketItem]);
                }
            }
            return obj;
        }

        /**
        * Article number of item
        * @member {String} article_number
        */

        /**
        * Quantity of articles in item
        * @member {Number} quantity
        */

        /**
        * Descriptive name of item
        * @member {String} name
        */

        /**
        * Model of item
        * @member {String} model
        */

        /**
        * EAN, European Article Number
        * @member {String} ean
        */

        /**
        * Applicable tax in percentages
        * @member {String} tax
        */

        /**
        * Total price
        * @member {Number} total
        */

        /**
        * Price of single article, if item is of article category
        * @member {Number} price
        */

        /**
        * Special param for stakeholder payments
        * @member {String} apikey
        */

        /**
        * Special param for payout payments
        * @member {String} transaction_hash
        */

        /**
        * Contract id - Special param for stakeholder payments
        * @member {String} contract_id
        */

        /**
        * Reference id - must be unique for the entire basket
        * @member {String} reference_id
        */

        /**
        * Mixed-Basket: All basket items for one merchant.
        * @member {Array.<module:model/SecupayBasketItem>} sub_basket
        */

    }]);

    return SecupayBasketItem;
}();

exports.default = SecupayBasketItem;