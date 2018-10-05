'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentTransactionsProductModel = require('./PaymentTransactionsProductModel');

var _PaymentTransactionsProductModel2 = _interopRequireDefault(_PaymentTransactionsProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentTransactionsCancelList model module.
* @module model/PaymentTransactionsCancelList
*/
var PaymentTransactionsCancelList = function () {
    /**
    * Constructs a new <code>PaymentTransactionsCancelList</code>.
    * @alias module:model/PaymentTransactionsCancelList
    * @class
    */

    function PaymentTransactionsCancelList() {
        _classCallCheck(this, PaymentTransactionsCancelList);

        this.count = undefined;
        this.data = undefined;
    }

    /**
    * Constructs a <code>PaymentTransactionsCancelList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsCancelList} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsCancelList} The populated <code>PaymentTransactionsCancelList</code> instance.
    */


    _createClass(PaymentTransactionsCancelList, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionsCancelList();

                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_PaymentTransactionsProductModel2.default]);
                }
            }
            return obj;
        }

        /**
        * Count of returned payment contracts
        * @member {Number} count
        */

        /**
        * POST Payment/Transactions/{paymentTransactionId}/cancel
        * @member {Array.<module:model/PaymentTransactionsProductModel>} data
        */

    }]);

    return PaymentTransactionsCancelList;
}();

exports.default = PaymentTransactionsCancelList;