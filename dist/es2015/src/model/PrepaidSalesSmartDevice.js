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
* The PrepaidSalesSmartDevice model module.
* @module model/PrepaidSalesSmartDevice
*/
var PrepaidSalesSmartDevice = function () {
    /**
    * Constructs a new <code>PrepaidSalesSmartDevice</code>.
    * @alias module:model/PrepaidSalesSmartDevice
    * @class
    */

    function PrepaidSalesSmartDevice() {
        _classCallCheck(this, PrepaidSalesSmartDevice);

        this.object = undefined;
        this.id = undefined;
        this.description = undefined;
        this.vendor_uid = undefined;
    }

    /**
    * Constructs a <code>PrepaidSalesSmartDevice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesSmartDevice} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesSmartDevice} The populated <code>PrepaidSalesSmartDevice</code> instance.
    */


    _createClass(PrepaidSalesSmartDevice, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidSalesSmartDevice();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('vendor_uid')) {
                    obj['vendor_uid'] = _ApiClient2.default.convertToType(data['vendor_uid'], 'String');
                }
            }
            return obj;
        }

        /**
        * Object of smart device
        * @member {String} object
        */

        /**
        * Id of smart device
        * @member {String} id
        */

        /**
        * Smart device description
        * @member {String} description
        */

        /**
        * Smart device vendor uid
        * @member {String} vendor_uid
        */

    }]);

    return PrepaidSalesSmartDevice;
}();

exports.default = PrepaidSalesSmartDevice;