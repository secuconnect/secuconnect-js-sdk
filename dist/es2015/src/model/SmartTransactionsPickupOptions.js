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
* The SmartTransactionsPickupOptions model module.
* @module model/SmartTransactionsPickupOptions
*/
var SmartTransactionsPickupOptions = function () {
    /**
    * Constructs a new <code>SmartTransactionsPickupOptions</code>.
    * @alias module:model/SmartTransactionsPickupOptions
    * @class
    */

    function SmartTransactionsPickupOptions() {
        _classCallCheck(this, SmartTransactionsPickupOptions);

        this.code = undefined;
        this.date = undefined;
        this.store = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsPickupOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsPickupOptions} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsPickupOptions} The populated <code>SmartTransactionsPickupOptions</code> instance.
    */


    _createClass(SmartTransactionsPickupOptions, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsPickupOptions();

                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _ProductInstanceUID2.default.constructFromObject(data['store']);
                }
            }
            return obj;
        }

        /**
        * Code
        * @member {String} code
        */

        /**
        * Date
        * @member {Date} date
        */

        /**
        * Store
        * @member {module:model/ProductInstanceUID} store
        */

    }]);

    return SmartTransactionsPickupOptions;
}();

exports.default = SmartTransactionsPickupOptions;