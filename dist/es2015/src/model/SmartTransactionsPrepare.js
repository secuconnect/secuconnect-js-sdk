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
 * The SmartTransactionsPrepare model module.
 * @module model/SmartTransactionsPrepare
 */
var SmartTransactionsPrepare = function () {
    /**
     * Constructs a new <code>SmartTransactionsPrepare</code>.
     * @alias module:model/SmartTransactionsPrepare
     * @class
     */

    function SmartTransactionsPrepare() {
        _classCallCheck(this, SmartTransactionsPrepare);

        this.customer = undefined;
        this.container = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsPrepare</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsPrepare} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsPrepare} The populated <code>SmartTransactionsPrepare</code> instance.
    */


    _createClass(SmartTransactionsPrepare, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsPrepare();

                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _ProductInstanceUID2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('container')) {
                    obj['container'] = _ProductInstanceUID2.default.constructFromObject(data['container']);
                }
            }
            return obj;
        }

        /**
         * Customer
         * @member {module:model/ProductInstanceUID} customer
         */


        /**
         * Container
         * @member {module:model/ProductInstanceUID} container
         */

    }]);

    return SmartTransactionsPrepare;
}();

exports.default = SmartTransactionsPrepare;