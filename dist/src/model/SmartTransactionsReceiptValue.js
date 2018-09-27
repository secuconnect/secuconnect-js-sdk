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
* The SmartTransactionsReceiptValue model module.
* @module model/SmartTransactionsReceiptValue
*/
var SmartTransactionsReceiptValue = function () {
    /**
    * Constructs a new <code>SmartTransactionsReceiptValue</code>.
    * @alias module:model/SmartTransactionsReceiptValue
    * @class
    */

    function SmartTransactionsReceiptValue() {
        _classCallCheck(this, SmartTransactionsReceiptValue);

        this.caption = undefined;
        this.text = undefined;
        this.name = undefined;
        this.value = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsReceiptValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsReceiptValue} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsReceiptValue} The populated <code>SmartTransactionsReceiptValue</code> instance.
    */


    _createClass(SmartTransactionsReceiptValue, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsReceiptValue();

                if (data.hasOwnProperty('caption')) {
                    obj['caption'] = _ApiClient2.default.convertToType(data['caption'], 'String');
                }
                if (data.hasOwnProperty('text')) {
                    obj['text'] = _ApiClient2.default.convertToType(data['text'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
            }
            return obj;
        }

        /**
        * Caption
        * @member {String} caption
        */

        /**
        * Text
        * @member {String} text
        */

        /**
        * Name
        * @member {String} name
        */

        /**
        * Value
        * @member {String} value
        */

    }]);

    return SmartTransactionsReceiptValue;
}();

exports.default = SmartTransactionsReceiptValue;