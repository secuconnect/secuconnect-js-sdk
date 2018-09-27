'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Contact = require('./Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentCustomersProductModel model module.
* @module model/PaymentCustomersProductModel
*/
var PaymentCustomersProductModel = function () {
    /**
    * Constructs a new <code>PaymentCustomersProductModel</code>.
    * @alias module:model/PaymentCustomersProductModel
    * @class
    */

    function PaymentCustomersProductModel() {
        _classCallCheck(this, PaymentCustomersProductModel);

        this.object = undefined;
        this.id = undefined;
        this.contract = undefined;
        this.contact = undefined;
        this.created = undefined;
        this.updated = undefined;
    }

    /**
    * Constructs a <code>PaymentCustomersProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentCustomersProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentCustomersProductModel} The populated <code>PaymentCustomersProductModel</code> instance.
    */


    _createClass(PaymentCustomersProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentCustomersProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ProductInstanceUID2.default.constructFromObject(data['contract']);
                }
                if (data.hasOwnProperty('contact')) {
                    obj['contact'] = _Contact2.default.constructFromObject(data['contact']);
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'Date');
                }
            }
            return obj;
        }

        /**
        * Object of payment customer
        * @member {String} object
        */

        /**
        * Id of payment customer
        * @member {String} id
        */

        /**
        * Payment contract
        * @member {module:model/ProductInstanceUID} contract
        */

        /**
        * Customer contact info
        * @member {module:model/Contact} contact
        */

        /**
        * Created at date
        * @member {Date} created
        */

        /**
        * Updated at date
        * @member {Date} updated
        */

    }]);

    return PaymentCustomersProductModel;
}();

exports.default = PaymentCustomersProductModel;