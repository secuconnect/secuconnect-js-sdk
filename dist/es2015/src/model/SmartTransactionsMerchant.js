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
* The SmartTransactionsMerchant model module.
* @module model/SmartTransactionsMerchant
*/
var SmartTransactionsMerchant = function () {
    /**
    * Constructs a new <code>SmartTransactionsMerchant</code>.
    * @alias module:model/SmartTransactionsMerchant
    * @class
    * @implements module:model/ProductInstanceUID
    */

    function SmartTransactionsMerchant() {
        _classCallCheck(this, SmartTransactionsMerchant);

        this.companyname = undefined;
        this.object = undefined;
        this.id = undefined;


        _ProductInstanceUID2.default.call(this);
    }

    /**
    * Constructs a <code>SmartTransactionsMerchant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsMerchant} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsMerchant} The populated <code>SmartTransactionsMerchant</code> instance.
    */


    _createClass(SmartTransactionsMerchant, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsMerchant();

                _ProductInstanceUID2.default.constructFromObject(data, obj);

                if (data.hasOwnProperty('companyname')) {
                    obj['companyname'] = _ApiClient2.default.convertToType(data['companyname'], 'String');
                }
            }
            return obj;
        }

        /**
        * Company name
        * @member {String} companyname
        */


        // Implement ProductInstanceUID interface:
        /**
        * Object type of instance
        * @member {String} object
        */

        /**
            * ID of instance
            * @member {String} id
            */

    }]);

    return SmartTransactionsMerchant;
}();

exports.default = SmartTransactionsMerchant;