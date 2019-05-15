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
 * The PrepaidSalesItem model module.
 * @module model/PrepaidSalesItem
 */
var PrepaidSalesItem = function () {
    /**
     * Constructs a new <code>PrepaidSalesItem</code>.
     * @alias module:model/PrepaidSalesItem
     * @class
     */

    function PrepaidSalesItem() {
        _classCallCheck(this, PrepaidSalesItem);

        this.object = undefined;
        this.id = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.type = undefined;
    }

    /**
    * Constructs a <code>PrepaidSalesItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesItem} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesItem} The populated <code>PrepaidSalesItem</code> instance.
    */


    _createClass(PrepaidSalesItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidSalesItem();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of item
         * @member {String} object
         */


        /**
         * Id of item
         * @member {String} id
         */


        /**
         * Item description
         * @member {String} description
         */


        /**
         * Item logo
         * @member {String} logo
         */


        /**
         * Item type
         * @member {String} type
         */

    }]);

    return PrepaidSalesItem;
}();

exports.default = PrepaidSalesItem;