'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ReceiptType = require('./ReceiptType');

var _ReceiptType2 = _interopRequireDefault(_ReceiptType);

var _ReceiptValue = require('./ReceiptValue');

var _ReceiptValue2 = _interopRequireDefault(_ReceiptValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ReceiptTypeValue model module.
 * @module model/ReceiptTypeValue
 */
var ReceiptTypeValue = function () {
    /**
     * Constructs a new <code>ReceiptTypeValue</code>.
     * @alias module:model/ReceiptTypeValue
     * @class
     * @implements module:model/ReceiptType
     */

    function ReceiptTypeValue() {
        _classCallCheck(this, ReceiptTypeValue);

        this.value = undefined;
        this.type = undefined;


        _ReceiptType2.default.call(this);
    }

    /**
    * Constructs a <code>ReceiptTypeValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReceiptTypeValue} obj Optional instance to populate.
    * @return {module:model/ReceiptTypeValue} The populated <code>ReceiptTypeValue</code> instance.
    */


    _createClass(ReceiptTypeValue, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ReceiptTypeValue();

                _ReceiptType2.default.constructFromObject(data, obj);
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ReceiptValue2.default.constructFromObject(data['value']);
                }
            }
            return obj;
        }

        /**
         * Value object
         * @member {module:model/ReceiptValue} value
         */


        // Implement ReceiptType interface:

        /**
         * Type
         * @member {String} type
         */

    }]);

    return ReceiptTypeValue;
}();

exports.default = ReceiptTypeValue;