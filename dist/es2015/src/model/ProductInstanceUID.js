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
 * The ProductInstanceUID model module.
 * @module model/ProductInstanceUID
 */
var ProductInstanceUID = function () {
    /**
     * Constructs a new <code>ProductInstanceUID</code>.
     * Product name and instance id, uniquely identifying instance of Product
     * @alias module:model/ProductInstanceUID
     * @class
     */

    function ProductInstanceUID() {
        _classCallCheck(this, ProductInstanceUID);

        this.object = undefined;
        this.id = undefined;
    }

    /**
    * Constructs a <code>ProductInstanceUID</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductInstanceUID} obj Optional instance to populate.
    * @return {module:model/ProductInstanceUID} The populated <code>ProductInstanceUID</code> instance.
    */


    _createClass(ProductInstanceUID, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProductInstanceUID();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object type of instance
         * @member {String} object
         */


        /**
         * ID of instance
         * @member {String} id
         */

    }]);

    return ProductInstanceUID;
}();

exports.default = ProductInstanceUID;