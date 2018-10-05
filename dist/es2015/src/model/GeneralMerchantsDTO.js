'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GeneralMerchantsCheckoutOptions = require('./GeneralMerchantsCheckoutOptions');

var _GeneralMerchantsCheckoutOptions2 = _interopRequireDefault(_GeneralMerchantsCheckoutOptions);

var _GeneralMerchantsLegalDetails = require('./GeneralMerchantsLegalDetails');

var _GeneralMerchantsLegalDetails2 = _interopRequireDefault(_GeneralMerchantsLegalDetails);

var _GeneralMerchantsUrls = require('./GeneralMerchantsUrls');

var _GeneralMerchantsUrls2 = _interopRequireDefault(_GeneralMerchantsUrls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The GeneralMerchantsDTO model module.
* @module model/GeneralMerchantsDTO
*/
var GeneralMerchantsDTO = function () {
    /**
    * Constructs a new <code>GeneralMerchantsDTO</code>.
    * @alias module:model/GeneralMerchantsDTO
    * @class
    */

    function GeneralMerchantsDTO() {
        _classCallCheck(this, GeneralMerchantsDTO);

        this.legal_details = undefined;
        this.checkout_options = undefined;
        this.urls = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsDTO} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsDTO} The populated <code>GeneralMerchantsDTO</code> instance.
    */


    _createClass(GeneralMerchantsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsDTO();

                if (data.hasOwnProperty('legal_details')) {
                    obj['legal_details'] = _ApiClient2.default.convertToType(data['legal_details'], [_GeneralMerchantsLegalDetails2.default]);
                }
                if (data.hasOwnProperty('checkout_options')) {
                    obj['checkout_options'] = _GeneralMerchantsCheckoutOptions2.default.constructFromObject(data['checkout_options']);
                }
                if (data.hasOwnProperty('urls')) {
                    obj['urls'] = _ApiClient2.default.convertToType(data['urls'], [_GeneralMerchantsUrls2.default]);
                }
            }
            return obj;
        }

        /**
        * Legal details
        * @member {Array.<module:model/GeneralMerchantsLegalDetails>} legal_details
        */

        /**
        * Checkout options
        * @member {module:model/GeneralMerchantsCheckoutOptions} checkout_options
        */

        /**
        * Urls
        * @member {Array.<module:model/GeneralMerchantsUrls>} urls
        */

    }]);

    return GeneralMerchantsDTO;
}();

exports.default = GeneralMerchantsDTO;