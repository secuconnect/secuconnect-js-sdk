'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _BankAccountDescriptor = require('./BankAccountDescriptor');

var _BankAccountDescriptor2 = _interopRequireDefault(_BankAccountDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LoyaltyCustomersPaymentContainerModel model module.
* @module model/LoyaltyCustomersPaymentContainerModel
*/
var LoyaltyCustomersPaymentContainerModel = function () {
    /**
    * Constructs a new <code>LoyaltyCustomersPaymentContainerModel</code>.
    * @alias module:model/LoyaltyCustomersPaymentContainerModel
    * @class
    */

    function LoyaltyCustomersPaymentContainerModel() {
        _classCallCheck(this, LoyaltyCustomersPaymentContainerModel);

        this.object = undefined;
        this.id = undefined;
        this.type = undefined;
        this.payment_information = undefined;
        this.last_usage = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCustomersPaymentContainerModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersPaymentContainerModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersPaymentContainerModel} The populated <code>LoyaltyCustomersPaymentContainerModel</code> instance.
    */


    _createClass(LoyaltyCustomersPaymentContainerModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCustomersPaymentContainerModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('payment_information')) {
                    obj['payment_information'] = _BankAccountDescriptor2.default.constructFromObject(data['payment_information']);
                }
                if (data.hasOwnProperty('last_usage')) {
                    obj['last_usage'] = _ApiClient2.default.convertToType(data['last_usage'], 'Date');
                }
            }
            return obj;
        }

        /**
        * LoyaltyCustomersPaymentContainerModel
        * @member {String} object
        */

        /**
        * LoyaltyCustomersPaymentContainerModel
        * @member {String} id
        */

        /**
        * LoyaltyCustomersPaymentContainerModel
        * @member {String} type
        */

        /**
        * Payment instrument data
        * @member {module:model/BankAccountDescriptor} payment_information
        */

        /**
        * Last Usage date
        * @member {Date} last_usage
        */

    }]);

    return LoyaltyCustomersPaymentContainerModel;
}();

exports.default = LoyaltyCustomersPaymentContainerModel;