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
 * The SmartTransactionsCheckin model module.
 * @module model/SmartTransactionsCheckin
 */
var SmartTransactionsCheckin = function () {
    /**
     * Constructs a new <code>SmartTransactionsCheckin</code>.
     * @alias module:model/SmartTransactionsCheckin
     * @class
     */

    function SmartTransactionsCheckin() {
        _classCallCheck(this, SmartTransactionsCheckin);

        this.object = undefined;
        this.id = undefined;
        this.email = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsCheckin</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsCheckin} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsCheckin} The populated <code>SmartTransactionsCheckin</code> instance.
    */


    _createClass(SmartTransactionsCheckin, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsCheckin();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of smart transaction check in
         * @member {String} object
         */


        /**
         * Id of smart transaction check in
         * @member {String} id
         */


        /**
         * Email
         * @member {String} email
         */

    }]);

    return SmartTransactionsCheckin;
}();

exports.default = SmartTransactionsCheckin;