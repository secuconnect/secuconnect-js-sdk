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
 * The SecupayTransactionProductDTOOptData model module.
 * @module model/SecupayTransactionProductDTOOptData
 */
var SecupayTransactionProductDTOOptData = function () {
    /**
     * Constructs a new <code>SecupayTransactionProductDTOOptData</code>.
     * Options for customizing the checkout page
     * @alias module:model/SecupayTransactionProductDTOOptData
     * @class
     */

    function SecupayTransactionProductDTOOptData() {
        _classCallCheck(this, SecupayTransactionProductDTOOptData);

        this.has_accepted_disclaimer = undefined;
        this.language = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTOOptData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTOOptData} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTOOptData} The populated <code>SecupayTransactionProductDTOOptData</code> instance.
    */


    _createClass(SecupayTransactionProductDTOOptData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductDTOOptData();

                if (data.hasOwnProperty('has_accepted_disclaimer')) {
                    obj['has_accepted_disclaimer'] = _ApiClient2.default.convertToType(data['has_accepted_disclaimer'], 'String');
                }
                if (data.hasOwnProperty('language')) {
                    obj['language'] = _ApiClient2.default.convertToType(data['language'], 'String');
                }
            }
            return obj;
        }

        /**
         * Customer accepted disclaimer
         * @member {String} has_accepted_disclaimer
         */


        /**
         * Client language
         * @member {String} language
         */

    }]);

    return SecupayTransactionProductDTOOptData;
}();

exports.default = SecupayTransactionProductDTOOptData;