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
 * The BankAccountDescriptor model module.
 * @module model/BankAccountDescriptor
 */
var BankAccountDescriptor = function () {
    /**
     * Constructs a new <code>BankAccountDescriptor</code>.
     * Bank account data like owner, iban, bic and bank name
     * @alias module:model/BankAccountDescriptor
     * @class
     */

    function BankAccountDescriptor() {
        _classCallCheck(this, BankAccountDescriptor);

        this.iban = undefined;
        this.bic = undefined;
        this.owner = undefined;
        this.bankname = undefined;
        this.purpose = undefined;
    }

    /**
    * Constructs a <code>BankAccountDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BankAccountDescriptor} obj Optional instance to populate.
    * @return {module:model/BankAccountDescriptor} The populated <code>BankAccountDescriptor</code> instance.
    */


    _createClass(BankAccountDescriptor, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new BankAccountDescriptor();

                if (data.hasOwnProperty('iban')) {
                    obj['iban'] = _ApiClient2.default.convertToType(data['iban'], 'String');
                }
                if (data.hasOwnProperty('bic')) {
                    obj['bic'] = _ApiClient2.default.convertToType(data['bic'], 'String');
                }
                if (data.hasOwnProperty('owner')) {
                    obj['owner'] = _ApiClient2.default.convertToType(data['owner'], 'String');
                }
                if (data.hasOwnProperty('bankname')) {
                    obj['bankname'] = _ApiClient2.default.convertToType(data['bankname'], 'String');
                }
                if (data.hasOwnProperty('purpose')) {
                    obj['purpose'] = _ApiClient2.default.convertToType(data['purpose'], 'String');
                }
            }
            return obj;
        }

        /**
         * IBAN
         * @member {String} iban
         */


        /**
         * BIC
         * @member {String} bic
         */


        /**
         * Owner
         * @member {String} owner
         */


        /**
         * Bank name
         * @member {String} bankname
         */


        /**
         * Purpose
         * @member {String} purpose
         */

    }]);

    return BankAccountDescriptor;
}();

exports.default = BankAccountDescriptor;