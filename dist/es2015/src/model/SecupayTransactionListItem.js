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
 * The SecupayTransactionListItem model module.
 * @module model/SecupayTransactionListItem
 */
var SecupayTransactionListItem = function () {
    /**
     * Constructs a new <code>SecupayTransactionListItem</code>.
     * @alias module:model/SecupayTransactionListItem
     * @class
     */

    function SecupayTransactionListItem() {
        _classCallCheck(this, SecupayTransactionListItem);

        this.item_type = 'transaction_payout';
        this.reference_id = undefined;
        this.name = undefined;
        this.transaction_hash = undefined;
        this.transaction_id = undefined;
        this.container = undefined;
        this.total = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionListItem} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionListItem} The populated <code>SecupayTransactionListItem</code> instance.
    */


    _createClass(SecupayTransactionListItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionListItem();

                if (data.hasOwnProperty('item_type')) {
                    obj['item_type'] = _ApiClient2.default.convertToType(data['item_type'], 'String');
                }
                if (data.hasOwnProperty('reference_id')) {
                    obj['reference_id'] = _ApiClient2.default.convertToType(data['reference_id'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('transaction_hash')) {
                    obj['transaction_hash'] = _ApiClient2.default.convertToType(data['transaction_hash'], 'String');
                }
                if (data.hasOwnProperty('transaction_id')) {
                    obj['transaction_id'] = _ApiClient2.default.convertToType(data['transaction_id'], 'String');
                }
                if (data.hasOwnProperty('container')) {
                    obj['container'] = _ApiClient2.default.convertToType(data['container'], 'String');
                }
                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
            }
            return obj;
        }

        /**
         * Category of item
         * @member {String} item_type
         * @default 'transaction_payout'
         */


        /**
         * Reference id - must be unique for the entire basket
         * @member {String} reference_id
         */


        /**
         * Item name
         * @member {String} name
         */


        /**
         * Id of transaction
         * @member {String} transaction_hash
         */


        /**
         * Id of transaction
         * @member {String} transaction_id
         */


        /**
         * Payment Container ID
         * @member {String} container
         */


        /**
         * Total price
         * @member {Number} total
         */

    }]);

    return SecupayTransactionListItem;
}();

exports.default = SecupayTransactionListItem;