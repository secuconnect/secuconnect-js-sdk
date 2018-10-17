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
* The SecupaySubTransactionProductModel model module.
* @module model/SecupaySubTransactionProductModel
*/
var SecupaySubTransactionProductModel = function () {
    /**
    * Constructs a new <code>SecupaySubTransactionProductModel</code>.
    * @alias module:model/SecupaySubTransactionProductModel
    * @class
    */

    function SecupaySubTransactionProductModel() {
        _classCallCheck(this, SecupaySubTransactionProductModel);

        this.id = undefined;
        this.trans_id = undefined;
        this.reference_id = undefined;
    }

    /**
    * Constructs a <code>SecupaySubTransactionProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupaySubTransactionProductModel} obj Optional instance to populate.
    * @return {module:model/SecupaySubTransactionProductModel} The populated <code>SecupaySubTransactionProductModel</code> instance.
    */


    _createClass(SecupaySubTransactionProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupaySubTransactionProductModel();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('trans_id')) {
                    obj['trans_id'] = _ApiClient2.default.convertToType(data['trans_id'], 'Number');
                }
                if (data.hasOwnProperty('reference_id')) {
                    obj['reference_id'] = _ApiClient2.default.convertToType(data['reference_id'], 'String');
                }
            }
            return obj;
        }

        /**
        * The payment id of the sub-transaction
        * @member {String} id
        */

        /**
        * Transaction identifier
        * @member {Number} trans_id
        */

        /**
        * Reference id - which was used in the mixed basket
        * @member {String} reference_id
        */

    }]);

    return SecupaySubTransactionProductModel;
}();

exports.default = SecupaySubTransactionProductModel;