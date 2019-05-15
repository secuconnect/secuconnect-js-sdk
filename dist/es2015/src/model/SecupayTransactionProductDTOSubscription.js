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
 * The SecupayTransactionProductDTOSubscription model module.
 * @module model/SecupayTransactionProductDTOSubscription
 */
var SecupayTransactionProductDTOSubscription = function () {
    /**
     * Constructs a new <code>SecupayTransactionProductDTOSubscription</code>.
     * Recurring payments
     * @alias module:model/SecupayTransactionProductDTOSubscription
     * @class
     */

    function SecupayTransactionProductDTOSubscription() {
        _classCallCheck(this, SecupayTransactionProductDTOSubscription);

        this.purpose = undefined;
        this.id = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTOSubscription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTOSubscription} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTOSubscription} The populated <code>SecupayTransactionProductDTOSubscription</code> instance.
    */


    _createClass(SecupayTransactionProductDTOSubscription, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductDTOSubscription();

                if (data.hasOwnProperty('purpose')) {
                    obj['purpose'] = _ApiClient2.default.convertToType(data['purpose'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
            }
            return obj;
        }

        /**
         * The purpose of the subscription
         * @member {String} purpose
         */


        /**
         * Id of subscription, if exists
         * @member {Number} id
         */

    }]);

    return SecupayTransactionProductDTOSubscription;
}();

exports.default = SecupayTransactionProductDTOSubscription;