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
* The ReceiptValue model module.
* @module model/ReceiptValue
*/
var ReceiptValue = function () {
    /**
    * Constructs a new <code>ReceiptValue</code>.
    * @alias module:model/ReceiptValue
    * @class
    */

    function ReceiptValue() {
        _classCallCheck(this, ReceiptValue);

        this.caption = undefined;
        this.name = undefined;
        this.value = undefined;
        this.text = undefined;
        this.decoration = undefined;
    }

    /**
    * Constructs a <code>ReceiptValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReceiptValue} obj Optional instance to populate.
    * @return {module:model/ReceiptValue} The populated <code>ReceiptValue</code> instance.
    */


    _createClass(ReceiptValue, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ReceiptValue();

                if (data.hasOwnProperty('caption')) {
                    obj['caption'] = _ApiClient2.default.convertToType(data['caption'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
                if (data.hasOwnProperty('text')) {
                    obj['text'] = _ApiClient2.default.convertToType(data['text'], 'String');
                }
                if (data.hasOwnProperty('decoration')) {
                    obj['decoration'] = _ApiClient2.default.convertToType(data['decoration'], ['String']);
                }
            }
            return obj;
        }

        /**
        * Caption
        * @member {String} caption
        */

        /**
        * Name
        * @member {String} name
        */

        /**
        * Value
        * @member {String} value
        */

        /**
        * Text
        * @member {String} text
        */

        /**
        * Decoration
        * @member {Array.<String>} decoration
        */

    }]);

    return ReceiptValue;
}();

exports.default = ReceiptValue;