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
* The SmartTransactionsBonusProducts model module.
* @module model/SmartTransactionsBonusProducts
*/
var SmartTransactionsBonusProducts = function () {
    /**
    * Constructs a new <code>SmartTransactionsBonusProducts</code>.
    * @alias module:model/SmartTransactionsBonusProducts
    * @class
    */

    function SmartTransactionsBonusProducts() {
        _classCallCheck(this, SmartTransactionsBonusProducts);

        this.id = undefined;
        this.tax = undefined;
        this.priceOne = undefined;
        this.quantity = undefined;
        this.desc = undefined;
        this.articleNumber = undefined;
        this.ean = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsBonusProducts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBonusProducts} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBonusProducts} The populated <code>SmartTransactionsBonusProducts</code> instance.
    */


    _createClass(SmartTransactionsBonusProducts, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsBonusProducts();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('tax')) {
                    obj['tax'] = _ApiClient2.default.convertToType(data['tax'], 'Number');
                }
                if (data.hasOwnProperty('priceOne')) {
                    obj['priceOne'] = _ApiClient2.default.convertToType(data['priceOne'], 'Number');
                }
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
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
            }
            return obj;
        }

        /**
        * Bonus Product ID
        * @member {Number} id
        */

        /**
        * Tax
        * @member {Number} tax
        */

        /**
        * price of one bonus product
        * @member {Number} priceOne
        */

        /**
        * amount of bonus products
        * @member {Number} quantity
        */

        /**
        * description
        * @member {String} desc
        */

        /**
        * article Number
        * @member {String} articleNumber
        */

        /**
        * ean
        * @member {String} ean
        */

    }]);

    return SmartTransactionsBonusProducts;
}();

exports.default = SmartTransactionsBonusProducts;