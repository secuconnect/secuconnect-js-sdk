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
 * The PrepaidZvtDTO model module.
 * @module model/PrepaidZvtDTO
 */
var PrepaidZvtDTO = function () {
    /**
     * Constructs a new <code>PrepaidZvtDTO</code>.
     * @alias module:model/PrepaidZvtDTO
     * @class
     */

    function PrepaidZvtDTO() {
        _classCallCheck(this, PrepaidZvtDTO);

        this.amount = undefined;
        this.product_id = undefined;
    }

    /**
    * Constructs a <code>PrepaidZvtDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidZvtDTO} obj Optional instance to populate.
    * @return {module:model/PrepaidZvtDTO} The populated <code>PrepaidZvtDTO</code> instance.
    */


    _createClass(PrepaidZvtDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidZvtDTO();

                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
            }
            return obj;
        }

        /**
         * amount
         * @member {Number} amount
         */


        /**
         * Product identifier
         * @member {Number} product_id
         */

    }]);

    return PrepaidZvtDTO;
}();

exports.default = PrepaidZvtDTO;