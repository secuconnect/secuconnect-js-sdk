'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartTransactionsBasketProductGroup = require('./SmartTransactionsBasketProductGroup');

var _SmartTransactionsBasketProductGroup2 = _interopRequireDefault(_SmartTransactionsBasketProductGroup);

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
        this.desc = undefined;
        this.articleNumber = undefined;
        this.ean = undefined;
        this.quantity = undefined;
        this.priceOne = undefined;
        this.tax = undefined;
        this.group = undefined;
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
                if (data.hasOwnProperty('desc')) {
                    obj['desc'] = _ApiClient2.default.convertToType(data['desc'], 'String');
                }
                if (data.hasOwnProperty('articleNumber')) {
                    obj['articleNumber'] = _ApiClient2.default.convertToType(data['articleNumber'], 'String');
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
                if (data.hasOwnProperty('tax')) {
                    obj['tax'] = _ApiClient2.default.convertToType(data['tax'], 'Number');
                }
                if (data.hasOwnProperty('group')) {
                    obj['group'] = _ApiClient2.default.convertToType(data['group'], [_SmartTransactionsBasketProductGroup2.default]);
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
        * Desc
        * @member {String} desc
        */

        /**
        * Article number
        * @member {String} articleNumber
        */

        /**
        * Ean
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
        * Tax
        * @member {Number} tax
        */

        /**
        * Group
        * @member {Array.<module:model/SmartTransactionsBasketProductGroup>} group
        */

    }]);

    return SmartTransactionsBasketProduct;
}();

exports.default = SmartTransactionsBasketProduct;