'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartTransactionsBonusProducts = require('./SmartTransactionsBonusProducts');

var _SmartTransactionsBonusProducts2 = _interopRequireDefault(_SmartTransactionsBonusProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartTransactionsPreTransactionModel model module.
 * @module model/SmartTransactionsPreTransactionModel
 */
var SmartTransactionsPreTransactionModel = function () {
    /**
     * Constructs a new <code>SmartTransactionsPreTransactionModel</code>.
     * @alias module:model/SmartTransactionsPreTransactionModel
     * @class
     */

    function SmartTransactionsPreTransactionModel() {
        _classCallCheck(this, SmartTransactionsPreTransactionModel);

        this.missing_sum = undefined;
        this.bonus_products = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsPreTransactionModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsPreTransactionModel} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsPreTransactionModel} The populated <code>SmartTransactionsPreTransactionModel</code> instance.
    */


    _createClass(SmartTransactionsPreTransactionModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsPreTransactionModel();

                if (data.hasOwnProperty('missing_sum')) {
                    obj['missing_sum'] = _ApiClient2.default.convertToType(data['missing_sum'], 'Number');
                }
                if (data.hasOwnProperty('bonus_products')) {
                    obj['bonus_products'] = _ApiClient2.default.convertToType(data['bonus_products'], [_SmartTransactionsBonusProducts2.default]);
                }
            }
            return obj;
        }

        /**
         * missing sum
         * @member {Number} missing_sum
         */


        /**
         * SmartTransactionsPreTransactionModel
         * @member {Array.<module:model/SmartTransactionsBonusProducts>} bonus_products
         */

    }]);

    return SmartTransactionsPreTransactionModel;
}();

exports.default = SmartTransactionsPreTransactionModel;