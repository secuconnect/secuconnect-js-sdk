'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentContractsProductModel model module.
 * @module model/PaymentContractsProductModel
 */
var PaymentContractsProductModel = function () {
    /**
     * Constructs a new <code>PaymentContractsProductModel</code>.
     * @alias module:model/PaymentContractsProductModel
     * @class
     */

    function PaymentContractsProductModel() {
        _classCallCheck(this, PaymentContractsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.parent = undefined;
        this.demo = undefined;
        this.created = undefined;
        this.updated = undefined;
    }

    /**
    * Constructs a <code>PaymentContractsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentContractsProductModel} The populated <code>PaymentContractsProductModel</code> instance.
    */


    _createClass(PaymentContractsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('parent')) {
                    obj['parent'] = _ProductInstanceUID2.default.constructFromObject(data['parent']);
                }
                if (data.hasOwnProperty('demo')) {
                    obj['demo'] = _ApiClient2.default.convertToType(data['demo'], 'Boolean');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of payment contract
         * @member {String} object
         */


        /**
         * Id of payment contract
         * @member {String} id
         */


        /**
         * Payment contract
         * @member {module:model/ProductInstanceUID} parent
         */


        /**
         * Is this a demo contract
         * @member {Boolean} demo
         */


        /**
         * Created at date
         * @member {String} created
         */


        /**
         * Updated at date
         * @member {String} updated
         */

    }]);

    return PaymentContractsProductModel;
}();

exports.default = PaymentContractsProductModel;