'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SecupayBasketItem = require('./SecupayBasketItem');

var _SecupayBasketItem2 = _interopRequireDefault(_SecupayBasketItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SecupayTransactionUpdateBasketDTO model module.
* @module model/SecupayTransactionUpdateBasketDTO
*/
var SecupayTransactionUpdateBasketDTO = function () {
    /**
    * Constructs a new <code>SecupayTransactionUpdateBasketDTO</code>.
    * @alias module:model/SecupayTransactionUpdateBasketDTO
    * @class
    */

    function SecupayTransactionUpdateBasketDTO() {
        _classCallCheck(this, SecupayTransactionUpdateBasketDTO);

        this.contract = undefined;
        this.basket = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionUpdateBasketDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionUpdateBasketDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionUpdateBasketDTO} The populated <code>SecupayTransactionUpdateBasketDTO</code> instance.
    */


    _createClass(SecupayTransactionUpdateBasketDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionUpdateBasketDTO();

                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ApiClient2.default.convertToType(data['contract'], Object);
                }
                if (data.hasOwnProperty('basket')) {
                    obj['basket'] = _ApiClient2.default.convertToType(data['basket'], [_SecupayBasketItem2.default]);
                }
            }
            return obj;
        }

        /**
        * The payment contract object
        * @member {Object} contract
        */

        /**
        * A list of items that are being purchased.
        * @member {Array.<module:model/SecupayBasketItem>} basket
        */

    }]);

    return SecupayTransactionUpdateBasketDTO;
}();

exports.default = SecupayTransactionUpdateBasketDTO;