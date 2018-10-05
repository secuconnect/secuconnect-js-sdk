'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentContainersDTOCustomer = require('./PaymentContainersDTOCustomer');

var _PaymentContainersDTOCustomer2 = _interopRequireDefault(_PaymentContainersDTOCustomer);

var _PaymentContainersDTOPrivate = require('./PaymentContainersDTOPrivate');

var _PaymentContainersDTOPrivate2 = _interopRequireDefault(_PaymentContainersDTOPrivate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentContainersDTO model module.
* @module model/PaymentContainersDTO
*/
var PaymentContainersDTO = function () {
    /**
    * Constructs a new <code>PaymentContainersDTO</code>.
    * @alias module:model/PaymentContainersDTO
    * @class
    */

    function PaymentContainersDTO() {
        _classCallCheck(this, PaymentContainersDTO);

        this.customer = undefined;
        this.type = undefined;
        this.private = undefined;
    }

    /**
    * Constructs a <code>PaymentContainersDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersDTO} obj Optional instance to populate.
    * @return {module:model/PaymentContainersDTO} The populated <code>PaymentContainersDTO</code> instance.
    */


    _createClass(PaymentContainersDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContainersDTO();

                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentContainersDTOCustomer2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('private')) {
                    obj['private'] = _PaymentContainersDTOPrivate2.default.constructFromObject(data['private']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/PaymentContainersDTOCustomer} customer
        */

        /**
        * Type of Payment Containers
        * @member {String} type
        */

        /**
        * @member {module:model/PaymentContainersDTOPrivate} private
        */

    }]);

    return PaymentContainersDTO;
}();

exports.default = PaymentContainersDTO;