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
* The SecupayTransactionCaptureDTO model module.
* @module model/SecupayTransactionCaptureDTO
*/
var SecupayTransactionCaptureDTO = function () {
    /**
    * Constructs a new <code>SecupayTransactionCaptureDTO</code>.
    * @alias module:model/SecupayTransactionCaptureDTO
    * @class
    */

    function SecupayTransactionCaptureDTO() {
        _classCallCheck(this, SecupayTransactionCaptureDTO);

        this.contract = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionCaptureDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionCaptureDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionCaptureDTO} The populated <code>SecupayTransactionCaptureDTO</code> instance.
    */


    _createClass(SecupayTransactionCaptureDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionCaptureDTO();

                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ApiClient2.default.convertToType(data['contract'], Object);
                }
            }
            return obj;
        }

        /**
        * The payment contract object
        * @member {Object} contract
        */

    }]);

    return SecupayTransactionCaptureDTO;
}();

exports.default = SecupayTransactionCaptureDTO;