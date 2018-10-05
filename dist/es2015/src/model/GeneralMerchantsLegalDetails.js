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
* The GeneralMerchantsLegalDetails model module.
* @module model/GeneralMerchantsLegalDetails
*/
var GeneralMerchantsLegalDetails = function () {
    /**
    * Constructs a new <code>GeneralMerchantsLegalDetails</code>.
    * @alias module:model/GeneralMerchantsLegalDetails
    * @class
    */

    function GeneralMerchantsLegalDetails() {
        _classCallCheck(this, GeneralMerchantsLegalDetails);

        this.url = undefined;
        this.type = undefined;
        this.content_type = undefined;
        this.language = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsLegalDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsLegalDetails} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsLegalDetails} The populated <code>GeneralMerchantsLegalDetails</code> instance.
    */


    _createClass(GeneralMerchantsLegalDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsLegalDetails();

                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('content_type')) {
                    obj['content_type'] = _ApiClient2.default.convertToType(data['content_type'], 'String');
                }
                if (data.hasOwnProperty('language')) {
                    obj['language'] = _ApiClient2.default.convertToType(data['language'], 'String');
                }
            }
            return obj;
        }

        /**
        * Url
        * @member {String} url
        */

        /**
        * Type
        * @member {String} type
        */

        /**
        * Content type
        * @member {String} content_type
        */

        /**
        * Language
        * @member {String} language
        */

    }]);

    return GeneralMerchantsLegalDetails;
}();

exports.default = GeneralMerchantsLegalDetails;