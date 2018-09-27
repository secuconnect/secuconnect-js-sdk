'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentContractsProductModel = require('./PaymentContractsProductModel');

var _PaymentContractsProductModel2 = _interopRequireDefault(_PaymentContractsProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentContractsList model module.
* @module model/PaymentContractsList
*/
var PaymentContractsList = function () {
    /**
    * Constructs a new <code>PaymentContractsList</code>.
    * @alias module:model/PaymentContractsList
    * @class
    */

    function PaymentContractsList() {
        _classCallCheck(this, PaymentContractsList);

        this.count = undefined;
        this.data = undefined;
    }

    /**
    * Constructs a <code>PaymentContractsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsList} obj Optional instance to populate.
    * @return {module:model/PaymentContractsList} The populated <code>PaymentContractsList</code> instance.
    */


    _createClass(PaymentContractsList, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsList();

                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_PaymentContractsProductModel2.default]);
                }
            }
            return obj;
        }

        /**
        * Number of existing payment contracts
        * @member {Number} count
        */

        /**
        * GET Payment/Contracts
        * @member {Array.<module:model/PaymentContractsProductModel>} data
        */

    }]);

    return PaymentContractsList;
}();

exports.default = PaymentContractsList;