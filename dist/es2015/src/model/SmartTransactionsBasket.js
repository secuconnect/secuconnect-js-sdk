'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartTransactionsBasketProduct = require('./SmartTransactionsBasketProduct');

var _SmartTransactionsBasketProduct2 = _interopRequireDefault(_SmartTransactionsBasketProduct);

var _SmartTransactionsBasketText = require('./SmartTransactionsBasketText');

var _SmartTransactionsBasketText2 = _interopRequireDefault(_SmartTransactionsBasketText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartTransactionsBasket model module.
 * @module model/SmartTransactionsBasket
 */
var SmartTransactionsBasket = function () {
    /**
     * Constructs a new <code>SmartTransactionsBasket</code>.
     * @alias module:model/SmartTransactionsBasket
     * @class
     */

    function SmartTransactionsBasket() {
        _classCallCheck(this, SmartTransactionsBasket);

        this.products = undefined;
        this.texts = undefined;
        this.type = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsBasket</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasket} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasket} The populated <code>SmartTransactionsBasket</code> instance.
    */


    _createClass(SmartTransactionsBasket, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsBasket();

                if (data.hasOwnProperty('products')) {
                    obj['products'] = _ApiClient2.default.convertToType(data['products'], [_SmartTransactionsBasketProduct2.default]);
                }
                if (data.hasOwnProperty('texts')) {
                    obj['texts'] = _ApiClient2.default.convertToType(data['texts'], [_SmartTransactionsBasketText2.default]);
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
            }
            return obj;
        }

        /**
         * Products
         * @member {Array.<module:model/SmartTransactionsBasketProduct>} products
         */


        /**
         * Texts
         * @member {Array.<module:model/SmartTransactionsBasketText>} texts
         */


        /**
         * Basket Type
         * @member {String} type
         */

    }]);

    return SmartTransactionsBasket;
}();

exports.default = SmartTransactionsBasket;