'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Contact = require('./Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _PaymentContractsDTOIFrameOpts = require('./PaymentContractsDTOIFrameOpts');

var _PaymentContractsDTOIFrameOpts2 = _interopRequireDefault(_PaymentContractsDTOIFrameOpts);

var _PaymentInformation = require('./PaymentInformation');

var _PaymentInformation2 = _interopRequireDefault(_PaymentInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentContractsDTORequestId model module.
 * @module model/PaymentContractsDTORequestId
 */
var PaymentContractsDTORequestId = function () {
    /**
     * Constructs a new <code>PaymentContractsDTORequestId</code>.
     * @alias module:model/PaymentContractsDTORequestId
     * @class
     */

    function PaymentContractsDTORequestId() {
        _classCallCheck(this, PaymentContractsDTORequestId);

        this.contact = undefined;
        this.project = undefined;
        this.payout_account = undefined;
        this.iframe_opts = undefined;
        this.payin_account = false;
    }

    /**
    * Constructs a <code>PaymentContractsDTORequestId</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTORequestId} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTORequestId} The populated <code>PaymentContractsDTORequestId</code> instance.
    */


    _createClass(PaymentContractsDTORequestId, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsDTORequestId();

                if (data.hasOwnProperty('contact')) {
                    obj['contact'] = _Contact2.default.constructFromObject(data['contact']);
                }
                if (data.hasOwnProperty('project')) {
                    obj['project'] = _ApiClient2.default.convertToType(data['project'], 'String');
                }
                if (data.hasOwnProperty('payout_account')) {
                    obj['payout_account'] = _PaymentInformation2.default.constructFromObject(data['payout_account']);
                }
                if (data.hasOwnProperty('iframe_opts')) {
                    obj['iframe_opts'] = _PaymentContractsDTOIFrameOpts2.default.constructFromObject(data['iframe_opts']);
                }
                if (data.hasOwnProperty('payin_account')) {
                    obj['payin_account'] = _ApiClient2.default.convertToType(data['payin_account'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Contact
         * @member {module:model/Contact} contact
         */


        /**
         * Name of the project (must be unique)
         * @member {String} project
         */


        /**
         * Merchants bank account for the payout
         * @member {module:model/PaymentInformation} payout_account
         */


        /**
         * IFrame opts
         * @member {module:model/PaymentContractsDTOIFrameOpts} iframe_opts
         */


        /**
         * Pay in account
         * @member {Boolean} payin_account
         * @default false
         */

    }]);

    return PaymentContractsDTORequestId;
}();

exports.default = PaymentContractsDTORequestId;