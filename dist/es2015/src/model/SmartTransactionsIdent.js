'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyMerchantcardsProductModel = require('./LoyaltyMerchantcardsProductModel');

var _LoyaltyMerchantcardsProductModel2 = _interopRequireDefault(_LoyaltyMerchantcardsProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SmartTransactionsIdent model module.
* @module model/SmartTransactionsIdent
*/
var SmartTransactionsIdent = function () {
    /**
    * Constructs a new <code>SmartTransactionsIdent</code>.
    * @alias module:model/SmartTransactionsIdent
    * @class
    */

    function SmartTransactionsIdent() {
        _classCallCheck(this, SmartTransactionsIdent);

        this.object = undefined;
        this.id = undefined;
        this.prefix = undefined;
        this.name = undefined;
        this.type = undefined;
        this.value = undefined;
        this.valid = undefined;
        this.merchantcard = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsIdent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsIdent} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsIdent} The populated <code>SmartTransactionsIdent</code> instance.
    */


    _createClass(SmartTransactionsIdent, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsIdent();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('prefix')) {
                    obj['prefix'] = _ApiClient2.default.convertToType(data['prefix'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
                if (data.hasOwnProperty('valid')) {
                    obj['valid'] = _ApiClient2.default.convertToType(data['valid'], 'Boolean');
                }
                if (data.hasOwnProperty('merchantcard')) {
                    obj['merchantcard'] = _LoyaltyMerchantcardsProductModel2.default.constructFromObject(data['merchantcard']);
                }
            }
            return obj;
        }

        /**
        * Object of smart transaction ident
        * @member {String} object
        */

        /**
        * Id of smart transaction ident
        * @member {String} id
        */

        /**
        * Prefix
        * @member {String} prefix
        */

        /**
        * Name
        * @member {String} name
        */

        /**
        * Type
        * @member {String} type
        */

        /**
        * Value
        * @member {String} value
        */

        /**
        * Valid
        * @member {Boolean} valid
        */

        /**
        * Loyalty merchant card
        * @member {module:model/LoyaltyMerchantcardsProductModel} merchantcard
        */

    }]);

    return SmartTransactionsIdent;
}();

exports.default = SmartTransactionsIdent;