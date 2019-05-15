'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartTransactionsReceiptValue = require('./SmartTransactionsReceiptValue');

var _SmartTransactionsReceiptValue2 = _interopRequireDefault(_SmartTransactionsReceiptValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartTransactionsReceipt model module.
 * @module model/SmartTransactionsReceipt
 */
var SmartTransactionsReceipt = function () {
    /**
     * Constructs a new <code>SmartTransactionsReceipt</code>.
     * @alias module:model/SmartTransactionsReceipt
     * @class
     */

    function SmartTransactionsReceipt() {
        _classCallCheck(this, SmartTransactionsReceipt);

        this.type = undefined;
        this.value = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsReceipt</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsReceipt} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsReceipt} The populated <code>SmartTransactionsReceipt</code> instance.
    */


    _createClass(SmartTransactionsReceipt, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsReceipt();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _SmartTransactionsReceiptValue2.default.constructFromObject(data['value']);
                }
            }
            return obj;
        }

        /**
         * Type
         * @member {String} type
         */


        /**
         * Value
         * @member {module:model/SmartTransactionsReceiptValue} value
         */

    }]);

    return SmartTransactionsReceipt;
}();

exports.default = SmartTransactionsReceipt;