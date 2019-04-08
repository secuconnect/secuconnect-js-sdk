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
 * The SmartTransactionsBasketInfo model module.
 * @module model/SmartTransactionsBasketInfo
 */
var SmartTransactionsBasketInfo = function () {
    /**
     * Constructs a new <code>SmartTransactionsBasketInfo</code>.
     * @alias module:model/SmartTransactionsBasketInfo
     * @class
     */

    function SmartTransactionsBasketInfo() {
        _classCallCheck(this, SmartTransactionsBasketInfo);

        this.sum = undefined;
        this.gratuity = undefined;
        this.currency = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsBasketInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketInfo} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketInfo} The populated <code>SmartTransactionsBasketInfo</code> instance.
    */


    _createClass(SmartTransactionsBasketInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsBasketInfo();

                if (data.hasOwnProperty('sum')) {
                    obj['sum'] = _ApiClient2.default.convertToType(data['sum'], 'Number');
                }
                if (data.hasOwnProperty('gratuity')) {
                    obj['gratuity'] = _ApiClient2.default.convertToType(data['gratuity'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
            }
            return obj;
        }

        /**
         * Sum
         * @member {Number} sum
         */


        /**
         * Gratuity
         * @member {Number} gratuity
         */


        /**
         * Currency
         * @member {String} currency
         */

    }]);

    return SmartTransactionsBasketInfo;
}();

exports.default = SmartTransactionsBasketInfo;