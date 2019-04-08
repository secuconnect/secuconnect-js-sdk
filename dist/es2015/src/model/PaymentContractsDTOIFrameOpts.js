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
 * The PaymentContractsDTOIFrameOpts model module.
 * @module model/PaymentContractsDTOIFrameOpts
 */
var PaymentContractsDTOIFrameOpts = function () {
    /**
     * Constructs a new <code>PaymentContractsDTOIFrameOpts</code>.
     * @alias module:model/PaymentContractsDTOIFrameOpts
     * @class
     */

    function PaymentContractsDTOIFrameOpts() {
        _classCallCheck(this, PaymentContractsDTOIFrameOpts);

        this.show_basket = undefined;
        this.basket_title = undefined;
        this.submit_button_title = undefined;
        this.logo_base64 = undefined;
        this.cession = 'personal';
    }

    /**
    * Constructs a <code>PaymentContractsDTOIFrameOpts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTOIFrameOpts} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTOIFrameOpts} The populated <code>PaymentContractsDTOIFrameOpts</code> instance.
    */


    _createClass(PaymentContractsDTOIFrameOpts, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsDTOIFrameOpts();

                if (data.hasOwnProperty('show_basket')) {
                    obj['show_basket'] = _ApiClient2.default.convertToType(data['show_basket'], 'Boolean');
                }
                if (data.hasOwnProperty('basket_title')) {
                    obj['basket_title'] = _ApiClient2.default.convertToType(data['basket_title'], 'String');
                }
                if (data.hasOwnProperty('submit_button_title')) {
                    obj['submit_button_title'] = _ApiClient2.default.convertToType(data['submit_button_title'], 'String');
                }
                if (data.hasOwnProperty('logo_base64')) {
                    obj['logo_base64'] = _ApiClient2.default.convertToType(data['logo_base64'], 'String');
                }
                if (data.hasOwnProperty('cession')) {
                    obj['cession'] = _ApiClient2.default.convertToType(data['cession'], 'String');
                }
            }
            return obj;
        }

        /**
         * Display the basket items to the customer during the checkout
         * @member {Boolean} show_basket
         */


        /**
         * Default headline of the checkout page
         * @member {String} basket_title
         */


        /**
         * Default naming of the Submit-Button
         * @member {String} submit_button_title
         */


        /**
         * Logo base64-enconded
         * @member {String} logo_base64
         */


        /**
         * Cession ('formal', 'personal')
         * @member {String} cession
         * @default 'personal'
         */

    }]);

    return PaymentContractsDTOIFrameOpts;
}();

exports.default = PaymentContractsDTOIFrameOpts;